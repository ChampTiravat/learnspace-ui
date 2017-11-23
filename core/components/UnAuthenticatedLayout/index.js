import styled, { ThemeProvider } from "styled-components";

import Container from "../Container";
import NavigationBar from "../NavigationBar";
import defaultTheme from "../../themes/default";

/**
 * @desc Use this Layout when user is not authorized
 */
const UnAuthenticatedLayout = ({ children }) => (
  <ThemeProvider theme={defaultTheme}>
    <Container>
      <NavigationBar>Navbar</NavigationBar>
      {children}
    </Container>
  </ThemeProvider>
);

export default UnAuthenticatedLayout;
