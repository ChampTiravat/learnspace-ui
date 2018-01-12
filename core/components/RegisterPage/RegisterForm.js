import React from 'react'
import PropTypes from 'prop-types'
import Router from 'next/router'
import { Field, reduxForm } from 'redux-form'
import { graphql, compose } from 'react-apollo'
import gql from 'graphql-tag'

import { InputField, InputLabel, InputGroup } from '../Form'
import { LOGIN_PAGE } from '../../constants/endpoints/ui'
import { Button } from '../Button'

/**
 * @name RegisterForm
 * @desc A form to register a new user account
 * @prop [REDUX] handleSubmit : redux-form's form submition handler function
 * @prop [APOLLO] mutate : f() to perform GraphQL mutation
 */
class RegisterForm extends React.Component {
  submitHandler = async ({ fname, lname, email, password }) => {
    try {
      const result = await this.props.mutate({
        variables: {
          fname,
          lname,
          email,
          password
        }
      })

      const { success } = result.data.register

      if (success) {
        Router.push(LOGIN_PAGE)
      } else {
        alert('failed')
      }
    } catch (err) {
      // Do something with this later
    }
  }

  render() {
    const { handleSubmit } = this.props
    return (
      <form onSubmit={handleSubmit(this.submitHandler)}>
        <Field
          name="email"
          label="อีเมลล์"
          component={InputField}
          type="email"
        />
        <Field
          name="fname"
          label="ชื่อจริง"
          component={InputField}
          type="text"
        />
        <Field
          name="lname"
          label="นามสกุล"
          component={InputField}
          type="text"
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
        <Button primary fluidWidth textCenter>
          ยืนยัน
        </Button>
      </form>
    )
  }
}

RegisterForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  mutate: PropTypes.func.isRequired
}

const USER_REGISTRATION_MUTATION = gql`
  mutation register(
    $fname: String!
    $lname: String
    $email: String!
    $password: String!
  ) {
    register(fname: $fname, lname: $lname, email: $email, password: $password) {
      success
      err
    }
  }
`

export default compose(
  reduxForm({
    form: 'register'
  }),
  graphql(USER_REGISTRATION_MUTATION)
)(RegisterForm)
