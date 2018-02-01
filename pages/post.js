import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import styled from 'styled-components'

import PostRemovalConfirmationModal from '../core/components/PostPage/PostRemovalConfirmationModal'
import ClassroomHeaderPanel from '../core/components/ClassroomPage/ClassroomHeaderPanel'
import AuthenticatedLayout from '../core/components/Layout/AuthenticatedLayout'
import PostViewer from '../core/components/PostPage/PostViewer'
import withData from '../core/withData'

class PostPage extends React.Component {
  static async getInitialProps({ query: { id } }) {
    return {
      postID: id,
      classroomID: '1',
      classroomName: 'Introduction to Computer Science'
    }
  }

  render() {
    const { postID, classroomID, classroomName } = this.props
    return [
      <Head>
        <title>Introduction to Artificial Intelligence | LEARNSPACE</title>
      </Head>,
      <AuthenticatedLayout>
        <ClassroomHeaderPanel
          classroomID={classroomID}
          classroomName={classroomName}
        />
        <PostViewer postID={postID} />
      </AuthenticatedLayout>
    ]
  }
}

export default withData(PostPage)
