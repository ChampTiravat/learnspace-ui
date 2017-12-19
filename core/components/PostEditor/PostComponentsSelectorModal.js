import React from "react";
import PropTypes from "prop-types";

import Card, { Header, Body, Footer } from "../Card";
import { DangerButton } from "../Button";
import { ModalBackground, ModalPanel } from "../Modal";
import PostComponentItem from "./PostComponentItem";

/**
 * @name PostComponentsSelectorModal
 * @desc Showing a modal displaying post's components
 * @prop show : showing the modal or not
 */
class PostComponentsSelectorModal extends React.Component {
  render() {
    const { show } = this.props;
    return (
      <ModalBackground show={show}>
        <ModalPanel large>
          <Header>เลือกส่วนประกอบที่ต้องการ</Header>
          <Body height="470px" style={{ textAlign: "center" }}>
            <PostComponentItem>หัวข้อเรื่อง</PostComponentItem>
            <PostComponentItem>หัวข้อย่อย</PostComponentItem>
            <PostComponentItem>ย่อหน้า</PostComponentItem>
            <PostComponentItem>รุปภาพ</PostComponentItem>
            <PostComponentItem>วิดีโอ</PostComponentItem>
            <PostComponentItem>แผนที่</PostComponentItem>
            <PostComponentItem>ตาราง</PostComponentItem>
            <PostComponentItem>สไลด์รูปภาพ</PostComponentItem>
            <PostComponentItem>ไฟล์แนบ</PostComponentItem>
          </Body>
          <Footer>
            <DangerButton textCenter>ยกเลิก</DangerButton>
          </Footer>
        </ModalPanel>
      </ModalBackground>
    );
  }
}

PostComponentsSelectorModal.propTypes = {
  show: PropTypes.bool.isRequired
};

export default PostComponentsSelectorModal;
