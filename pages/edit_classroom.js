import React from 'react'
import Head from 'next/head'
import Router from 'next/router'

import ClassroomActivityPanel from '../core/components/ClassroomPage/ClassroomActivityPanel'
import ClassroomHeaderPanel from '../core/components/ClassroomPage/ClassroomHeaderPanel'
import EditClassroomForm from '../core/components/EditClassroomPage/EditClassroomForm'
import AuthenticatedLayout from '../core/components/Layout/AuthenticatedLayout'
import Container from '../core/components/Container'
import withData from '../core/withData'

import { CLASSROOM_PAGE } from '../core/constants/endpoints/ui'

class EditClassroomPage extends React.Component {
  static async getInitialProps() {
    return {
      isMember: 1,
      classroomID: '1',
      classroomName: 'Introduction to Computer Science'
    }
  }

  render() {
    const { isMember, classroomID, classroomName } = this.props
    return !isMember
      ? Router.push(CLASSROOM_PAGE)
      : [
          <Head>
            <title>แก้ไขรายละเอียด - {classroomName}</title>
          </Head>,
          <AuthenticatedLayout>
            <ClassroomHeaderPanel classroomID={classroomID} classroomName={classroomName} />
            <Container transparent marginTop="10em">
              <EditClassroomForm />
            </Container>
            <ClassroomActivityPanel />
          </AuthenticatedLayout>
        ]
  }
}

export default withData(EditClassroomPage)
