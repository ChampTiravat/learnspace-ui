import React from "react";

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
const PostViewer = () => (
  <Container marginTop="11.5em">
    <PostContent />
    <PostCommentsPanel />
    <CommentMessageBox />
    <PostActivityPanel />
    <PostRemovalConfirmationModal />
  </Container>
);

export default PostViewer;
