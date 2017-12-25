import React from "react";
import PropTypes from "prop-types";

import PostComponentSelectorModal from "./PostComponentsSelectorModal";
import AddPostComponentModal from "./AddPostComponentModal";
import PostContentEditor from "./PostContentEditor";

/**
 * @name PostEditor
 * @desc A set of tools for building and editing a post
 */
class PostEditor extends React.Component {
  render() {
    return [
      <AddPostComponentModal />,
      <PostComponentSelectorModal />,
      <PostContentEditor />
    ];
  }
}

export default PostEditor;
