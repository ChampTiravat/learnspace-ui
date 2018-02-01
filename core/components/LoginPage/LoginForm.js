import React from 'react'
import gql from 'graphql-tag'
import Router from 'next/router'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import { graphql, compose } from 'react-apollo'

import { initializeAuthenticatedUser } from '../../actions/user-actions'
import { REFRESH_TOKEN, ACCESS_TOKEN } from '../../constants/security'
import { DASHBOARD_PAGE } from '../../constants/endpoints/ui'
import Card, { Header, Body } from '../Card'
import { InputField } from '../Form'
import { Button } from '../Button'
import {
  showLoadingModal,
  hideLoadingModal
} from '../../actions/system-actions'

class LoginForm extends React.Component {
  state = { err: null }

  submitHandler = async ({ email, password }) => {
    const {
      initializeAuthenticatedUser,
      showLoadingModal,
      hideLoadingModal,
      mutate
    } = this.props

    showLoadingModal()

    try {
      // Running mutation
      const result = await mutate({
        variables: {
          email,
          password
        }
      })

      const {
        refreshToken,
        accessToken,
        success,
        user,
        err
      } = result.data.login

      if (success) {
        hideLoadingModal()

        // Save tokens into the client
        await window.localStorage.setItem(REFRESH_TOKEN, refreshToken)
        await window.localStorage.setItem(ACCESS_TOKEN, accessToken)

        // Save authenticated user into Redux Store
        initializeAuthenticatedUser(user)

        // Redirect to dashboard page
        await Router.push(DASHBOARD_PAGE)
      } else {
        this.setState({ err: err.message })
        hideLoadingModal()
      }
    } catch (err) {
      hideLoadingModal()
    }
  }

  render() {
    const { handleSubmit } = this.props
    const { err } = this.state
    return (
      <Card small marginTop="5em">
        <Header>ยืนยันตัวตนเพื่อเข้าสู่ระบบ</Header>
        <Body>
          {err != null ? <h3 style={{ color: 'red' }}>{err}</h3> : null}
          <form onSubmit={handleSubmit(this.submitHandler)}>
            <Field
              required
              name="email"
              label="อีเมลล์"
              type="email"
              component={InputField}
            />
            <Field
              required
              name="password"
              label="พาสเวิร์ด"
              type="password"
              component={InputField}
            />
            <Button primary fluidWidth textCenter>
              เข้าสู่ระบบ
            </Button>
          </form>
        </Body>
      </Card>
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
    dispatch(initializeAuthenticatedUser(user)),

  showLoadingModal: () => dispatch(showLoadingModal()),
  hideLoadingModal: () => dispatch(hideLoadingModal())
})

export default compose(
  connect(null, mapDispatchToProps),
  reduxForm({ form: 'login' }),
  graphql(LOGIN_MUTATION)
)(LoginForm)
