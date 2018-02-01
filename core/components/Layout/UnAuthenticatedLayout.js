import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import styled, { ThemeProvider } from 'styled-components'

import UnAuthenticatedNav from '../NavigationBar/UnAuthenticatedNav'
import LoadingScreenModal from '../LoadingScreenModal'
import defaultTheme from '../../themes/default'

/**
 * @name UnAuthenticatedLayout
 * @desc Use this Layout when user is not authorized
 * @prop { isMutating } [REDUX] : Return TRUE or FALSE depending wether user is performing GraphQL Mutation or not
 */
const UnAuthenticatedLayout = ({ children, isMutating }) => (
  <ThemeProvider theme={defaultTheme}>
    <div>
      <LoadingScreenModal isLoading={isMutating} />
      <UnAuthenticatedNav />
      {children}
    </div>
  </ThemeProvider>
)

UnAuthenticatedLayout.propTypes = {
  isMutating: PropTypes.bool.isRequired
}

const mapStateToProps = state => ({
  isMutating: state.mutationStatus
})

export default connect(mapStateToProps, null)(UnAuthenticatedLayout)
