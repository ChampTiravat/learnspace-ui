import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { hideAddPostComponentModal } from "../../actions/post-editor-actions";
import SlideShow from "./PostComponents/EditableComponents/SlideShow";
import { SuccessButton, DangerButton, LightButton } from "../Button";
import Heading from "./PostComponents/EditableComponents/Heading";
import Image from "./PostComponents/EditableComponents/Image";
import Table from "./PostComponents/EditableComponents/Table";
import Map from "./PostComponents/EditableComponents/Map";
import { ModalBackground, ModalPanel } from "../Modal";
import Card, { Header, Body, Footer } from "../Card";
import { Form, Input, InputLabel } from "../Form";
import {
  SUB_HEADING,
  SLIDE_SHOW,
  ATTACHMENT,
  PARAGRAPH,
  HEADING,
  TABLE,
  IMAGE,
  VIDEO,
  MAP
} from "../../constants/post-content/components";

class AddPostComponentModal extends React.Component {
  renderComponentToAdd = type => {
    switch (type) {
      case SLIDE_SHOW:
        return <SlideShow />;
      case PARAGRAPH:
        return <Heading />;
      case HEADING:
        return <Heading />;
      case TABLE:
        return <Table />;
      case IMAGE:
        return <Image />;
      case VIDEO:
        return <Image />;
      case MAP:
        return <Map />;
    }
  };

  renderModalTitleDependsOnComponentType = type => {
    switch (type) {
      case SLIDE_SHOW:
        return "สไลด์รูปภาพ";
      case PARAGRAPH:
        return "ย่อหน้า";
      case HEADING:
        return "หัวข้อเรื่อง";
      case TABLE:
        return "ตาราง";
      case IMAGE:
        return "รูปภาพ";
      case VIDEO:
        return "วิดีโอ";
      case MAP:
        return "แผนที่";
    }
  };

  render() {
    const {
      AddPostComponentModal,
      hideAddPostComponentModal,
      type
    } = this.props;
    return (
      <ModalBackground
        style={{ zIndex: "100" }}
        show={AddPostComponentModal.isShowing}
      >
        <ModalPanel style={{ maxWidth: "900px" }}>
          <Header>
            {this.renderModalTitleDependsOnComponentType(
              AddPostComponentModal.type
            )}
          </Header>
          <Body>{this.renderComponentToAdd(AddPostComponentModal.type)}</Body>
          <Footer>
            <SuccessButton marginRight="0.5em">เสร็จสิ้น</SuccessButton>
            <DangerButton onClick={hideAddPostComponentModal}>
              ยกเลิก
            </DangerButton>
          </Footer>
        </ModalPanel>
      </ModalBackground>
    );
  }
}

const mapStateToProps = state => ({
  AddPostComponentModal: state.isAddPostComponentModalShowing
});

const mapDispatchToProps = dispatch => ({
  hideAddPostComponentModal: () => dispatch(hideAddPostComponentModal())
});

export default connect(mapStateToProps, mapDispatchToProps)(
  AddPostComponentModal
);
