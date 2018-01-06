import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import PostRemovalConfirmationModal from "./PostRemovalConfirmationModal";
import PostCommentsPanel from "./PostCommentsPanel";
import CommentMessageBox from "./CommentMessageBox";
import PostActivityPanel from "./PostActivityPanel";
import PostContent from "./PostContent";
import Container from "../Container";
import {
  hidePostRemovalConfirmationModal,
  showPostRemovalConfirmationModal
} from "../../actions/post-page-actions";

/**
 * @name PostViewer
 * @desc Display post content, comments in one component
 * @prop [REDUX] isPostRMModalShowing : State of the modal(is displaying or not)
 * @prop [REDUX] showPostRMModal : Show the modal
 * @prop [REDUX] hidePostRMModal : Hide the modal
 */
const PostViewer = ({
  isPostRMModalShowing,
  hidePostRMModal,
  showPostRMModal
}) => (
  <Container marginTop="11.5em">
    <PostContent />
    <PostCommentsPanel />
    <CommentMessageBox />
    <PostActivityPanel showPostRMModal={showPostRMModal} />
    <PostRemovalConfirmationModal
      isPostRMModalShowing={isPostRMModalShowing}
      hidePostRMModal={hidePostRMModal}
    />
  </Container>
);

PostViewer.propTypes = {
  isPostRMModalShowing: PropTypes.bool.isRequired,
  showPostRMModal: PropTypes.func.isRequired,
  hidePostRMModal: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  isPostRMModalShowing: state.postRemovalConfirmationModal
});

const mapDispatchToProps = dispatch => ({
  showPostRMModal: () => dispatch(showPostRemovalConfirmationModal()),
  hidePostRMModal: () => dispatch(hidePostRemovalConfirmationModal())
});

export default connect(mapStateToProps, mapDispatchToProps)(PostViewer);
