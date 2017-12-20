import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { hidePostComponentsSelectorModal } from "../../actions/post-editor-actions";
import { ModalBackground, ModalPanel } from "../Modal";
import Card, { Header, Body, Footer } from "../Card";
import PostComponentItem from "./PostComponentItem";
import { DangerButton } from "../Button";

/**
 * @name PostComponentsSelectorModal
 * @desc Showing a modal displaying post's components
 * @prop [REDUX] isPostComponentsSelectorModalShowing : is this modal showing
 * @prop [REDUX] hideThisPostComponentsSelectorModal  : dipatch an action to hide this modal
 */
class PostComponentsSelectorModal extends React.Component {
  render() {
    const {
      isPostComponentsSelectorModalShowing,
      hideThisPostComponentsSelectorModal
    } = this.props;
    return (
      <ModalBackground show={isPostComponentsSelectorModalShowing}>
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
            <DangerButton
              textCenter
              onClick={() => hideThisPostComponentsSelectorModal()}
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
  isPostComponentsSelectorModalShowing: PropTypes.bool.isRequired,
  hideThisPostComponentsSelectorModal: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  isPostComponentsSelectorModalShowing:
    state.isPostComponentsSelectorModalShowing
});

const mapDispatchToProps = dispatch => ({
  hideThisPostComponentsSelectorModal: () =>
    dispatch(hidePostComponentsSelectorModal())
});

export default connect(mapStateToProps, mapDispatchToProps)(
  PostComponentsSelectorModal
);
