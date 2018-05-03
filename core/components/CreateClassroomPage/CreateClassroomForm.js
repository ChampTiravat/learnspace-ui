import React from 'react'
import gql from 'graphql-tag'
import Router from 'next/router'
import PropTypes from 'prop-types'
import { Field, reduxForm } from 'redux-form'
import { graphql, compose } from 'react-apollo'

import { CLASSROOM_PAGE } from '../../constants/endpoints/ui'
import Card, { Header, Body } from '../Card'
import { InputField } from '../Form'
import { Button } from '../Button'

/**
 * @name CreateClassroomForm
 * @desc A form to create a new classroom
 * @prop { mutate } [APOLLO] : Apollo mutation triger function
 * @prop { handleSubmit } [REDUX_FORM] : Redux Form submition handler function
 */
class CreateClassroomForm extends React.Component {
  submitHandler = async ({ name, subject, description }) => {
    const { mutate } = this.props
    try {
      const result = await mutate({
        variables: { name, subject, description }
      })

      const { success, classroomID } = result.data.createClassroom

      if (success) {
        Router.push(`${CLASSROOM_PAGE}?id=${classroomID}`)
      } else {
        alert('failed')
      }
    } catch (err) {}
  }

  render() {
    const { handleSubmit } = this.props
    return (
      <Card small marginTop="5em">
        <Header>สร้างห้องเรียนใหม่</Header>
        <Body>
          <form onSubmit={handleSubmit(this.submitHandler)}>
            <Field name="name" label="ชื่อห้องเรียน" component={InputField} type="text" />
            <Field name="subject" label="วิชาที่สอน" component={InputField} type="text" />
            <Field name="description" label="รายละเอียด" component={InputField} type="text" />
            <Button primary fluidWidth textCenter>
              สร้างห้องเรียน
            </Button>
          </form>
        </Body>
      </Card>
    )
  }
}

CreateClassroomForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  mutate: PropTypes.func.isRequired
}

const CREATE_CLASSROOM_MUTATION = gql`
  mutation createClassroom($name: String!, $description: String!, $subject: String!) {
    createClassroom(name: $name, subject: $subject, description: $description) {
      success
      classroomID
      err {
        message
      }
    }
  }
`

export default compose(
  reduxForm({
    form: 'create_classroom'
  }),
  graphql(CREATE_CLASSROOM_MUTATION)
)(CreateClassroomForm)
