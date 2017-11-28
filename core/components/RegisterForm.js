import React from "react";
import PropTypes from "prop-types";
import { Field, reduxForm } from "redux-form";

import { InputField, InputLabel, InputGroup } from "./Form";
import { PrimaryButton } from "./Button";

const submitHandler = value => {
  console.table(value);
};

const RegisterForm = ({ handleSubmit }) => (
  <form onSubmit={handleSubmit(submitHandler)}>
    <Field name="email" label="อีเมลล์" component={InputField} type="email" />
    <Field
      name="username"
      label="ชื่อผู้ใช้งาน"
      component={InputField}
      type="username"
    />
    <Field
      name="password"
      label="พาสเวิร์ด"
      component={InputField}
      type="password"
    />
    <Field
      name="password_confirmation"
      label="ยืนยันพาสเวิร์ดอีกครั้ง"
      component={InputField}
      type="password"
    />
    <InputGroup>
      <Field
        name="user_agreement"
        id="user_agreement"
        component="input"
        type="checkbox"
      />
      <InputLabel htmlFor="user_agreement">
        ข้าพเจ้ายอมรับเงื่อนไขในการใข้งาน
      </InputLabel>
    </InputGroup>
    <PrimaryButton fluidWidth textCenter>
      ยืนยัน
    </PrimaryButton>
  </form>
);

RegisterForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired
};

export default reduxForm({
  form: "register"
})(RegisterForm);
