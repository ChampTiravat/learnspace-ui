import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import styled, { ThemeProvider } from 'styled-components'

import UnAuthenticatedNav from '../NavigationBar/UnAuthenticatedNav'
import LoadingScreenModal from '../LoadingScreenModal'
import defaultTheme from '../../themes/default'
import { ErrorAlert } from '../Alert'

/**
 * @name UnAuthenticatedLayout
 * @desc Use this Layout when user is not authorized
 * @prop { isMutating } [REDUX] : Return TRUE or FALSE depending wether user is performing GraphQL Mutation or not
 * @prop { errorAlert } [REDUX] : Object containing error alert component data
 */
const UnAuthenticatedLayout = ({ children, isMutating, errorAlert }) => (
  <ThemeProvider theme={defaultTheme}>
    <div>
      <LoadingScreenModal isLoading={isMutating} />
      <UnAuthenticatedNav />
      <ErrorAlert show={errorAlert.show}>{errorAlert.message}</ErrorAlert>
      {children}
    </div>
  </ThemeProvider>
)

UnAuthenticatedLayout.propTypes = {
  errorAlert: PropTypes.object.isRequired,
  isMutating: PropTypes.bool.isRequired
}

const mapStateToProps = state => ({
  isMutating: state.mutationStatus,
  errorAlert: state.errorAlert
})

export default connect(mapStateToProps, null)(UnAuthenticatedLayout)
