import styled, { ThemeProvider } from "styled-components";

import Container from "./Container";
import NavigationBar from "../components/NavigationBar";
import defaultTheme from "../themes/default";

/**
 * @desc Use this Layout when user is not authorized
 */
export const UnAuthenticatedLayout = ({ children }) => (
  <ThemeProvider theme={defaultTheme}>
    <Container>
      <NavigationBar>Navbar</NavigationBar>
      {children}
    </Container>
  </ThemeProvider>
);

/**
 * @desc Use this Layout when user is authorized
 */
export const AuthenticatedLayout = () => (
  <Container>
    <NavigationBar>Navbar</NavigationBar>
  </Container>
);
