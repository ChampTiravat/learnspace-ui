import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { reduxForm, Field } from "redux-form";

import { IMAGE } from "../../../../constants/post-content/components";
import { Header, Body, Footer } from "../../../Card";
import { Form, InputField } from "../../../Form";
import { Button } from "../../../Button";

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
 * @prop useToAddComponent : Specify wether to use this modal to add new component or edit the one existed
 * @prop addNewPostComponent : f() to append a new post component to receipe
 * @prop editPostComponent : f() to edit an existing post component in the receipe
 * @prop order : The component's current order in receipe
 * @prop type : Type of the component to be inserted
 */
class Image extends React.Component {
  /**
   * @name addComponentHandler()
   * @desc Append the <Image /> component to the 'receipe'
   * @param { image_url } : URL of the image(if the image is available online)
   * @param { image_alt } : A breif information about the image
   */
  addComponentHandler = ({ image_url, image_alt }) => {
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

  /**
   * @name editComponentHandler()
   * @desc Edit the specific <Image /> component in the 'receipe'
   * @param { image_url } : URL of the image(if the image is available online)
   * @param { image_alt } : A breif information about the image
   */
  editComponentHandler = ({ image_url, image_alt }) => {
    const { hideEditPostComponentModal, editPostComponent, order } = this.props;

    if (!image_url && image_url !== "") return;

    editPostComponent({
      newData: { url: image_url, alt: image_alt || image_url },
      type: IMAGE,
      order
    });

    hideEditPostComponentModal();
  };

  render() {
    const {
      hideAddPostComponentModal,
      hideEditPostComponentModal,
      handleSubmit,
      useToAddComponent
    } = this.props;

    /*
      Specify the which f() will be used to hide this modal
      depending on wether this modal have been called as
      a modal to add new component or editing the new one
    */
    const hideThisModal = useToAddComponent
      ? hideAddPostComponentModal
      : hideEditPostComponentModal;

    /*
      Specify the which f() will be used to submit the form 
      depending on wether this modal have been called as
      a modal to add new component or editing the new one
    */
    const submitHandler = useToAddComponent
      ? this.addComponentHandler
      : this.editComponentHandler;

    return [
      <Header>รูปภาพ</Header>,
      <Form onSubmit={handleSubmit(submitHandler)}>
        <Body>
          <ImageUpLoadWrapper>
            <Button light>เลือกรูปภาพ</Button>
          </ImageUpLoadWrapper>
          <Field name="image_url" component={InputField} type="text" />
          <Field name="image_alt" component={InputField} type="text" />
        </Body>
        <Footer>
          <Button primary marginRight="0.5em">
            เสร็จสิ้น
          </Button>
          <Button light type="button" onClick={hideThisModal}>
            ยกเลิก
          </Button>
        </Footer>
      </Form>
    ];
  }
}

Image.propTypes = {
  useToAddComponent: PropTypes.bool.isRequired,
  hideAddPostComponentModal: PropTypes.func,
  handleSubmit: PropTypes.func.isRequired,
  addNewPostComponent: PropTypes.func,
  editPostComponent: PropTypes.func,
  order: PropTypes.number.isRequired
};

export default reduxForm({ form: "image_component_data" })(Image);
