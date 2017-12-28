import React from "react";
import PropTypes from "prop-types";
import { reduxForm, Field } from "redux-form";

import { SuccessButton, DangerButton } from "../../../Button";
import { Header, Body, Footer } from "../../../Card";
import { Form, InputField } from "../../../Form";

/**
 * @name Heading
 * @desc Display a heading text, used to remind readers the topic which thay are currently reading
 * @prop [REDUX-FORM] handleSubmit : Redux-Form's default form handle function
 * @prop hideAddPostComponentModal : A trigger to close the AddPostComponentModal(close the modal intentionally)
 * @prop submitHandlerFunc : Custom submition handler function
 * @prop headerText : Text displaying at <Header /> of this modal, which determinig what component is about to be added
 */
const Heading = ({
  hideAddPostComponentModal,
  submitHandlerFunc,
  handleSubmit,
  headerText
}) => (
  <div>
    <Header>{headerText}</Header>
    <Form onSubmit={handleSubmit(submitHandlerFunc)}>
      <Body>
        <Field name="heading_text" component={InputField} type="text" />
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

Heading.propTypes = {
  hideAddPostComponentModal: PropTypes.func.isRequired,
  submitHandlerFunc: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  headerText: PropTypes.string.isRequired
};

export default reduxForm({ form: "heading_component_data" })(Heading);
