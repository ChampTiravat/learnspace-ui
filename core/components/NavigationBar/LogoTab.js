import styled from "styled-components";

export default styled.div`
  display: inline-block;
  color: #fff;
  width: ${p => (p.authenticated ? "15%" : "50%")};
  a {
    background-color: #3a82ea;
    display: inline-block;
    padding: 0.5em 1em;
    text-decoration: none;
    color: inherit;
    h1 {
      font-weight: 400;
    }
  }
  h2 {
    display: inline-block;
    font-size: 1em;
    font-weight: 300;
    margin-left: 1em;
  }
`;
