import React from "react";
import styled from "styled-components";

const EmptyFieldWrapper = styled.div`
  width: 100%;
  height: 200px;
  background-color: transparent;
  border: 2px dashed ${p => p.theme.primaryColor};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h3 {
    color: ${p => p.theme.primaryColor};
    font-weight: 400;
    font-size: 1.5em;
  }
`;

/**
 * @name EmptyField
 * @desc Click this field to show a modal to select your post component(s)
 */
const EmptyField = () => (
  <EmptyFieldWrapper>
    <h3>เพิ่มส่วนประกอบ</h3>
  </EmptyFieldWrapper>
);

export default EmptyField;
