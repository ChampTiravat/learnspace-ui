import styled, { ThemeProvider } from "styled-components";

import NotificationModal from "./NotificationModal";
import defaultTheme from "../themes/default";
import Container from "./Container";
import AuthenticatedNav from "./NavigationBar/AuthenticatedNav";

/**
 * @desc Use this Layout when user is authorized
 */
const AuthenticatedLayout = ({ children }) => (
  <ThemeProvider theme={defaultTheme}>
    <Container>
      <AuthenticatedNav />
      <NotificationModal />
      {children}
    </Container>
  </ThemeProvider>
);

export default AuthenticatedLayout;
