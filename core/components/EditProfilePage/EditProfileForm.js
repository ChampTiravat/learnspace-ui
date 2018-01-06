import React from "react";
import PropTypes from "prop-types";
import { Field, reduxForm } from "redux-form";

import { InputField } from "../Form";
import { Button } from "../Button";

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
    <Button primary fluidWidth textCenter>
      เรียบร้อย
    </Button>
  </form>
);

EditProfileForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired
};

export default reduxForm({
  form: "edit_profile"
})(EditProfileForm);
