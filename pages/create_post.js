import React from 'react'
import Head from 'next/head'

import ClassroomActivityPanel from '../core/components/ClassroomPage/ClassroomActivityPanel'
import AuthenticatedLayout from '../core/components/Layout/AuthenticatedLayout'
import PostEditor from '../core/components/PostEditor/PostEditor'
import Container from '../core/components/Container'
import withData from '../core/withData'

class CreatePostPage extends React.Component {
  static async getInitialProps({ query: { classroomID } }) {
    return { classroomID }
  }

  render() {
    const { classroomID } = this.props
    return [
      <Head>
        <title>สร้างโพสใหม่ | LEARNSPACE</title>
      </Head>,
      <AuthenticatedLayout>
        <Container transparent>
          <PostEditor classroomID={classroomID} />
        </Container>
	<ClassroomActivityPanel />
      </AuthenticatedLayout>
    ]
  }
}

export default withData(CreatePostPage)
