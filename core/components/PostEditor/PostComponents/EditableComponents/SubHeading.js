import React from "react";
import PropTypes from "prop-types";
import { reduxForm, Field } from "redux-form";

import { SUB_HEADING } from "../../../../constants/post-content/components";
import { Header, Body, Footer } from "../../../Card";
import { Form, InputField } from "../../../Form";
import { Button } from "../../../Button";

/**
 * @name SubHeading
 * @desc Display a sub heading text, used to seperate one big topic into a smaller one
 * @prop [REDUX-FORM] handleSubmit : Redux-Form's default form handle function
 * @prop hideAddPostComponentModal : f() to close the AddPostComponentModal(close the modal intentionally)
 * @prop useToAddComponent : Specify wether to use this modal to add new component or edit the one existed
 * @prop addNewPostComponent : f() to append a new post component to receipe
 * @prop editPostComponent : f() to edit an existing post component in the receipe
 * @prop order : The component's current order in receipe
 * @prop type : Type of the component to be inserted
 */
class SubHeading extends React.Component {
  /**
   * @name addComponentHandler()
   * @desc Append the <SubHeading /> component to the 'receipe'
   * @param { sub_heading_text } : text to display inside the sub-heading component
   */
  addComponentHandler = ({ sub_heading_text }) => {
    const {
      hideAddPostComponentModal,
      addNewPostComponent,
      order
    } = this.props;

    if (!sub_heading_text && sub_heading_text !== "") return;

    addNewPostComponent({
      data: sub_heading_text,
      type: SUB_HEADING,
      order
    });

    hideAddPostComponentModal();
  };

  /**
   * @name editComponentHandler()
   * @desc Edit the specific <SubHeading /> component in the 'receipe'
   * @param { sub_heading_text } : text to display inside the sub-heading component
   */
  editComponentHandler = ({ sub_heading_text }) => {
    const { hideEditPostComponentModal, editPostComponent, order } = this.props;

    if (!sub_heading_text && sub_heading_text !== "") return;

    editPostComponent({
      newData: sub_heading_text,
      type: SUB_HEADING,
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
      <Header>หัวข้อย่อย</Header>,
      <Form onSubmit={handleSubmit(submitHandler)}>
        <Body>
          <Field name="sub_heading_text" component={InputField} type="text" />
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

SubHeading.propTypes = {
  useToAddComponent: PropTypes.bool.isRequired,
  hideAddPostComponentModal: PropTypes.func,
  handleSubmit: PropTypes.func.isRequired,
  addNewPostComponent: PropTypes.func,
  editPostComponent: PropTypes.func,
  order: PropTypes.number.isRequired
};

export default reduxForm({ form: "sub_heading_component_data" })(SubHeading);
