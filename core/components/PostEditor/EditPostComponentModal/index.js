import React from "react";
import PropTypes from "prop-types";

import EditPostComponentDetailForm from "./EditPostComponentDetailForm";
import { ModalBackground, ModalPanel } from "../../Modal";
import { editPostComponent } from "../../../actions/post-editor-actions";

/**
 * @name EditPostComponentModal
 * @desc Display a modal to edit a new post component
 * @prop [REDUX] hideEditPostComponentModal : f() to close EditPostComponentModal
 * @prop [REDUX] editPostComponent : f() to edit an existing post component in the receipe
 * @prop [REDUX] editPostComponentModal : Object contains information about EditPostComponentModal
 */
class EditPostComponentModal extends React.Component {
  render() {
    const {
      hideEditPostComponentModal,
      editPostComponentModal,
      editPostComponent
    } = this.props;
    return (
      <ModalBackground
        style={{ zIndex: "100" }}
        show={editPostComponentModal.isShowing}
      >
        <ModalPanel style={{ maxWidth: "1200px" }}>
          <EditPostComponentDetailForm
            order={editPostComponentModal.order}
            type={editPostComponentModal.type}
            editPostComponent={editPostComponent}
            hideEditPostComponentModal={hideEditPostComponentModal}
          />
        </ModalPanel>
      </ModalBackground>
    );
  }
}

EditPostComponentModal.propTypes = {
  hideEditPostComponentModal: PropTypes.func.isRequired,
  editPostComponentModal: PropTypes.object.isRequired,
  editPostComponent: PropTypes.func.isRequired,
  receipe: PropTypes.array.isRequired
};

export default EditPostComponentModal;
