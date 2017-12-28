import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { reduxForm, Field } from "redux-form";

import { LightButton, SuccessButton, DangerButton } from "../../../Button";
import Card, { Header, Body, Footer } from "../../../Card";
import { Form, InputField } from "../../../Form";

const ImageUpLoadWrapper = styled.div`
  height: 250px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #ddd;
`;

/**
 * @name Image
 * @desc Display a normal image
 * @desc Display a image, used to present a visual communication about a certain topic or used to catch reader's attention
 * @prop [REDUX-FORM] handleSubmit : Redux-Form's default form handle function
 * @prop hideAddPostComponentModal : A trigger to close the AddPostComponentModal(close the modal intentionally)
 * @prop submitHandlerFunc : Custom submition handler function
 * @prop headerText : Text displaying at <Header /> of this modal, which determinig what component is about to be added
 */
const Image = ({
  hideAddPostComponentModal,
  submitHandlerFunc,
  handleSubmit,
  headerText
}) => (
  <div>
    <Header>{headerText}</Header>
    <Form onSubmit={handleSubmit(submitHandlerFunc)}>
      <Body>
        <ImageUpLoadWrapper>
          <LightButton>เลือกรูปภาพ</LightButton>
        </ImageUpLoadWrapper>
        <Field name="image_url" component={InputField} type="text" />
        <Field name="image_alt" component={InputField} type="text" />
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

Image.propTypes = {
  hideAddPostComponentModal: PropTypes.func.isRequired,
  submitHandlerFunc: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  headerText: PropTypes.string.isRequired
};

export default reduxForm({ form: "image_component_data" })(Image);
