import React from "react";
import PropTypes from "prop-types";
import { reduxForm, Field } from "redux-form";

import { PARAGRAPH } from "../../../../constants/post-content/components";
import { Header, Body, Footer } from "../../../Card";
import { Form, TextAreaField } from "../../../Form";
import { Button } from "../../../Button";

/**
 * @name Paragraph
 * @desc Display a paragraph text, used to present a content of the topic in details
 * @prop [REDUX-FORM] handleSubmit : Redux-Form's default form handle function
 * @prop hideAddPostComponentModal : f() to close the AddPostComponentModal(close the modal intentionally)
 * @prop useToAddComponent : Specify wether to use this modal to add new component or edit the one existed
 * @prop addNewPostComponent : f() to append a new post component to receipe
 * @prop editPostComponent : f() to edit an existing post component in the receipe
 * @prop order : The component's current order in receipe
 * @prop type : Type of the component to be inserted
 */
class Paragraph extends React.Component {
  /**
   * @name addComponentHandler()
   * @desc Append the <Paragraph /> component to the 'receipe'
   * @param { paragraph_text } : text to display inside the sub-heading component
   */
  addComponentHandler = ({ paragraph_text }) => {
    const {
      hideAddPostComponentModal,
      addNewPostComponent,
      order
    } = this.props;

    if (!paragraph_text && paragraph_text !== "") return;

    addNewPostComponent({
      data: paragraph_text,
      type: PARAGRAPH,
      order
    });

    hideAddPostComponentModal();
  };
  /**
   * @name editComponentHandler()
   * @desc Edit the specific <Paragraph /> component in the 'receipe'
   * @param { paragraph_text } : text to display inside the sub-heading component
   */
  editComponentHandler = ({ paragraph_text }) => {
    const { hideEditPostComponentModal, editPostComponent, order } = this.props;

    if (!paragraph_text && paragraph_text !== "") return;

    editPostComponent({
      newData: paragraph_text,
      type: PARAGRAPH,
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
      <Header>ย่อหน้า</Header>,
      <Form onSubmit={handleSubmit(submitHandler)}>
        <Body>
          <Field name="paragraph_text" component={TextAreaField} type="text" />
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

Paragraph.propTypes = {
  useToAddComponent: PropTypes.bool.isRequired,
  hideAddPostComponentModal: PropTypes.func,
  handleSubmit: PropTypes.func.isRequired,
  addNewPostComponent: PropTypes.func,
  editPostComponent: PropTypes.func,
  order: PropTypes.number.isRequired
};

export default reduxForm({ form: "paragraph_component_data" })(Paragraph);
