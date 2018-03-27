import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import styled, { ThemeProvider } from 'styled-components'

import { showNotificationModal } from '../../actions/notification-modal-actions'
import { hideClassroomInvitationModal } from '../../actions/classroom-actions'
import { showChatroomModal } from '../../actions/chatroom-modal-actions'

import UnAuthenticatedNav from '../NavigationBar/UnAuthenticatedNav'
import ClassroomInvitationModal from '../ClassroomInvitationModal'
import AuthenticatedNav from '../NavigationBar/AuthenticatedNav'
import ChatroomModal from '../ChatroomModal/ChatroomModal'
import { validateToken } from '../../helpers/security'
import LoadingScreenModal from '../LoadingScreenModal'
import NotificationModal from '../NotificationModal'
import defaultTheme from '../../themes/default'
import { ErrorAlert } from '../Alert'
import Container from '../Container'
import Card from '../Card'

/**
 * @name AuthenticatedLayout
 * @desc Use this Layout when user is authorized
 * @prop { activeUser } [REDUX] : Currently logged-in user
 * @prop { isMutating } [REDUX] : Return TRUE or FALSE depending wether user is performing GraphQL Mutation or not
 * @prop { errorAlert } [REDUX] : Object containing error alert component data
 * @prop { showChatroomModal } [REDUX] : Display a ChatroomModal
 * @prop { showNotificationModal } [REDUX] : Display a NotificationModal
 * @prop { isClassroomInvitationModalShowing } [REDUX] : State of classroom Invitation modal
 * @prop { hideClassroomInvitationModal } [REDUX] : f() to hide Classroom Invitation modal
 */
const AuthenticatedLayout = ({
  children,
  isMutating,
  activeUser,
  errorAlert,
  showChatroomModal,
  showNotificationModal,
  hideClassroomInvitationModal,
  isClassroomInvitationModalShowing
}) => (
  <ThemeProvider theme={defaultTheme}>
    {!validateToken() ? (
      <Container>
        <UnAuthenticatedNav />
        <Card
          textCenter
          padding="2em"
          marginLeft="auto"
          marginRight="auto"
          marginTop="4em"
        >
          <h2>กรุณาเข้าล็อกอินเพื่อเข้าใช้งาน</h2>
        </Card>
      </Container>
    ) : (
      <Container>
        <AuthenticatedNav
          activeUser={activeUser}
          showChatroomModal={showChatroomModal}
          showNotificationModal={showNotificationModal}
        />
        <NotificationModal />
        <LoadingScreenModal isLoading={isMutating} />
        <ClassroomInvitationModal
          isShowing={isClassroomInvitationModalShowing}
          hideClassroomInvitationModal={hideClassroomInvitationModal}
        />
        <ChatroomModal />
        <ErrorAlert show={errorAlert.show}>{errorAlert.message}</ErrorAlert>
        {children}
      </Container>
    )}
  </ThemeProvider>
)

AuthenticatedLayout.propTypes = {
  isClassroomInvitationModalShowing: PropTypes.bool.isRequired,
  hideClassroomInvitationModal: PropTypes.func.isRequired,
  showNotificationModal: PropTypes.func.isRequired,
  showChatroomModal: PropTypes.func.isRequired,
  activeUser: PropTypes.object.isRequired,
  errorAlert: PropTypes.object.isRequired,
  isMutating: PropTypes.bool.isRequired
}

const mapStateToProps = state => ({
  isClassroomInvitationModalShowing: state.isClassroomInvitationModalShowing,
  isMutating: state.mutationStatus,
  errorAlert: state.errorAlert,
  activeUser: state.user
})

const mapDispatchToProps = dispatch => ({
  hideClassroomInvitationModal: () => dispatch(hideClassroomInvitationModal()),
  showNotificationModal: () => dispatch(showNotificationModal()),
  showChatroomModal: () => dispatch(showChatroomModal())
})

export default connect(mapStateToProps, mapDispatchToProps)(AuthenticatedLayout)
