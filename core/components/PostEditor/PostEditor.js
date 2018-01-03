import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { showAddPostComponentModal } from "../../actions/post-editor-actions";
import PostComponentSelectorModal from "./PostComponentsSelectorModal";
import AddPostComponentModal from "./AddPostComponentModal";
import PostContentEditor from "./PostContentEditor";
import {
  hidePostComponentsSelectorModal,
  showPostComponentsSelectorModal,
  hideAddPostComponentModal,
  addNewPostComponent,
  resetPost
} from "../../actions/post-editor-actions";

/**
 * @name PostEditor
 * @desc A set of tools for building and editing a post
 * @prop [REDUX] receipe: Array of post components
 * @prop [REDUX] showComponentsSelectorModal: f() to select the post component to add to the receipe
 * @prop [REDUX] isComponentsSelectorModalShowing : is this modal showing
 * @prop [REDUX] hideComponentsSelectorModal : dipatch an action to hide this modal
 * @prop [REDUX] showAddPostComponentModal : Display a modal to enter an essential information to create a modal
 * @prop [REDUX] hideAddPostComponentModal : f() to hide 'AddPostComponentModal'. Used this when finished adding data to selected component
 * @prop [REDUX] addPostComponentModal : Object contains information about 'AddPostComponentModal'
 * @prop [REDUX] addNewPostComponent : Add a new component to 'receipe'
 * @prop [REDUX] resetPost : f() to delete all components in the post editor
 */
class PostEditor extends React.Component {
  render() {
    const {
      isComponentsSelectorModalShowing,
      showComponentsSelectorModal,
      hideComponentsSelectorModal,
      showAddPostComponentModal,
      hideAddPostComponentModal,
      addPostComponentModal,
      addNewPostComponent,
      resetPost,
      receipe
    } = this.props;
    return [
      <AddPostComponentModal
        hideAddPostComponentModal={hideAddPostComponentModal}
        addPostComponentModal={addPostComponentModal}
        addNewPostComponent={addNewPostComponent}
        receipe={receipe}
      />,
      <PostComponentSelectorModal
        isComponentsSelectorModalShowing={isComponentsSelectorModalShowing}
        hideComponentsSelectorModal={hideComponentsSelectorModal}
        showAddPostComponentModal={showAddPostComponentModal}
      />,
      <PostContentEditor
        receipe={receipe}
        resetPost={resetPost}
        showComponentsSelectorModal={showComponentsSelectorModal}
      />
    ];
  }
}

PostEditor.propTypes = {
  isComponentsSelectorModalShowing: PropTypes.bool.isRequired,
  showComponentsSelectorModal: PropTypes.func.isRequired,
  hideComponentsSelectorModal: PropTypes.func.isRequired,
  showComponentsSelectorModal: PropTypes.func.isRequired,
  showAddPostComponentModal: PropTypes.func.isRequired,
  hideAddPostComponentModal: PropTypes.func.isRequired,
  addPostComponentModal: PropTypes.object.isRequired,
  addNewPostComponent: PropTypes.func.isRequired,
  resetPost: PropTypes.func.isRequired,
  receipe: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  isComponentsSelectorModalShowing: state.isPostComponentsSelectorModalShowing,
  addPostComponentModal: state.isAddPostComponentModalShowing,
  receipe: state.editingPostReceipe
});

const mapDispatchToProps = dispatch => ({
  addNewPostComponent: componentToAdd =>
    dispatch(addNewPostComponent(componentToAdd)),
  showComponentsSelectorModal: () =>
    dispatch(showPostComponentsSelectorModal()),
  hideAddPostComponentModal: () => dispatch(hideAddPostComponentModal()),
  showAddPostComponentModal: type => dispatch(showAddPostComponentModal(type)),
  hideComponentsSelectorModal: () =>
    dispatch(hidePostComponentsSelectorModal()),
  resetPost: () => dispatch(resetPost())
});

export default connect(mapStateToProps, mapDispatchToProps)(PostEditor);
