import React from "react";
import PropTypes from "prop-types";
import { reduxForm, Field } from "redux-form";

import { LightButton, SuccessButton, DangerButton } from "../../../Button";
import { Header, Body, Footer } from "../../../Card";
import { Form, InputField, TextAreaField } from "../../../Form";

/**
 * @name List
 * @desc Display a list with ordered items
 * @prop [REDUX-FORM] handleSubmit : Redux-Form's default form handle function
 * @prop hideAddPostComponentModal : A trigger to close the AddPostComponentModal(close the modal intentionally)
 * @prop submitHandlerFunc : Custom submition handler function
 * @prop headerText : Text displaying at <Header /> of this modal, which determinig what component is about to be added
 */
const List = ({
  hideAddPostComponentModal,
  submitHandlerFunc,
  handleSubmit,
  headerText
}) => (
  <div>
    <Header>{headerText}</Header>
    <Form onSubmit={handleSubmit(submitHandlerFunc)}>
      <Body>
        <Field
          name="description"
          component={InputField}
          placeholder="รายการนี้เกี่ยวข้องกับอะไร"
          type="text"
        />
        <ol>
          <li>
            <Field name="item" component={TextAreaField} type="text" />
          </li>
        </ol>
      </Body>
      <Footer>
        <SuccessButton marginRight="0.5em">เสร็จสิ้น</SuccessButton>
        <DangerButton type="button" onClick={hideAddPostComponentModal}>
          ยกเลิก
        </DangerButton>
      </Footer>
    </Form>
  </div>
);

List.propTypes = {
  hideAddPostComponentModal: PropTypes.func.isRequired,
  submitHandlerFunc: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  headerText: PropTypes.string.isRequired
};

export default reduxForm({ form: "list_component_data" })(List);
