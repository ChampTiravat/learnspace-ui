import styled from "styled-components";

import Container from "./Container";
import NavigationBar from "../components/NavigationBar";

/**
 * @desc Use this Layout when user is not authorized
 */
export const UnAuthenticatedLayout = ({ children }) => (
  <Container>
    <NavigationBar>Navbar</NavigationBar>
    {children}
  </Container>
);

/**
 * @desc Use this Layout when user is authorized
 */
export const AuthenticatedLayout = () => (
  <Container>
    <NavigationBar>Navbar</NavigationBar>
  </Container>
);
