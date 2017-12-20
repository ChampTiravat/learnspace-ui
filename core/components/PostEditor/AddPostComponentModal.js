import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import SlideShow from "./PostComponents/EditableComponents/SlideShow";
import Heading from "./PostComponents/EditableComponents/Heading";
import Table from "./PostComponents/EditableComponents/Table";
import Image from "./PostComponents/EditableComponents/Image";
import BasedComponent from "./PostComponents/BasedComponent";
import Map from "./PostComponents/EditableComponents/Map";
import { SuccessButton, DangerButton } from "../Button";
import { ModalBackground, ModalPanel } from "../Modal";
import { Header, Body, Footer } from "../Card";
import {
  SLIDE_SHOW,
  PARAGRAPH,
  HEADING,
  TABLE,
  IMAGE,
  VIDEO,
  MAP
} from "../../constants/post-content/components";

import { hideAddPostComponentModal } from "../../actions/post-editor-actions";

class AddPostComponentModal extends React.Component {
  renderComponentToAdd = type => {
    switch (type) {
      case SLIDE_SHOW:
        return <SlideShow />;
      case PARAGRAPH:
        return "";
      case HEADING:
        return <Heading />;
      case TABLE:
        return <Table />;
      case IMAGE:
        return <Image />;
      case VIDEO:
        return "";
      case MAP:
        return <Map />;
    }
  };

  render() {
    const {
      type = HEADING,
      isAddPostComponentModalShowing,
      hideAddPostComponentModal
    } = this.props;
    return (
      <ModalBackground show={isAddPostComponentModalShowing}>
        <ModalPanel large>
          <Header>รูปภาพ</Header>
          {this.renderComponentToAdd(type)}
          <Footer>
            <SuccessButton>เสร็จสิ้น</SuccessButton>
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
  isAddPostComponentModalShowing: state.isAddPostComponentModalShowing
});
const mapDispatchToProps = dispatch => {
  hideAddPostComponentModal: () => dispatch(hideAddPostComponentModal());
};

export default connect(mapStateToProps, mapDispatchToProps)(
  AddPostComponentModal
);
