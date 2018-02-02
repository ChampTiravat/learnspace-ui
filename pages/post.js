import React from 'react'
import Head from 'next/head'
import Link from 'next/link'

import PostRemovalConfirmationModal from '../core/components/PostPage/PostRemovalConfirmationModal'
import AuthenticatedLayout from '../core/components/Layout/AuthenticatedLayout'
import PostViewer from '../core/components/PostPage/PostViewer'
import withData from '../core/withData'

class PostPage extends React.Component {
  static async getInitialProps({ query: { id } }) {
    return { postID: id }
  }

  render() {
    const { postID, classroomID, classroomName } = this.props
    return [
      <Head>
        <title>Introduction to Artificial Intelligence | LEARNSPACE</title>
      </Head>,
      <AuthenticatedLayout>
        <PostViewer postID={postID} />
      </AuthenticatedLayout>
    ]
  }
}

export default withData(PostPage)
