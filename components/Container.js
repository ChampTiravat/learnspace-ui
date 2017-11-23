import styled, { injectGlobal } from "styled-components";

// Normalize the global style
injectGlobal`
    * {
        box-sizing: border-box;
    }

    html, body {
        padding: 0;
        margin: 0;
        width: 100%;
        height: 100%;
    }

    h1,h2,h3,h4,h5,h6 { margin: 0; }
`;

const Container = styled.div`
  padding-top: 0;
  padding-bottom: 2em;
  padding-left: 0;
  padding-right: 0;
  margin: 0 auto;
  max-width: 1200px;
  width: 100%;
  height: auto;
  background-color: #f5f5f5;
`;

export default Container;
