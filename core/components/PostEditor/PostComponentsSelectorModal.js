import React from "react";
import PropTypes from "prop-types";

import { ModalBackground, ModalPanel } from "../Modal";
import PostComponentItem from "./PostComponentItem";
import { Header, Body, Footer } from "../Card";
import { DangerButton } from "../Button";
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
} from "../../constants/post-content/components";

/**
 * @name PostComponentsSelectorModal
 * @desc Showing a modal displaying post's components
 * @prop isComponentsSelectorModalShowing : is this modal showing
 * @prop hideComponentsSelectorModal  : dipatch an action to hide this modal
 * @prop showAddPostComponentModal : Display a modal to enter an essential information to create a modal
 */
class PostComponentsSelectorModal extends React.Component {
  render() {
    const {
      isComponentsSelectorModalShowing,
      hideComponentsSelectorModal,
      showAddPostComponentModal
    } = this.props;
    return (
      <ModalBackground show={isComponentsSelectorModalShowing}>
        <ModalPanel large>
          <Header>เลือกส่วนประกอบที่ต้องการ</Header>
          <Body height="470px" style={{ textAlign: "center" }}>
            <PostComponentItem
              onClick={() => showAddPostComponentModal(HEADING)}
              name="หัวข้อเรื่อง"
            />
            <PostComponentItem
              onClick={() => showAddPostComponentModal(SUB_HEADING)}
              name="หัวข้อย่อย"
            />
            <PostComponentItem
              onClick={() => showAddPostComponentModal(PARAGRAPH)}
              name="ย่อหน้า"
            />
            <PostComponentItem
              onClick={() => showAddPostComponentModal(IMAGE)}
              name="รุปภาพ"
            />
            <PostComponentItem
              onClick={() => showAddPostComponentModal(VIDEO)}
              name="วิดีโอ"
            />
            <PostComponentItem
              onClick={() => showAddPostComponentModal(MAP)}
              name="แผนที่"
            />
            <PostComponentItem
              onClick={() => showAddPostComponentModal(TABLE)}
              name="ตาราง"
            />

            <PostComponentItem
              onClick={() => showAddPostComponentModal(SLIDE_SHOW)}
              name="สไลด์รูปภาพ"
            />
            <PostComponentItem
              onClick={() => showAddPostComponentModal(ATTACHMENT)}
              name="ไฟล์แนบ"
            />
            <PostComponentItem
              onClick={() => showAddPostComponentModal(LIST)}
              name="รายการ"
            />
          </Body>
          <Footer>
            <DangerButton
              textCenter
              onClick={() => hideComponentsSelectorModal()}
            >
              ยกเลิก
            </DangerButton>
          </Footer>
        </ModalPanel>
      </ModalBackground>
    );
  }
}

PostComponentsSelectorModal.propTypes = {
  isComponentsSelectorModalShowing: PropTypes.bool.isRequired,
  hideComponentsSelectorModal: PropTypes.func.isRequired,
  showAddPostComponentModal: PropTypes.func.isRequired
};

export default PostComponentsSelectorModal;
