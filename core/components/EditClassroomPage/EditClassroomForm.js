import React from 'react'
import PropTypes from 'prop-types'
import { Field, reduxForm } from 'redux-form'

import { InputField, TextAreaField } from '../Form'
import Card, { Header, Body } from '../Card'
import { Button } from '../Button'

const submitHandler = value => {
  console.table(value)
}

const EditClassroomForm = ({ handleSubmit }) => (
  <Card small marginTop="5em">
    <Header>แก้ไขข้อมูลห้องเรียน</Header>
    <Body>
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
        <Button primary fluidWidth textCenter>
          เรียบร้อย
        </Button>
      </form>
    </Body>
  </Card>
)

EditClassroomForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired
}

export default reduxForm({
  form: 'edit_classroom'
})(EditClassroomForm)
