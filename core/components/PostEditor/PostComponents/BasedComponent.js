import React from "react";
import styled from "styled-components";

import { CircleButton } from "../../Button";

const TestComponentWrapper = styled.div`
  position: relative;
  margin-top: 2em;
  margin-bottom: 3em;
`;

const BasedComponent = ({ children, type }) => (
  <TestComponentWrapper>
    <CircleButton
      primary
      position="absolute"
      left="-5em"
      top="0em"
      onClick={() => null}
    >
      /
    </CircleButton>
    {children}
  </TestComponentWrapper>
);

export default BasedComponent;
