import styled, { ThemeProvider } from "styled-components";

import defaultTheme from "../../themes/default";

/**
 * @desc Use this Layout when user is not authorized
 */
const UnAuthenticatedLayout = ({ children }) => (
  <ThemeProvider theme={defaultTheme}>{children}</ThemeProvider>
);

export default UnAuthenticatedLayout;
