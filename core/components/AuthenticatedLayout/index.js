import styled, { ThemeProvider } from "styled-components";

import Container from "../Container";
import NavigationBar from "../components/NavigationBar";
import defaultTheme from "../themes/default";

/**
 * @desc Use this Layout when user is authorized
 */
const AuthenticatedLayout = () => (
  <Container>
    <NavigationBar>Navbar</NavigationBar>
  </Container>
);

export default AuthenticatedLayout;
