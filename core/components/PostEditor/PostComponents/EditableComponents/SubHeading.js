import React from "react";
import PropTypes from "prop-types";
import { reduxForm, Field } from "redux-form";

import { SuccessButton, DangerButton } from "../../../Button";
import { Header, Body, Footer } from "../../../Card";
import { Form, InputField } from "../../../Form";

/**
 * @name SubHeading
 * @desc Display a sub heading text, used to seperate one big topic into a smaller one
 * @prop [REDUX-FORM] handleSubmit : Redux-Form's default form handle function
 * @prop hideAddPostComponentModal : A trigger to close the AddPostComponentModal(close the modal intentionally)
 * @prop submitHandlerFunc : Custom submition handler function
 * @prop headerText : Text displaying at <Header /> of this modal, which determinig what component is about to be added
 */
const SubHeading = ({
  hideAddPostComponentModal,
  submitHandlerFunc,
  handleSubmit,
  headerText
}) => (
  <div>
    <Header>{headerText}</Header>
    <Form onSubmit={handleSubmit(submitHandlerFunc)}>
      <Body>
        <Field name="sub_heading_text" component={InputField} type="text" />
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

SubHeading.propTypes = {
  hideAddPostComponentModal: PropTypes.func.isRequired,
  submitHandlerFunc: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  headerText: PropTypes.string.isRequired
};

export default reduxForm({ form: "sub_heading_component_data" })(SubHeading);
