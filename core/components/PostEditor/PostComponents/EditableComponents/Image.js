import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { reduxForm, Field } from "redux-form";

import { LightButton, SuccessButton, DangerButton } from "../../../Button";
import { IMAGE } from "../../../../constants/post-content/components";
import { Header, Body, Footer } from "../../../Card";
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
 * @desc Display a image, used to present a visual communication about a certain topic or used to catch reader's attention
 * @prop [REDUX-FORM] handleSubmit : Redux-Form's default form handle function
 * @prop hideAddPostComponentModal : f() to close the AddPostComponentModal(close the modal intentionally)
 * @prop addNewPostComponent : f() to append a new post component to receipe
 * @prop order : The component's current order in receipe
 * @prop type : Type of the component to be inserted
 */
class Image extends React.Component {
  /**
   * @name imageComponentDataHandler
   * @desc Append the <Paragraph /> component to the 'receipe'
   * @param { image_url } : URL of the image(if the image is available online)
   * @param { image_alt } : A breif information about the image
   */
  imageComponentDataHandler = ({ image_url, image_alt }) => {
    const {
      hideAddPostComponentModal,
      addNewPostComponent,
      order
    } = this.props;

    if (!image_url && image_url !== "") return;

    addNewPostComponent({
      data: { url: image_url, alt: image_alt || image_url },
      type: IMAGE,
      order
    });

    hideAddPostComponentModal();
  };

  render() {
    const { hideAddPostComponentModal, handleSubmit } = this.props;
    return [
      <Header>รูปภาพ</Header>,
      <Form onSubmit={handleSubmit(this.submitHandler)}>
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
    ];
  }
}

Image.propTypes = {
  hideAddPostComponentModal: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  addNewPostComponent: PropTypes.func.isRequired,
  order: PropTypes.number.isRequired
};

export default reduxForm({ form: "image_component_data" })(Image);
