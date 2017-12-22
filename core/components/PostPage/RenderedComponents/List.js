import React from "react";
import styled from "styled-components";

const ListWrapper = styled.div`
  margin: 1em auto;
  h1 {
    color: ${p => p.theme.PRIMARY_COLOR};
    font-size: 1.3em;
    font-weight: 400;
    display: block;
    text-align: left;
    margin-top: 1em;
  }
  ol {
    li {
      font-family: "Calibri";
      font-size: 1em;
      color: #777;
    }
  }
`;
const List = ({ children, description }) => (
  <ListWrapper>
    <h1>{description}</h1>
    <ol>{children}</ol>
  </ListWrapper>
);

export default List;
