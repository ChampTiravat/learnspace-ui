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
  renderModalTitleDependsOnComponentType = type => {
    const componentDescriptionHashMap = {
      SLIDE_SHOW: "สไลด์รูปภาพ",
      PARAGRAPH: "ย่อหน้า",
      HEADING: "หัวข้อเรื่อง",
      SUB_HEADING: "หัวข้อย่อย",
      ATTACHMENT: "ไฟล์แนบ",
      TABLE: "ตาราง",
      IMAGE: "รูปภาพ",
      VIDEO: "วิดีโอ",
      LIST: "รายการย่อย",
      MAP: "แผนที่"
    };
    return componentDescriptionHashMap[type];
  };

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
        <ModalPanel style={{ maxWidth: "900px" }}>
          <AddPostComponentDetailForm
            hideAddPostComponentModal={hideAddPostComponentModal}
            addNewPostComponent={addNewPostComponent}
            type={AddPostComponentModal.type}
            renderModalTitleDependsOnComponentType={
              this.renderModalTitleDependsOnComponentType
            }
            order={receipe.length}
          />
        </ModalPanel>
      </ModalBackground>
    );
  }
}

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
