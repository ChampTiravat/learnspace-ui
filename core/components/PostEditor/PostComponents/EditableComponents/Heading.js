import React from "react";
import PropTypes from "prop-types";
import { reduxForm, Field } from "redux-form";

import { HEADING } from "../../../../constants/post-content/components";
import { SuccessButton, DangerButton } from "../../../Button";
import { Header, Body, Footer } from "../../../Card";
import { Form, InputField } from "../../../Form";

/**
 * @name Heading
 * @desc Display a heading text, used to remind readers the topic which thay are currently reading
 * @prop [REDUX-FORM] handleSubmit : Redux-Form's default form handle function
 * @prop hideAddPostComponentModal : f() to close the AddPostComponentModal(close the modal intentionally)
 * @prop addNewPostComponent : f() to append a new post component to receipe
 * @prop order : The component's current order in receipe
 * @prop type : Type of the component to be inserted
 */
class Heading extends React.Component {
  /**
   * @name submitHandler
   * @desc Append the <Heading /> component to the 'receipe'
   * @param { heading_text } : text to display inside the heading component
   */
  submitHandler = ({ heading_text }) => {
    const {
      hideAddPostComponentModal,
      addNewPostComponent,
      order
    } = this.props;

    if (!heading_text && heading_text !== "") return;

    addNewPostComponent({
      data: heading_text,
      type: HEADING,
      order
    });

    hideAddPostComponentModal();
  };

  render() {
    const { hideAddPostComponentModal, handleSubmit } = this.props;
    return [
      <Header>หัวข้อเรื่อง</Header>,
      <Form onSubmit={handleSubmit(this.submitHandler)}>
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
    ];
  }
}

Heading.propTypes = {
  hideAddPostComponentModal: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  addNewPostComponent: PropTypes.func.isRequired,
  order: PropTypes.number.isRequired
};

export default reduxForm({ form: "heading_component_data" })(Heading);
