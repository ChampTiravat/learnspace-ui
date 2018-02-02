import React from 'react'
import gql from 'graphql-tag'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { graphql, compose } from 'react-apollo'

import PostRemovalConfirmationModal from './PostRemovalConfirmationModal'
import PostCommentsPanel from './PostCommentsPanel'
import CommentMessageBox from './CommentMessageBox'
import PostActivityPanel from './PostActivityPanel'
import LoadingIcon from '../LoadingIcon'
import PostContent from './PostContent'
import Container from '../Container'
import {
  hidePostRemovalConfirmationModal,
  showPostRemovalConfirmationModal
} from '../../actions/post-page-actions'

/**
 * @name PostViewer
 * @desc Display post content, comments in one component
 * @prop { data } [APOLLO] : GraphQL Response
 * @prop { postID } [APOLLO] : Post ID(uses by Apollo-Client)
 * @prop { showPostRMModal } [REDUX] : Show the modal
 * @prop { hidePostRMModal } [REDUX] : Hide the modal
 * @prop { isPostRMModalShowing } [REDUX] : State of the modal(is displaying or not)
 */
const PostViewer = ({
  data: { loading, getPost },
  isPostRMModalShowing,
  hidePostRMModal,
  showPostRMModal
}) =>
  !loading ? (
    <Container>
      <PostContent recipe={getPost.post.recipe} />
      <PostCommentsPanel />
      <CommentMessageBox />
      <PostActivityPanel showPostRMModal={showPostRMModal} />
      <PostRemovalConfirmationModal
        isPostRMModalShowing={isPostRMModalShowing}
        hidePostRMModal={hidePostRMModal}
      />
    </Container>
  ) : (
    <LoadingIcon />
  )

PostViewer.propTypes = {
  isPostRMModalShowing: PropTypes.bool.isRequired,
  showPostRMModal: PropTypes.func.isRequired,
  hidePostRMModal: PropTypes.func.isRequired
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
      }
      err {
        message
      }
    }
  }
`

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  graphql(GET_POST_QUERY, {
    options: ({ postID }) => ({ variables: { _id: postID } })
  })
)(PostViewer)
