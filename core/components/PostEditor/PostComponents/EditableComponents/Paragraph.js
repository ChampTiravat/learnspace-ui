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
 * @prop addNewPostComponent : f() to append a new post component to receipe
 * @prop order : The component's current order in receipe
 * @prop type : Type of the component to be inserted
 */
class Paragraph extends React.Component {
  /**
   * @name submitHandler
   * @desc Append the <Paragraph /> component to the 'receipe'
   * @param { paragraph_text } : text to display inside the sub-heading component
   */
  submitHandler = ({ paragraph_text }) => {
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

  render() {
    const { hideAddPostComponentModal, handleSubmit } = this.props;
    return [
      <Header>ย่อหน้า</Header>,
      <Form onSubmit={handleSubmit(this.submitHandler)}>
        <Body>
          <Field name="paragraph_text" component={TextAreaField} type="text" />
        </Body>
        <Footer>
          <Button success marginRight="0.5em">
            เสร็จสิ้น
          </Button>
          <Button danger type="button" onClick={hideAddPostComponentModal}>
            ยกเลิก
          </Button>
        </Footer>
      </Form>
    ];
  }
}

Paragraph.propTypes = {
  hideAddPostComponentModal: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  addNewPostComponent: PropTypes.func.isRequired,
  order: PropTypes.number.isRequired
};

export default reduxForm({ form: "paragraph_component_data" })(Paragraph);
