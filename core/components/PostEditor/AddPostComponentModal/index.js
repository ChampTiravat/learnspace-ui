import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import AddPostComponentDetailForm from "./AddPostComponentDetailForm";
import { ModalBackground, ModalPanel } from "../../Modal";
import {
  SUB_HEADING,
  SLIDE_SHOW,
  ATTACHMENT,
  PARAGRAPH,
  HEADING,
  TABLE,
  IMAGE,
  VIDEO,
  LIST,
  MAP
} from "../../../constants/post-content/components";
import {
  hideAddPostComponentModal,
  addNewPostComponent
} from "../../../actions/post-editor-actions";

class AddPostComponentModal extends React.Component {
  render() {
    const {
      hideAddPostComponentModal,
      AddPostComponentModal,
      addNewPostComponent,
      receipe
    } = this.props;
    return (
      <ModalBackground
        style={{ zIndex: "100" }}
        show={AddPostComponentModal.isShowing}
      >
        <ModalPanel style={{ maxWidth: "1200px" }}>
          <AddPostComponentDetailForm
            order={receipe.length}
            type={AddPostComponentModal.type}
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
  addNewPostComponent: PropTypes.func.isRequired,
  AddPostComponentDetailForm: PropTypes.object,
  receipe: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  AddPostComponentModal: state.isAddPostComponentModalShowing,
  receipe: state.editingPostReceipe
});

const mapDispatchToProps = dispatch => ({
  hideAddPostComponentModal: () => dispatch(hideAddPostComponentModal()),
  addNewPostComponent: componentToAdd =>
    dispatch(addNewPostComponent(componentToAdd))
});

export default connect(mapStateToProps, mapDispatchToProps)(
  AddPostComponentModal
);
