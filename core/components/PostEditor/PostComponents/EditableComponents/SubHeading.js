import React from "react";
import PropTypes from "prop-types";
import { reduxForm, Field } from "redux-form";

import { SuccessButton, DangerButton } from "../../../Button";
import { Header, Body, Footer } from "../../../Card";
import { Form, InputField } from "../../../Form";

/**
 * @name SubHeading
 * @desc Display a sub heading text, used to seperate one big topic into a smaller one
 * @prop [REDUX-FORM] handleSubmit : Redux-Form's default form handle function
 * @prop hideAddPostComponentModal : A trigger to close the AddPostComponentModal(close the modal intentionally)
 * @prop submitHandlerFunc : Custom submition handler function
 * @prop headerText : Text displaying at <Header /> of this modal, which determinig what component is about to be added
 * @prop order : The component's current order in receipe
 * @prop type : Type of the component to be inserted
 */
class SubHeading extends React.Component {
  /**
   * @name subHeadingComponentDataHandler
   * @desc Append the <SubHeading /> component to the 'receipe'
   * @param { sub_heading_text } : text to display inside the sub-heading component
   */
  submitHandler = ({ sub_heading_text }) => {
    const {
      hideAddPostComponentModal,
      addNewPostComponent,
      order,
      type
    } = this.props;

    if (!sub_heading_text && sub_heading_text !== "") return;

    addNewPostComponent({
      data: sub_heading_text,
      order,
      type
    });

    hideAddPostComponentModal();
  };

  render() {
    const { hideAddPostComponentModal, handleSubmit, headerText } = this.props;
    return (
      <div>
        <Header>{headerText}</Header>
        <Form onSubmit={handleSubmit(this.submitHandler)}>
          <Body>
            <Field name="sub_heading_text" component={InputField} type="text" />
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
  }
}

SubHeading.propTypes = {
  hideAddPostComponentModal: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  headerText: PropTypes.string.isRequired,
  addNewPostComponent: PropTypes.func.isRequired,
  order: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired
};

export default reduxForm({ form: "sub_heading_component_data" })(SubHeading);
