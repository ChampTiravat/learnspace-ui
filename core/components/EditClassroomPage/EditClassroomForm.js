import React from "react";
import PropTypes from "prop-types";
import { Field, reduxForm } from "redux-form";

import { InputField, TextAreaField } from "../Form";
import { PrimaryButton } from "../Button";

const submitHandler = value => {
  console.table(value);
};

const EditClassroomForm = ({ handleSubmit }) => (
  <form onSubmit={handleSubmit(submitHandler)}>
    <Field
      name="email"
      label="ชื่อห้องเรียน"
      component={InputField}
      type="text"
    />
    <Field
      name="career"
      label="คำอธิบาย"
      component={TextAreaField}
      type="text"
    />
    <PrimaryButton fluidWidth textCenter>
      เรียบร้อย
    </PrimaryButton>
  </form>
);

EditClassroomForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired
};

export default reduxForm({
  form: "edit_classroom"
})(EditClassroomForm);
