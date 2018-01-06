import React from "react";
import PropTypes from "prop-types";
import { reduxForm, Field } from "redux-form";

import { VIDEO } from "../../../../constants/post-content/components";
import { Header, Body, Footer } from "../../../Card";
import { Form, InputField } from "../../../Form";
import { Button } from "../../../Button";

/**
 * @name Video
 * @desc Display a YouTube Video, used to provide additional/details from external resource
 * @prop [REDUX-FORM] handleSubmit : Redux-Form's default form handle function
 * @prop hideAddPostComponentModal : f() to close the AddPostComponentModal(close the modal intentionally)
 * @prop useToAddComponent : Specify wether to use this modal to add new component or edit the one existed
 * @prop addNewPostComponent : f() to append a new post component to receipe
 * @prop editPostComponent : f() to edit an existing post component in the receipe
 * @prop order : The component's current order in receipe
 * @prop type : Type of the component to be inserted
 */
class Video extends React.Component {
  /**
   * @name addComponentHandler()
   * @desc Append the <Video /> component to the 'receipe'
   * @param { video_url } : A URL of the YouTube video(must be a URL from https://youtube.com)
   */
  addComponentHandler = ({ video_url }) => {
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

  /**
   * @name editComponentHandler()
   * @desc Edit the specific <Video /> component in the 'receipe'
   * @param { video_url } : text to display inside the heading component
   */
  editComponentHandler = ({ video_url }) => {
    const { hideEditPostComponentModal, editPostComponent, order } = this.props;

    if (!video_url && video_url !== "") return;

    editPostComponent({
      newData: { url: video_url },
      type: VIDEO,
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
      <Header>วิดีโอ</Header>,
      <Form onSubmit={handleSubmit(submitHandler)}>
        <Body>
          <Field name="video_url" component={InputField} type="text" />
        </Body>
        <Footer>
          <Button success marginRight="0.5em">
            เสร็จสิ้น
          </Button>
          <Button danger type="button" onClick={hideThisModal}>
            ยกเลิก
          </Button>
        </Footer>
      </Form>
    ];
  }
}

Video.propTypes = {
  useToAddComponent: PropTypes.bool.isRequired,
  hideAddPostComponentModal: PropTypes.func,
  handleSubmit: PropTypes.func.isRequired,
  addNewPostComponent: PropTypes.func,
  editPostComponent: PropTypes.func,
  order: PropTypes.number.isRequired
};

export default reduxForm({ form: "video_component_data" })(Video);
