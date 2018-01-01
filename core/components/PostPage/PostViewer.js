import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { showPostRemovalConfirmationModal } from "../../actions/post-page-actions";
import PostRemovalConfirmationModal from "./PostRemovalConfirmationModal";
import PostCommentsPanel from "./PostCommentsPanel";
import CommentMessageBox from "./CommentMessageBox";
import PostActivityPanel from "./PostActivityPanel";
import PostContent from "./PostContent";
import Container from "../Container";

/**
 * @name PostViewer
 * @desc Display post content, comments in one component
 */
const PostViewer = ({ showPostRMModal }) => (
  <Container marginTop="11.5em">
    <PostContent />
    <PostCommentsPanel />
    <CommentMessageBox />
    <PostActivityPanel showPostRMModal={showPostRMModal} />
    <PostRemovalConfirmationModal />
  </Container>
);

PostViewer.propTypes = {
  showPostRMModal: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => ({
  showPostRMModal: () => dispatch(showPostRemovalConfirmationModal())
});

export default connect(null, mapDispatchToProps)(PostViewer);
