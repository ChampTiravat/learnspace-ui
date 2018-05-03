import React from 'react'
import gql from 'graphql-tag'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { graphql, compose } from 'react-apollo'

import { showLoadingModal, hideLoadingModal } from '../../reducers/mutation-status'
import { showErrorAlert } from '../../reducers/error-alert'

import { Button } from '../Button'
import Card from '../Card'

const ClassroomPreviewWrapper = Card.extend`
  text-align: center;
  max-width: 800px;
  margin-top: 1.5em;
  margin-bottom: 3em;
  padding: 4em 3em;
`

const PrimaryInfoItem = styled.div`
  margin-bottom: 2em;
`

const Topic = styled.h2`
  font-weight: 400;
  color: ${p => p.theme.PRIMARY_COLOR};
  font-size: 1.6em;
`

const Info = styled.h1`
  color: #777;
  font-size: 1.8em;
  font-weight: 400;
`

const TextInfo = styled.p`
  color: #777;
  margin: 0;
  font-size: 1.1em;
`

const ClassroomInfoItem = ({ topic, info }) => (
  <PrimaryInfoItem>
    <Topic>{topic}</Topic>
    <Info>{info}</Info>
  </PrimaryInfoItem>
)

/**
 * @name ClassroomPreview
 * @desc Show a short information about a classroom if user is not a member of it, instead of showing the classroom timeline
 * @prop { classroomID } [APOLLO] : ID of the classroom. use this to determine which classroom to query from API
 * @prop { subject } [APOLLO] : Classroom's primary subject
 * @prop { instructor } [APOLLO] :  Classroom's instructor
 * @prop { description } [APOLLO] :  Classroom's description
 * @prop { showLoadingModal } [REDUX] : Display loading modal when performing GraphQL mutation(Send join-request mutation)
 * @prop { hideLoadingModal } [REDUX] : Hide loeading modal after fisnished GraphQL mutation(Send join-request mutation)
 * @prop { showErrorAlert } [REDUX] : If there's any error occored, display it with its message
 * @prop { mutate } [APOLLO] : Apollo-client mutation controller function
 */
class ClassroomPreview extends React.Component {
  state = {
    didSentJoinRequest: false
  }

  sendClassroomJoinRequest = async classroomID => {
    const { showLoadingModal, hideLoadingModal, showErrorAlert, mutate } = this.props

    showLoadingModal()

    try {
      // Running mutation
      const result = await mutate({
        variables: {
          classroomID
        }
      })

      const { success, err } = result.data.login

      if (success) {
        await hideLoadingModal()
        this.setState({ didSentJoinRequest: true })
        await alert('Done')
      } else {
        await hideLoadingModal()
        await showErrorAlert(err.message)
      }
    } catch (err) {
      hideLoadingModal()
      showErrorAlert('ไม่สามารถดำเนินการได้ในขณะนี้')
    }
  }

  render() {
    const { subject, instructor, description, classroomID } = this.props
    const { didSentJoinRequest } = this.state

    return (
      <ClassroomPreviewWrapper>
        <ClassroomInfoItem topic="วิชาที่สอน" info={subject} />
        <ClassroomInfoItem topic="ผู้สอน" info={instructor} />
        <ClassroomInfoItem topic="คำอธิบาย" info={description} />
        {!didSentJoinRequest ? (
          <Button primary onClick={() => this.sendClassroomJoinRequest(classroomID)}>
            ส่งคำขอเข้าห้องเรียนนี้
          </Button>
        ) : (
          <h4>ท่านได้ทำการส่งคำขอเข้าร่วมห้องเรียนแล้ว กรุณารอการตอบรับจากผู้ดูแลห้องเรียน</h4>
        )}
      </ClassroomPreviewWrapper>
    )
  }
}

ClassroomPreview.propTypes = {
  mutate: PropTypes.func.isRequired,
  subject: PropTypes.string.isRequired,
  classroomID: PropTypes.string.isRequired,
  instructor: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
}

const SEND_CLASSROOM_JOIN_REQUEST = gql`
  mutation sendClassroomJoinRequest($classroomID: String!) {
    sendClassroomJoinRequest(classroomID: $classroomID) {
      success
      err {
        message
      }
    }
  }
`

const mapDispatchToProps = dispatch => ({
  showErrorAlert: message => dispatch(showErrorAlert(message)),
  showLoadingModal: () => dispatch(showLoadingModal()),
  hideLoadingModal: () => dispatch(hideLoadingModal())
})

export default compose(connect(null, mapDispatchToProps), graphql(SEND_CLASSROOM_JOIN_REQUEST))(
  ClassroomPreview
)
