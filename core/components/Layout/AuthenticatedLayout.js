import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import styled, { ThemeProvider } from 'styled-components'

import { showNotificationModal } from '../../actions/notification-modal-actions'
import { showChatroomModal } from '../../actions/chatroom-modal-actions'
import UnAuthenticatedNav from '../NavigationBar/UnAuthenticatedNav'
import AuthenticatedNav from '../NavigationBar/AuthenticatedNav'
import ChatroomModal from '../ChatroomModal/ChatroomModal'
import { validateToken } from '../../helpers/security'
import NotificationModal from '../NotificationModal'
import defaultTheme from '../../themes/default'
import Container from '../Container'
import Card from '../Card'

/**
 * @name AuthenticatedLayout
 * @desc Use this Layout when user is authorized
 * @prop { activeUser } [REDUX] : Currently logged-in user
 * @prop { showChatroomModal } [REDUX] : Display a ChatroomModal
 * @prop { showNotificationModal } [REDUX] : Display a NotificationModal
 */
const AuthenticatedLayout = ({
  children,
  activeUser,
  showChatroomModal,
  showNotificationModal
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
          <h2>Please login first</h2>
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
        <ChatroomModal />
        {children}
      </Container>
    )}
  </ThemeProvider>
)

AuthenticatedLayout.propTypes = {
  showNotificationModal: PropTypes.func.isRequired,
  showChatroomModal: PropTypes.func.isRequired,
  activeUser: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  activeUser: state.user
})

const mapDispatchToProps = dispatch => ({
  showNotificationModal: () => dispatch(showNotificationModal()),
  showChatroomModal: () => dispatch(showChatroomModal())
})

export default connect(mapStateToProps, mapDispatchToProps)(AuthenticatedLayout)
