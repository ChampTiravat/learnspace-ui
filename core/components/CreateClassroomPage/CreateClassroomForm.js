import React from "react";
import PropTypes from "prop-types";
import { Field, reduxForm } from "redux-form";

import { InputField } from "../Form";
import { Button } from "../Button";

const submitHandler = value => {
  console.table(value);
};

const CreateClassroomForm = ({ handleSubmit }) => (
  <form onSubmit={handleSubmit(submitHandler)}>
    <Field name="" label="ชื่อห้องเรียน" component={InputField} type="text" />
    <Field name="" label="รายละเอียด" component={InputField} type="text" />
    <Button primary fluidWidth textCenter>
      สร้างห้องเรียน
    </Button>
  </form>
);

CreateClassroomForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired
};

export default reduxForm({
  form: "create_classroom"
})(CreateClassroomForm);
