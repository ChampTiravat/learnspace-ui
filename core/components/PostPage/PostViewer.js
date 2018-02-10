import React from 'react'
import PropTypes from 'prop-types'

import PostRemovalConfirmationModal from './PostRemovalConfirmationModal'
import PostCommentsPanel from './PostCommentsPanel'
import CommentMessageBox from './CommentMessageBox'
import PostActivityPanel from './PostActivityPanel'
import LoadingIcon from '../LoadingIcon'
import PostContent from './PostContent'
import Container from '../Container'

/**
 * @name PostViewer
 * @desc Display post content, comments in one component
 * @prop { postID } [NEXT] : Post ID
 * @prop { recipe } [APOLLO] : Post recipe
 * @prop { loading } [APOLLO] : Determining wether GraphQL operation is complete or not
 * @prop { comments } [APOLLO] : Array of post's comments
 * @prop { showPostRMModal } [REDUX] : Show the modal
 * @prop { hidePostRMModal } [REDUX] : Hide the modal
 * @prop { isPostRMModalShowing } [REDUX] : State of the modal(is displaying or not)
 */
const PostViewer = ({
  isPostRMModalShowing,
  hidePostRMModal,
  showPostRMModal,
  comments,
  loading,
  postID,
  recipe
}) =>
  !loading ? (
    <Container>
      <PostContent recipe={recipe} />
      <PostCommentsPanel comments={comments} />
      <CommentMessageBox />
      <PostActivityPanel showPostRMModal={showPostRMModal} />
      <PostRemovalConfirmationModal
        postID={postID}
        isPostRMModalShowing={isPostRMModalShowing}
        hidePostRMModal={hidePostRMModal}
      />
    </Container>
  ) : (
    <LoadingIcon />
  )

PostViewer.propTypes = {
  isPostRMModalShowing: PropTypes.bool.isRequired,
  hidePostRMModal: PropTypes.func.isRequired,
  showPostRMModal: PropTypes.func.isRequired,
  comments: PropTypes.array.isRequired,
  postID: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired,
  recipe: PropTypes.array.isRequired
}

export default PostViewer
