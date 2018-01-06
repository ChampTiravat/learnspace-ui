import React from "react";
import PropTypes from "prop-types";

import { renderEditableComponent } from "../../helpers/post";
import SetTitleCard from "./PostComponents/SetPostTitleCard";
import BasedComponent from "./PostComponents/BasedComponent";
import EmptyField from "./PostComponents/EmptyField";
import { CircleButton } from "../Button";
import Card from "../Card";

/**
 * @name PostContentEditor
 * @desc Main playground for building post with the required tools
 * @prop showComponentsSelectorModal: f() to select the post component to add to the receipe
 * @prop showEditPostComponentModal : f() to show showEditPostComponentModal when user wish to edit an existing component
 * @prop showPostPreviewModal : f() to show a post preview modal
 * @prop removePostComponent: f() to remove a single post component
 * @prop resetPost: f() to remove every components in the current post editor
 * @prop receipe: Array of post components
 */
class PostContentEditor extends React.Component {
  shouldComponentUpdate(nextProp) {
    return this.props !== nextProp;
  }

  render() {
    const {
      receipe,
      resetPost,
      removePostComponent,
      showPostPreviewModal,
      showEditPostComponentModal,
      showComponentsSelectorModal
    } = this.props;
    console.log(receipe); // DEBUGING
    return (
      <div>
        <SetTitleCard />
        <Card fluidWidth noShadow padding="2em" marginBottom="4em">
          {renderEditableComponent(
            receipe,
            removePostComponent,
            showEditPostComponentModal
          )}
          <EmptyField onClick={showComponentsSelectorModal} />
        </Card>
        <div>
          {receipe.length > 0 ? (
            <div>
              <CircleButton
                light
                right="3em"
                bottom="15em"
                position="fixed"
                padding="1.3em 1em"
                onClick={resetPost}
              >
                รีเซ็ต
              </CircleButton>
              <CircleButton
                light
                padding="1.3em 1em"
                position="fixed"
                bottom="9em"
                right="3em"
                onClick={showPostPreviewModal}
              >
                พรีวิว
              </CircleButton>
              <CircleButton
                primary
                right="3em"
                bottom="3em"
                position="fixed"
                padding="1.3em 1em"
                onClick={() => alert("Saving")}
              >
                บันทึก
              </CircleButton>
            </div>
          ) : null}
        </div>
      </div>
    );
  }
}

PostContentEditor.propTypes = {
  showComponentsSelectorModal: PropTypes.func.isRequired,
  showEditPostComponentModal: PropTypes.func.isRequired,
  showPostPreviewModal: PropTypes.func.isRequired,
  removePostComponent: PropTypes.func.isRequired,
  resetPost: PropTypes.func.isRequired,
  receipe: PropTypes.array.isRequired
};

export default PostContentEditor;
