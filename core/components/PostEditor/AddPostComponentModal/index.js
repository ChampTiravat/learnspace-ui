import React from "react";
import PropTypes from "prop-types";

import AddPostComponentDetailForm from "./AddPostComponentDetailForm";
import { ModalBackground, ModalPanel } from "../../Modal";

/**
 * @name AddPostComponentModal
 * @desc Display a modal to add a new post component
 * @prop [REDUX] hideAddPostComponentModal : f() to hide 'AddPostComponentModal'. Used this when finished adding data to selected component
 * @prop [REDUX] addPostComponentModal : Object contains information about 'AddPostComponentModal'
 * @prop [REDUX] addNewPostComponent : Add a new component to 'receipe'
 * @prop [REDUX] receipe: Array of post components
 */
class AddPostComponentModal extends React.Component {
  render() {
    const {
      hideAddPostComponentModal,
      addPostComponentModal,
      addNewPostComponent,
      receipe
    } = this.props;
    return (
      <ModalBackground
        style={{ zIndex: "100" }}
        show={addPostComponentModal.isShowing}
      >
        <ModalPanel style={{ maxWidth: "1200px" }}>
          <AddPostComponentDetailForm
            order={receipe.length}
            type={addPostComponentModal.type}
            addNewPostComponent={addNewPostComponent}
            hideAddPostComponentModal={hideAddPostComponentModal}
          />
        </ModalPanel>
      </ModalBackground>
    );
  }
}

AddPostComponentModal.propTypes = {
  hideAddPostComponentModal: PropTypes.func.isRequired,
  addPostComponentModal: PropTypes.object.isRequired,
  addNewPostComponent: PropTypes.func.isRequired,
  receipe: PropTypes.array.isRequired
};

export default AddPostComponentModal;
