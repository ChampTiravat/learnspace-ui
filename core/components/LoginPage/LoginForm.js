import React from 'react'
import gql from 'graphql-tag'
import Router from 'next/router'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import { graphql, compose } from 'react-apollo'

import { showLoadingModal, hideLoadingModal } from '../../reducers/mutation-status'
import { REFRESH_TOKEN, ACCESS_TOKEN } from '../../constants/security'
import { initializeAuthenticatedUser } from '../../reducers/user'
import { showErrorAlert } from '../../reducers/error-alert'

import { DASHBOARD_PAGE } from '../../constants/endpoints/ui'

import Card, { Header, Body } from '../Card'
import { InputField } from '../Form'
import { Button } from '../Button'

/**
 * @name LoginForm
 * @desc Performing login with GraphQL
 * @prop { initializeAuthenticatedUser } [REDUX] : Attach user who has already logged in, into redux store
 * @prop { showLoadingModal } [REDUX] : Display loading modal when performing GraphQL mutation(Login mutation)
 * @prop { hideLoadingModal } [REDUX] : Hide loeading modal after fisnished GraphQL mutation(login mutation)
 * @prop { showErrorAlert } [REDUX] : If there's any error occored, display it with its message
 * @prop { handleSubmit } [REDUX_FORM] : redux-form's form handler function
 * @prop { mutate } [APOLLO] : Apollo-client mutation controller function
 */
class LoginForm extends React.Component {
  submitHandler = async ({ email, password }) => {
    const {
      initializeAuthenticatedUser,
      showLoadingModal,
      hideLoadingModal,
      showErrorAlert,
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

      const { refreshToken, accessToken, success, user, err } = result.data.login

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
        hideLoadingModal()
        showErrorAlert(err.message)
      }
    } catch (err) {
      hideLoadingModal()
      showErrorAlert('ไม่สามารถดำเนินการได้ในขณะนี้')
    }
  }

  render() {
    const { handleSubmit } = this.props
    return (
      <Card small marginTop="5em">
        <Header>ยืนยันตัวตนเพื่อเข้าสู่ระบบ</Header>
        <Body>
          <form onSubmit={handleSubmit(this.submitHandler)}>
            <Field required name="email" label="อีเมลล์" type="email" component={InputField} />
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
  showLoadingModal: PropTypes.func.isRequired,
  hideLoadingModal: PropTypes.func.isRequired,
  showErrorAlert: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isReuired,
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
  initializeAuthenticatedUser: user => dispatch(initializeAuthenticatedUser(user)),

  showLoadingModal: () => dispatch(showLoadingModal()),
  hideLoadingModal: () => dispatch(hideLoadingModal()),

  showErrorAlert: message => dispatch(showErrorAlert(message))
})

export default compose(
  connect(null, mapDispatchToProps),
  reduxForm({ form: 'login' }),
  graphql(LOGIN_MUTATION)
)(LoginForm)
