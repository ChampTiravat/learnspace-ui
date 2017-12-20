import React from "react";
import PropTypes from "prop-types";
import { Field, reduxForm } from "redux-form";

import { PrimaryButton } from "../Button";
import { InputField } from "../Form";

const submitHandler = value => {
  console.table(value);
};

const EditProfileForm = ({ handleSubmit }) => (
  <form onSubmit={handleSubmit(submitHandler)}>
    <Field
      name="username"
      label="ชื่อผู้ใช้งาน"
      component={InputField}
      type="text"
    />
    <Field name="email" label="อีเมลล์" component={InputField} type="email" />
    <Field name="career" label="อาชีพ" component={InputField} type="text" />
    <Field name="location" label="ที่อยู่" component={InputField} type="text" />
    <PrimaryButton fluidWidth textCenter>
      เรียบร้อย
    </PrimaryButton>
  </form>
);

EditProfileForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired
};

export default reduxForm({
  form: "edit_profile"
})(EditProfileForm);
