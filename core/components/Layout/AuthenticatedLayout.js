import React from 'react'
import styled, { ThemeProvider } from 'styled-components'

import UnAuthenticatedNav from '../NavigationBar/UnAuthenticatedNav'
import AuthenticatedNav from '../NavigationBar/AuthenticatedNav'
import ChatroomModal from '../ChatroomModal/ChatroomModal'
import { validateToken } from '../../helpers/security'
import NotificationModal from '../NotificationModal'
import defaultTheme from '../../themes/default'
import Container from '../Container'
import Card from '../Card'

/**
 * @desc Use this Layout when user is authorized
 */
const AuthenticatedLayout = ({ children }) => (
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
        <AuthenticatedNav />
        <NotificationModal />
        <ChatroomModal />
        {children}
      </Container>
    )}
  </ThemeProvider>
)

export default AuthenticatedLayout
