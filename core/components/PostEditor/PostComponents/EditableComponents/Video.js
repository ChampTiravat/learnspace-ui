import React from "react";
import PropTypes from "prop-types";
import { reduxForm, Field } from "redux-form";

import { VIDEO } from "../../../../constants/post-content/components";
import { SuccessButton, DangerButton } from "../../../Button";
import { Header, Body, Footer } from "../../../Card";
import { Form, InputField } from "../../../Form";

/**
 * @name Video
 * @desc Display a YouTube Video, used to provide additional/details from external resource
 * @prop [REDUX-FORM] handleSubmit : Redux-Form's default form handle function
 * @prop hideAddPostComponentModal : f() to close the AddPostComponentModal(close the modal intentionally)
 * @prop addNewPostComponent : f() to append a new post component to receipe
 * @prop order : The component's current order in receipe
 * @prop type : Type of the component to be inserted
 */
class Video extends React.Component {
  /**
   * @name submitHandler
   * @desc Append the <Video /> component to the 'receipe'
   * @param { video_url } : A URL of the YouTube video(must be a URL from https://youtube.com)
   */
  submitHandler = ({ video_url }) => {
    const {
      hideAddPostComponentModal,
      addNewPostComponent,
      order
    } = this.props;

    if (!video_url && video_url !== "") return;

    addNewPostComponent({
      data: { url: video_url },
      type: VIDEO,
      order
    });

    hideAddPostComponentModal();
  };

  render() {
    const { hideAddPostComponentModal, handleSubmit } = this.props;
    return [
      <Header>วิดีโอ</Header>,
      <Form onSubmit={handleSubmit(this.submitHandler)}>
        <Body>
          <Field name="video_url" component={InputField} type="text" />
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

Video.propTypes = {
  hideAddPostComponentModal: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  addNewPostComponent: PropTypes.func.isRequired,
  order: PropTypes.number.isRequired
};

export default reduxForm({ form: "video_component_data" })(Video);
