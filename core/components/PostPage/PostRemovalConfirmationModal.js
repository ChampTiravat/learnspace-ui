import React from 'react'
import gql from 'graphql-tag'
import Router from 'next/router'
import PropTypes from 'prop-types'
import { graphql } from 'react-apollo'

import { DASHBOARD_PAGE } from '../../constants/endpoints/ui'
import { ModalBackground, ModalPanel } from '..//Modal'
import { Header, Body, Footer } from '../Card'
import { Button } from '../Button'

import { showLoadingModal, hideLoadingModal } from '../../reducers/mutation-status'
import { showErrorAlert } from '../../reducers/error-alert'

/**
 * @name PostRemovalConfirmationModal
 * @desc A modal prompts for post removal confirmation
 * @prop { isPostRMModalShowing } [REDUX] : State of the modal(is displaying or not)
 * @prop { hidePostRMModal } [REDUX] : Hide the modal
 * @prop { mutate } [APOLLO] : GraphQL mutation trigger function
 * @prop { postID } [NEXT] : Post ID
 */
class PostRemovalConfirmationModal extends React.Component {
  /**
   * @name removePost()
   * @desc Remove the post specify by a given post ID
   */
  removePost = async () => {
    await showLoadingModal()

    try {
      const { postID, mutate, hidePostRMModal } = this.props
      const result = await mutate({
        variables: { postID }
      })

      const { success, err } = result.data.removePost

      if (success) {
        hidePostRMModal()
        hideLoadingModal()

        Router.push(`${DASHBOARD_PAGE}`)
      } else {
        hidePostRMModal()
        hideLoadingModal()

        showErrorAlert(err.message)
      }
    } catch (err) {
      hidePostRMModal()
      showErrorAlert(err)
    }
  }

  render() {
    const { isPostRMModalShowing, hidePostRMModal } = this.props
    return (
      <ModalBackground show={isPostRMModalShowing}>
        <ModalPanel large>
          <Header>ยืนยันการดำเนินการ</Header>
          <Body style={{ color: '#777', fontSize: '1em', textAlign: 'center' }}>
            การดำเนินการนี้ไม่สามารถย้อนกลับได้ และคุณจะสูญเสียข้อมูลทั้งหมดของโพสนี้
            คุณต้องการดำเนินการต่อหรือไม่
          </Body>
          <Footer>
            <Button primary marginRight="0.5em" onClick={() => this.removePost()}>
              ยืนยัน
            </Button>
            <Button light onClick={() => hidePostRMModal()}>
              ยกเลิก
            </Button>
          </Footer>
        </ModalPanel>
      </ModalBackground>
    )
  }
}

PostRemovalConfirmationModal.propTypes = {
  isPostRMModalShowing: PropTypes.bool.isRequired,
  hidePostRMModal: PropTypes.func.isRequired,
  postID: PropTypes.string.isRequired,
  mutate: PropTypes.func.isRequired
}

const REMOVE_POST_MUTATION = gql`
  mutation removePost($postID: String!) {
    removePost(postID: $postID) {
      success
      err {
        message
      }
    }
  }
`

export default graphql(REMOVE_POST_MUTATION)(PostRemovalConfirmationModal)
