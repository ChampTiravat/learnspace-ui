import React from "react";
import styled from "styled-components";

import {
  PrimaryButton,
  DangerButton,
  SuccessButton,
  WarningButton
} from "../../Button";

const TestComponentWrapper = styled.div`
  &:hover {
    background-color: #f5f5f5;
  }
`;

const BasedComponent = ({
  i,
  type,
  text,
  editFunc,
  removeFunc,
  SuccesFunc,
  isEditing
}) => (
  <TestComponentWrapper key={i}>
    <h2>{type}</h2>
    {isEditing ? (
      <div>
        <form>
          <input type="text" />
        </form>
        <div>
          <SuccessButton onClick={SuccesFunc}>เสร็จสิ้น</SuccessButton>
          <WarningButton onClick={editFunc}>แก้ไข</WarningButton>
          <DangerButton onClick={removeFunc}>ยกเลิก</DangerButton>
        </div>
      </div>
    ) : (
      <h1>{text}</h1>
    )}
    <br />
  </TestComponentWrapper>
);

export default BasedComponent;
