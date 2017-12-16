import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Link from "next/link";

import UnAuthenticatedNav from "./UnAuthenticatedNav";
import AuthenticatedNav from "./AuthenticatedNav";

/**
 * @desc Navigation Bar component. it will render a different navigation bar
 *       Depends on wether user is already logged in or not
 */
const NavigationBar = ({ isLoggedIn }) =>
  isLoggedIn ? <AuthenticatedNav /> : <UnAuthenticatedNav />;

NavigationBar.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired
};

export default NavigationBar;
