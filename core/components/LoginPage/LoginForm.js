import React from 'react'
import PropTypes from 'prop-types'
import Router from 'next/router'
import { Field, reduxForm } from 'redux-form'
import { graphql, compose } from 'react-apollo'
import gql from 'graphql-tag'

import { REFRESH_TOKEN, ACCESS_TOKEN } from '../../constants/security'
import { DASHBOARD_PAGE } from '../../constants/endpoints/ui'
import { InputField } from '../Form'
import { Button } from '../Button'

class LoginForm extends React.Component {
  submitHandler = async ({ email, password }) => {
    try {
      // Running mutation
      const result = await this.props.mutate({
        variables: {
          email,
          password
        }
      })

      const {
        success,
        err,
        refreshToken,
        accessToken,
        user
      } = result.data.login

      if (success) {
        // Save tokens into the client
        await window.localStorage.setItem(REFRESH_TOKEN, refreshToken)
        await window.localStorage.setItem(ACCESS_TOKEN, accessToken)

        // Redirect to dashboard page
        Router.push(DASHBOARD_PAGE)
      } else {
        console.log('err: ' + err)
      }
    } catch (err) {
      console.log(err)
      // Do something with this
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
          name="password"
          label="พาสเวิร์ด"
          component={InputField}
          type="password"
        />
        <Button primary fluidWidth textCenter>
          เข้าสู่ระบบ
        </Button>
      </form>
    )
  }
}

LoginForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  mutate: PropTypes.func.isRequired
}

const LOGIN_MUTATION = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      success
      err
      refreshToken
      accessToken
      user {
        _id
        fname
        email
      }
    }
  }
`

export default compose(
  reduxForm({
    form: 'login'
  }),
  graphql(LOGIN_MUTATION)
)(LoginForm)
