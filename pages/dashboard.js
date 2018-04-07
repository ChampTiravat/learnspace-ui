import React from 'react'
import Head from 'next/head'
import { connect } from 'react-redux'
import styled from 'styled-components'

import DashboardPageHeadingPanel from '../core/components/DashboardPage/DashboardPageHeadingPanel'
import AuthenticatedLayout from '../core/components/Layout/AuthenticatedLayout'
import NotificationPanel from '../core/components/NotificationPanel'
import ClassroomsList from '../core/components/ClassroomsList'
import Container from '../core/components/Container'
import Panel from '../core/components/Panel'
import withData from '../core/withData'

/**
 * @name DashboardPage
 * @desc Display important notifications and statistical visualization
 * @prop { activeUser } [REDUX] : Current logged-in user
 */
class DashboardPage extends React.Component {
  render() {
    const { activeUser } = this.props
    return [
      <Head>
        <title>หน้าหลัก | LEARNSPACE</title>
      </Head>,
      <AuthenticatedLayout>
        <Container>
          <Panel left width="40">
            <NotificationPanel />
          </Panel>
          <Panel right width="60">
            <DashboardPageHeadingPanel />
            <ClassroomsList _id={activeUser._id} height="600px" />
          </Panel>
        </Container>
      </AuthenticatedLayout>
    ]
  }
}

const mapStateToProps = state => ({
  activeUser: state.user
})

export default withData(connect(mapStateToProps, null)(DashboardPage))
