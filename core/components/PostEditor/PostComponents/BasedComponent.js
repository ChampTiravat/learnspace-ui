import React from "react";
import styled from "styled-components";

import { CircleButton } from "../../Button";

const TestComponentWrapper = styled.div`
  position: relative;
  margin-top: 2em;
  margin-bottom: 3em;
  &:hover {
    background-color: #f5f5f5;
  }
`;

const BasedComponent = ({ children, type }) => (
  <TestComponentWrapper>
    <CircleButton primary onClick={() => null}>
      /
    </CircleButton>
    {children}
  </TestComponentWrapper>
);

export default BasedComponent;
