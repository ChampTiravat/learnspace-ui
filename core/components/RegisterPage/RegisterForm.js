import React from 'react'
import gql from 'graphql-tag'
import Router from 'next/router'
import PropTypes from 'prop-types'
import { Field, reduxForm } from 'redux-form'
import { graphql, compose } from 'react-apollo'

import { InputField, InputLabel, InputGroup } from '../Form'
import { LOGIN_PAGE } from '../../constants/endpoints/ui'
import Card, { Header, Body } from '../Card'
import { Button } from '../Button'

/**
 * @name RegisterForm
 * @desc A form to register a new user account
 * @prop { handleSubmit } [REDUX] : redux-form's form submition handler function
 * @prop { mutate } [APOLLO] : f() to perform GraphQL mutation
 */
class RegisterForm extends React.Component {
  submitHandler = async ({
    username,
    fname,
    lname,
    email,
    password,
    password_confirmation
  }) => {
    if (password !== password_confirmation) {
      alert('Please confirm your password')
      return
    }

    try {
      const result = await this.props.mutate({
        variables: {
          username,
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
      <Card small marginTop="5em">
        <Header>กรอกข้อมูลเล็กน้อยเพื่อสมัครสมาชิก</Header>
        <Body>
          <form onSubmit={handleSubmit(this.submitHandler)}>
            <Field
              name="email"
              label="อีเมลล์"
              component={InputField}
              type="email"
            />
            <Field
              name="username"
              label="ชื่อผู้ใช้ในระบบ(username)"
              component={InputField}
              type="text"
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
        </Body>
      </Card>
    )
  }
}

RegisterForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  mutate: PropTypes.func.isRequired
}

const USER_REGISTRATION_MUTATION = gql`
  mutation register(
    $username: String!
    $fname: String!
    $lname: String
    $email: String!
    $password: String!
  ) {
    register(
      username: $username
      fname: $fname
      lname: $lname
      email: $email
      password: $password
    ) {
      success
      err {
        message
      }
    }
  }
`

export default compose(
  reduxForm({
    form: 'register'
  }),
  graphql(USER_REGISTRATION_MUTATION)
)(RegisterForm)
