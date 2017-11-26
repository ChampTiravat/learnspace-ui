import React from "react";
import { Field, reduxForm } from "redux-form";
import PropTypes from "prop-types";

const submitHandler = value => {
  console.table(value);
};

const LoginForm = ({ handleSubmit }) => (
  <form onSubmit={handleSubmit(submitHandler)}>
    <div>
      <label>Email</label>
      <br />
      <Field name="email" component="input" type="text" />
    </div>
    <div>
      <label>Password</label>
      <br />
      <Field name="password" component="input" type="password" />
    </div>
    <br />
    <button>Login</button>
  </form>
);

LoginForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired
};

export default reduxForm({
  form: "login"
})(LoginForm);
