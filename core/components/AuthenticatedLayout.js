import styled, { ThemeProvider } from "styled-components";

import NotificationModal from "./NotificationModal";
import defaultTheme from "../themes/default";
import NavigationBar from "./NavigationBar";
import Container from "./Container";

/**
 * @desc Use this Layout when user is authorized
 */
const AuthenticatedLayout = ({ children }) => (
  <ThemeProvider theme={defaultTheme}>
    <Container>
      <NotificationModal />
      {children}
    </Container>
  </ThemeProvider>
);

export default AuthenticatedLayout;
