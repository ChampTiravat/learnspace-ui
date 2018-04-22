import React from 'react'
import Link from 'next/link'
import gql from 'graphql-tag'
import Router from 'next/router'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { graphql } from 'react-apollo'

import { CLASSROOM_PAGE } from '../../constants/endpoints/ui'
import { Button } from '../Button'
import Card from '../Card'

const ClassroomInvitationItemWrapper = styled.div`
  position: relative;
  display: inline-block;
  text-align: center;
  margin: 1em 1.5em;
  cursor: pointer;
  padding: 0;
`

const ClassroomInvitationItemCard = Card.extend`
  transition: all 200ms ease-in;
  margin-bottom: 1em;
  max-width: 650px;
  box-shadow: none;
  margin-left: 0;
  padding: 4em;
  &:hover {
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  }
`

const ClassroomInvitationItemLabel = styled.div`
  width: 470px;
  h3 {
    color: ${p => p.theme.PRIMARY_COLOR};
    margin-bottom: 1em;
    font-weight: 400;
    font-size: 1.3em;
  }
  p {
    font-weight: 300;
    font-size: 1.1em;
    color: #777;
    margin: 0;
  }
`

const ClassroomsInvitationWrapper = styled.div`
  height: ${p => p.height || '600px'};
  margin-top: 1.5em;
  overflow-y: auto;
`

const ClassroomInvitationProfilePicture = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  position: absolute;
  margin-top: -7.5em;
  margin-left: 25em;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
`

/**
 * @name ClassroomInvitationItem
 * @desc Display a received classroom invitation items of a particular user.
 *       This component will be placed in Dashboard page
 * @prop { name } [APOLLO] : Classroom name
 * @prop { thumbnail } [APOLLO] : Classroom thumbnail
 * @prop { classroomID } [APOLLO] : Classroom ID. Use this to generate a URL to the particular classroom
 * @prop { mutate } [APOLLO] : Apollo-client mutation controller function
 * @prop { showLoadingModal } [REDUX] : Display loading modal when performing GraphQL mutation(Login mutation)
 * @prop { hideLoadingModal } [REDUX] : Hide loeading modal after fisnished GraphQL mutation(login mutation)
 * @prop { showErrorAlert } [REDUX] : If there's any error occored, display it with its message
 */
class ClassroomInvitationItem extends React.Component {
  submitAnswer = async (classroomID, answer) => {
    try {
      const { mutate, showLoadingModal, hideLoadingModal, showErrorAlert } = this.props

      showLoadingModal()

      // Running mutation
      const result = await mutate({
        variables: {
          classroomID,
          answer
        }
      })

      const { success, err } = result.data.respondToClassroomInvitation

      if (success) {
        hideLoadingModal()

        if (answer === 'accept') {
          await Router.push(`${CLASSROOM_PAGE}?id=${classroomID}`)
        }
      } else {
        hideLoadingModal()
        showErrorAlert(err.message)
      }
    } catch (err) {
      hideLoadingModal()
      showErrorAlert('ไม่สามารถดำเนินการได้ในขณะนี้')
    }
  }

  render() {
    const { classroomID, name, thumbnail } = this.props
    return (
      <ClassroomInvitationItemWrapper>
        <ClassroomInvitationItemCard>
          <ClassroomInvitationItemLabel>
            <Link href={{ pathname: CLASSROOM_PAGE, query: { id: classroomID } }} prefetch>
              <h3>{name}</h3>
            </Link>
            <Button primary onClick={() => this.submitAnswer(classroomID, 'accept')}>
              ยอมรับ
            </Button>
            <Button light marginLeft="1em" onClick={() => this.submitAnswer(classroomID, 'refuse')}>
              ปฏิเศษ
            </Button>
          </ClassroomInvitationItemLabel>
          <Link href={{ pathname: CLASSROOM_PAGE, query: { id: classroomID } }} prefetch>
            <ClassroomInvitationProfilePicture src={thumbnail} />
          </Link>
        </ClassroomInvitationItemCard>
      </ClassroomInvitationItemWrapper>
    )
  }
}

ClassroomInvitationItem.propTypes = {
  showLoadingModal: PropTypes.func.isRequired,
  hideLoadingModal: PropTypes.func.isRequired,
  showErrorAlert: PropTypes.func.isRequired,
  classroomID: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  mutate: PropTypes.func.isRequired
}

const RESPONSE_TO_CLASSROOM_INVITATION_MUTATION = gql`
  mutation respondToClassroomInvitation($classroomID: String!, $answer: String!) {
    respondToClassroomInvitation(classroomID: $classroomID, answer: $answer) {
      success
      err {
        message
      }
    }
  }
`

export default graphql(RESPONSE_TO_CLASSROOM_INVITATION_MUTATION)(ClassroomInvitationItem)
