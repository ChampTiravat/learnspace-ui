import React from "react";
import styled from "styled-components";

const EmptyFieldWrapper = styled.div`
  width: 100%;
  height: 200px;
  background-color: transparent;
  border: 2px dashed ${p => p.theme.PRIMARY_COLOR};
  border-radius: 7px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: 200ms ease-in;
  &:hover {
    border: 2px solid ${p => p.theme.PRIMARY_COLOR};
  }
  h3 {
    color: ${p => p.theme.PRIMARY_COLOR};
    font-weight: 400;
    font-size: 1.5em;
  }
`;

/**
 * @name EmptyField
 * @desc Click this field to show a modal to select your post component(s)
 * @prop [REDUX] showThisPostComponentsSelectorModal : dispatch an action to show the post components selector modal
 */
const EmptyField = props => (
  <EmptyFieldWrapper {...props}>
    <h3>เพิ่มส่วนประกอบ</h3>
  </EmptyFieldWrapper>
);

export default EmptyField;
