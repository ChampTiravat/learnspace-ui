import React from 'react'
import Head from 'next/head'
import Router from 'next/router'

import ClassroomActivityPanel from '../core/components/ClassroomPage/ClassroomActivityPanel'
import JoinRequestPanel from '../core/components/ClassroomJoinRequestPage/JoinRequestPanel'
import ClassroomHeaderPanel from '../core/components/ClassroomPage/ClassroomHeaderPanel'
import AuthenticatedLayout from '../core/components/Layout/AuthenticatedLayout'
import { CLASSROOM_PAGE } from '../core/constants/endpoints/ui'
import Container from '../core/components/Container'
import withData from '../core/withData'

class ClassroomJoinRequestPage extends React.Component {
  static async getInitialProps({ query: { id } }) {
    return {
      isMember: 1,
      classroomID: id,
      classroomName: 'Introduction to Computer Science'
    }
  }

  render() {
    const { isMember, classroomID, classroomName } = this.props
    return !isMember
      ? Router.push(CLASSROOM_PAGE)
      : [
          <Head>
            <title>คำขอเข้าร่วม - {this.props.className} | LEARNSPACE</title>
          </Head>,
          <AuthenticatedLayout>
            <ClassroomHeaderPanel classroomID={classroomID} classroomName={classroomName} />
            <Container marginTop="7em">
              <JoinRequestPanel />
              <ClassroomActivityPanel />
            </Container>
          </AuthenticatedLayout>
        ]
  }
}

export default withData(ClassroomJoinRequestPage)
