import React from "react";
import styled, { ThemeProvider } from "styled-components";

import AuthenticatedNav from "../NavigationBar/AuthenticatedNav";
import ChatroomModal from "../ChatroomModal/ChatroomModal";
import NotificationModal from "../NotificationModal";
import defaultTheme from "../../themes/default";
import Container from "../Container";

/**
 * @desc Use this Layout when user is authorized
 */
const AuthenticatedLayout = ({ children }) => (
  <ThemeProvider theme={defaultTheme}>
    <Container>
      <AuthenticatedNav />
      <NotificationModal />
      <ChatroomModal />
      {children}
    </Container>
  </ThemeProvider>
);

export default AuthenticatedLayout;
