import React from "react";
import PropTypes from "prop-types";
import { Field, reduxForm } from "redux-form";

import { InputField } from "../Form";

const submitHandler = value => {
  console.table(value);
};

const LoginForm = ({ handleSubmit }) => (
  <form onSubmit={handleSubmit(submitHandler)}>
    <Field name="email" label="อีเมลล์" component={InputField} type="email" />
    <Field
      name="password"
      label="พาสเวิร์ด"
      component={InputField}
      type="password"
    />
    <button>Login</button>
  </form>
);

LoginForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired
};

export default reduxForm({
  form: "login"
})(LoginForm);
