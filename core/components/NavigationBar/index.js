import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import UnAuthenticatedNav from "./UnAuthenticatedNav";
import AuthenticatedNav from "./AuthenticatedNav";

/**
 * @desc Navigation Bar component. it will render a different navigation bar
 *       Depends on wether user is already logged in or not
 */
class NavigationBar extends React.Component {
  render() {
    return this.props.isLoggedIn ? (
      <AuthenticatedNav />
    ) : (
      <UnAuthenticatedNav />
    );
  }
}

NavigationBar.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired
};

export default NavigationBar;
