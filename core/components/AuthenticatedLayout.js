import styled, { ThemeProvider } from "styled-components";

import Container from "./Container";
import NavigationBar from "./NavigationBar";
import defaultTheme from "../themes/default";

/**
 * @desc Use this Layout when user is authorized
 */
const AuthenticatedLayout = ({ children }) => (
  <ThemeProvider theme={defaultTheme}>
    <Container>{children}</Container>
  </ThemeProvider>
);

export default AuthenticatedLayout;
