import React from "react";
import styled, { ThemeProvider } from "styled-components";

import UnAuthenticatedNav from "../NavigationBar/UnAuthenticatedNav";
import defaultTheme from "../../themes/default";

/**
 * @desc Use this Layout when user is not authorized
 */
const UnAuthenticatedLayout = ({ children }) => (
  <ThemeProvider theme={defaultTheme}>
    <div>
      <UnAuthenticatedNav />
      {children}
    </div>
  </ThemeProvider>
);

export default UnAuthenticatedLayout;
