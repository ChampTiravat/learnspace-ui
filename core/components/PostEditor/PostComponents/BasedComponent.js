import React from "react";
import styled from "styled-components";

import { PrimaryButton } from "../../Button";

const CirclePrimaryButton = PrimaryButton.extend`
  color: #fff;
  width: 3em;
  padding: 0.7em 0.5em;
  border-radius: 50%;
  text-align: center;
  font-size: 0.9em;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transition: 150ms ease-in;
  position: absolute;
  top: 0;
  right: 0;
  &:hover {
    background-color: #fff;
    color: ${p => p.theme.PRIMARY_COLOR};
  }
`;

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
    <CirclePrimaryButton onClick={() => null}>/</CirclePrimaryButton>
    {children}
  </TestComponentWrapper>
);

export default BasedComponent;
