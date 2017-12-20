import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { connect } from "react-redux";

import { showPostComponentsSelectorModal } from "../../../actions/post-editor-actions";

const EmptyFieldWrapper = styled.div`
  width: 100%;
  height: 200px;
  background-color: transparent;
  border: 2px dashed ${p => p.theme.primaryColor};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  h3 {
    color: ${p => p.theme.primaryColor};
    font-weight: 400;
    font-size: 1.5em;
  }
`;

/**
 * @name EmptyField
 * @desc Click this field to show a modal to select your post component(s)
 * @prop [REDUX] showThisPostComponentsSelectorModal : dispatch an action to show the post components selector modal
 */
const EmptyField = ({ showThisPostComponentsSelectorModal }) => (
  <EmptyFieldWrapper onClick={() => showThisPostComponentsSelectorModal()}>
    <h3>เพิ่มส่วนประกอบ</h3>
  </EmptyFieldWrapper>
);

EmptyField.propTypes = {
  showThisPostComponentsSelectorModal: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => ({
  showThisPostComponentsSelectorModal: () =>
    dispatch(showPostComponentsSelectorModal())
});

export default connect(null, mapDispatchToProps)(EmptyField);
