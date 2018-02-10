import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import gql from 'graphql-tag'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { graphql, compose } from 'react-apollo'

import AuthenticatedLayout from '../core/components/Layout/AuthenticatedLayout'
import PostViewer from '../core/components/PostPage/PostViewer'
import withData from '../core/withData'
import {
  hidePostRemovalConfirmationModal,
  showPostRemovalConfirmationModal
} from '../core/actions/post-page-actions'

/**
 * @name PostPage
 * @desc Display post content
 * @prop { data } [APOLLO] : GraphQL Response
 * @prop { postID } [NEXT] : Post ID(uses by Apollo-Client)
 * @prop { showPostRMModal } [REDUX] : Show the modal
 * @prop { hidePostRMModal } [REDUX] : Hide the modal
 * @prop { isPostRMModalShowing } [REDUX] : State of the modal(is displaying or not)
 */
class PostPage extends React.Component {
  static async getInitialProps({ query: { id } }) {
    return { postID: id }
  }

  render() {
    const {
      postID,
      hidePostRMModal,
      showPostRMModal,
      isPostRMModalShowing,
      data: { loading, getPost }
    } = this.props

    return (
      <div>
        <Head>
          <title>
            {loading ? 'loading...' : `${getPost.post.title} | LEARNSPACE`}
          </title>
        </Head>
        <AuthenticatedLayout>
          <PostViewer
            postID={postID}
            loading={loading}
            hidePostRMModal={hidePostRMModal}
            showPostRMModal={showPostRMModal}
            isPostRMModalShowing={isPostRMModalShowing}
            recipe={!loading ? getPost.post.recipe : null}
            comments={!loading ? getPost.post.comments : null}
          />
        </AuthenticatedLayout>
      </div>
    )
  }
}

PostPage.propTypes = {
  isPostRMModalShowing: PropTypes.bool.isRequired,
  showPostRMModal: PropTypes.func.isRequired,
  hidePostRMModal: PropTypes.func.isRequired,
  postID: PropTypes.string.isRequired,
  data: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  isPostRMModalShowing: state.postRemovalConfirmationModal
})

const mapDispatchToProps = dispatch => ({
  showPostRMModal: () => dispatch(showPostRemovalConfirmationModal()),
  hidePostRMModal: () => dispatch(hidePostRemovalConfirmationModal())
})

const GET_POST_QUERY = gql`
  query getPost($_id: String!) {
    getPost(_id: $_id) {
      post {
        title
        recipe
        comments {
          message
          creator {
            _id
            fname
            profilePicture
          }
          subComments {
            message
            creator {
              _id
              fname
              profilePicture
            }
          }
        }
      }
      err {
        message
      }
    }
  }
`

export default compose(
  withData,
  connect(mapStateToProps, mapDispatchToProps),
  graphql(GET_POST_QUERY, {
    options: ({ postID }) => ({ variables: { _id: postID } })
  })
)(PostPage)
