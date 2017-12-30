import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { reduxForm, Field } from "redux-form";

import { SLIDE_SHOW } from "../../../../constants/post-content/components";
import { LightButton, SuccessButton, DangerButton } from "../../../Button";
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
 * @name Slideshow
 * @desc Display a slide of images, used to present a visual communication about a certain topic or used to catch reader's attention
 * @prop [REDUX-FORM] handleSubmit : Redux-Form's default form handle function
 * @prop hideAddPostComponentModal : f() to close the AddPostComponentModal(close the modal intentionally)
 * @prop addNewPostComponent : f() to append a new post component to receipe
 * @prop order : The component's current order in receipe
 * @prop type : Type of the component to be inserted
 */
class Slideshow extends React.Component {
  /**
   * @name submitHandler
   * @desc Append the <Slideshow /> component to the 'receipe'
   * @param { slide_image_url } : URL of the image(if the image is available online)
   * @param { slide_image_alt } : A breif information about the image
   */
  submitHandler = ({ slideshow_image_url, slideshow_image_alt }) => {
    const {
      hideAddPostComponentModal,
      addNewPostComponent,
      order
    } = this.props;

    if (!slideshow_image_url && slideshow_image_url !== "") return;

    addNewPostComponent({
      data: [{ url: slideshow_image_url, alt: slideshow_image_alt }],
      type: SLIDE_SHOW,
      order
    });

    hideAddPostComponentModal();
  };

  render() {
    const { hideAddPostComponentModal, handleSubmit } = this.props;

    return [
      <Header>สไลด์รูปภาพ</Header>,
      <Form onSubmit={handleSubmit(this.submitHandler)}>
        <Body>
          <div>
            <ImageUpLoadWrapper>
              <LightButton>เลือกรูปภาพ</LightButton>
            </ImageUpLoadWrapper>
            <Field
              name="slideshow_image_url"
              component={InputField}
              type="text"
            />
            <Field
              name="slideshow_image_alt"
              component={InputField}
              type="text"
            />
          </div>
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

Slideshow.propTypes = {
  hideAddPostComponentModal: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  addNewPostComponent: PropTypes.func.isRequired,
  order: PropTypes.number.isRequired
};

export default reduxForm({ form: "slideshow_component_data" })(Slideshow);
