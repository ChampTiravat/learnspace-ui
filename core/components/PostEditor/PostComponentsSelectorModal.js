import React from "react";
import PropTypes from "prop-types";

import { ModalBackground, ModalPanel } from "../Modal";
import PostComponentItem from "./PostComponentItem";
import { Header, Body, Footer } from "../Card";
import { Button } from "../Button";
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

    const components = [
      { type: HEADING, name: "หัวข้อเรื่อง" },
      { type: SUB_HEADING, name: "หัวข้อย่อย" },
      { type: PARAGRAPH, name: "ย่อหน้า" },
      { type: IMAGE, name: "รุปภาพ" },
      { type: LIST, name: "รายการ" },
      { type: VIDEO, name: "วิดีโอ" },
      { type: MAP, name: "แผนที่" },
      { type: TABLE, name: "ตาราง" },
      { type: SLIDE_SHOW, name: "สไลด์รูปภาพ" },
      { type: ATTACHMENT, name: "ไฟล์แนบ" }
    ];

    return (
      <ModalBackground show={isComponentsSelectorModalShowing}>
        <ModalPanel large>
          <Header>เลือกส่วนประกอบที่ต้องการ</Header>
          <Body height="470px" style={{ textAlign: "center" }}>
            {components.map((component, i) => (
              <PostComponentItem
                key={i}
                onClick={() => showAddPostComponentModal(component.type)}
                name={component.name}
              />
            ))}
          </Body>
          <Footer>
            <Button
              light
              textCenter
              onClick={() => hideComponentsSelectorModal()}
            >
              ยกเลิก
            </Button>
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
