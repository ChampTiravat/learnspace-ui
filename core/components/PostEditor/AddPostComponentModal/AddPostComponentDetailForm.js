import React from "react";
import { Field, reduxForm } from "redux-form";

import { SuccessButton, DangerButton, LightButton } from "../../Button";
import SlideShow from "../PostComponents/EditableComponents/SlideShow";
// import Heading from "../PostComponents/EditableComponents/Heading";
import Image from "../PostComponents/EditableComponents/Image";
import Table from "../PostComponents/EditableComponents/Table";
import Map from "../PostComponents/EditableComponents/Map";
import Card, { Header, Body, Footer } from "../../Card";
import { Form, Input, InputLabel } from "../../Form";

const HeadingForm = reduxForm({ form: "heading_component_data" })(
  ({ submitHandlerFunc, handleSubmit }) => (
    <Form onSubmit={handleSubmit(submitHandlerFunc)}>
      <Field name="heading_text" component="input" type="text" />
    </Form>
  )
);

class addPostComponentDetailForm extends React.Component {
  HeadingDataHandler = val => {
    console.log(val);
  };

  render() {
    const {
      type,
      order,
      renderModalTitleDependsOnComponentType,
      addNewPostComponent,
      hideAddPostComponentModal
    } = this.props;

    return (
      <div>
        <Header>{renderModalTitleDependsOnComponentType(type)}</Header>
        <Body>
          <HeadingForm submitHandlerFunc={this.HeadingDataHandler} />
        </Body>
        <Footer>
          <SuccessButton
            marginRight="0.5em"
            onClick={() =>
              addNewPostComponent({
                order,
                type,
                data: "DEFAULT DATA"
              })
            }
          >
            เสร็จสิ้น
          </SuccessButton>
          <DangerButton onClick={hideAddPostComponentModal}>
            ยกเลิก
          </DangerButton>
        </Footer>
      </div>
    );
  }
}

export default addPostComponentDetailForm;
