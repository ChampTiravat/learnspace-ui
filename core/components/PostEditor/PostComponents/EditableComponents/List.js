import React from "react";
import PropTypes from "prop-types";
import styled, { keyframes } from "styled-components";
import { reduxForm, Field } from "redux-form";

import { PrimaryButton, SuccessButton, DangerButton } from "../../../Button";
import { Form, InputField, TextAreaField } from "../../../Form";
import { Header, Body, Footer } from "../../../Card";

const ListItem = styled.li`
  animation: ${p => p.theme.SHOW_FROM_TOP} 400ms;
`;

/**
 * @name List
 * @desc Display a list with ordered items
 * @prop [REDUX-FORM] handleSubmit : Redux-Form's default form handle function
 * @prop hideAddPostComponentModal : A trigger to close the AddPostComponentModal(close the modal intentionally)
 * @prop submitHandlerFunc : Custom submition handler function
 * @prop headerText : Text displaying at <Header /> of this modal, which determinig what component is about to be added
 */
class List extends React.Component {
  state = {
    items: ["first"]
  };

  removeItem = itemToDelete =>
    this.setState(({ items }) => ({
      items: items.filter(item => item !== itemToDelete)
    }));

  addItem = () =>
    this.setState(({ items }) => ({
      items: items.concat(
        Math.ceil((Math.random() + (1 + Math.random())) * 100)
      )
    }));

  renderItemDependsOnTotalItemsNumber = () =>
    this.state.items.map((item, i) => (
      <ListItem>
        <Field
          key={item}
          name={`list-item-${item}`}
          component={TextAreaField}
        />
        {item !== "first" ? (
          <DangerButton type="button" onClick={() => this.removeItem(item)}>
            ลบรายการนี้ออก
          </DangerButton>
        ) : null}
      </ListItem>
    ));

  render() {
    const {
      hideAddPostComponentModal,
      submitHandlerFunc,
      handleSubmit,
      headerText
    } = this.props;
    return [
      <Header>{headerText}</Header>,
      <Form onSubmit={handleSubmit(submitHandlerFunc)}>
        <Body>
          <Field name="description" component={InputField} type="text" />
          <ol>
            {this.renderItemDependsOnTotalItemsNumber()}
            <PrimaryButton
              type="button"
              textCenter
              fluidWidth
              marginTop="1em"
              onClick={this.addItem}
            >
              เพิ่มรายการ
            </PrimaryButton>
          </ol>
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

List.propTypes = {
  hideAddPostComponentModal: PropTypes.func.isRequired,
  submitHandlerFunc: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  headerText: PropTypes.string.isRequired
};

export default reduxForm({ form: "list_component_data" })(List);
