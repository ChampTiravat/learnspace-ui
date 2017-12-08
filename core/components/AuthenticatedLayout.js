import styled, { ThemeProvider } from "styled-components";

import defaultTheme from "../themes/default";
import NavigationBar from "./NavigationBar";
import Container from "./Container";

/**
 * @desc Use this Layout when user is authorized
 */
const AuthenticatedLayout = ({ children }) => (
  <ThemeProvider theme={defaultTheme}>
    <Container>{children}</Container>
  </ThemeProvider>
);

export default AuthenticatedLayout;
