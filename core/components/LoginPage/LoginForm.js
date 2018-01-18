import React from 'react'
import PropTypes from 'prop-types'
import Router from 'next/router'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import { graphql, compose } from 'react-apollo'
import gql from 'graphql-tag'

import { initializeAuthenticatedUser } from '../../actions/user-actions'
import { REFRESH_TOKEN, ACCESS_TOKEN } from '../../constants/security'
import { DASHBOARD_PAGE } from '../../constants/endpoints/ui'
import { InputField } from '../Form'
import { Button } from '../Button'

class LoginForm extends React.Component {
  submitHandler = async ({ email, password }) => {
    const { initializeAuthenticatedUser, mutate } = this.props
    try {
      // Running mutation
      const result = await mutate({
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

        // Save authenticated user into Redux Store
        initializeAuthenticatedUser(user)

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
  initializeAuthenticatedUser: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  mutate: PropTypes.func.isRequired
}

const LOGIN_MUTATION = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      success
      refreshToken
      accessToken
      user {
        _id
        fname
        lname
        email
      }
      err {
        message
      }
    }
  }
`

const mapDispatchToProps = dispatch => ({
  initializeAuthenticatedUser: user =>
    dispatch(initializeAuthenticatedUser(user))
})

export default compose(
  connect(null, mapDispatchToProps),
  reduxForm({ form: 'login' }),
  graphql(LOGIN_MUTATION)
)(LoginForm)
