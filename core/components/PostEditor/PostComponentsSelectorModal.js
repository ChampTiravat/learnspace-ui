import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { hidePostComponentsSelectorModal } from "../../actions/post-editor-actions";
import { ModalBackground, ModalPanel } from "../Modal";
import Card, { Header, Body, Footer } from "../Card";
import PostComponentItem from "./PostComponentItem";
import { DangerButton } from "../Button";

import { showAddPostComponentModal } from "../../actions/post-editor-actions";

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
      hideThisPostComponentsSelectorModal,
      showAddPostComponentModal
    } = this.props;
    return (
      <ModalBackground show={isPostComponentsSelectorModalShowing}>
        <ModalPanel large>
          <Header>เลือกส่วนประกอบที่ต้องการ</Header>
          <Body height="470px" style={{ textAlign: "center" }}>
            <PostComponentItem onClick={showAddPostComponentModal}>
              หัวข้อเรื่อง
            </PostComponentItem>
            <PostComponentItem onClick={showAddPostComponentModal}>
              หัวข้อย่อย
            </PostComponentItem>
            <PostComponentItem onClick={showAddPostComponentModal}>
              ย่อหน้า
            </PostComponentItem>
            <PostComponentItem onClick={showAddPostComponentModal}>
              รุปภาพ
            </PostComponentItem>
            <PostComponentItem onClick={showAddPostComponentModal}>
              วิดีโอ
            </PostComponentItem>
            <PostComponentItem onClick={showAddPostComponentModal}>
              แผนที่
            </PostComponentItem>
            <PostComponentItem onClick={showAddPostComponentModal}>
              ตาราง
            </PostComponentItem>
            <PostComponentItem onClick={showAddPostComponentModal}>
              สไลด์รูปภาพ
            </PostComponentItem>
            <PostComponentItem onClick={showAddPostComponentModal}>
              ไฟล์แนบ
            </PostComponentItem>
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
  hideThisPostComponentsSelectorModal: PropTypes.func.isRequired,
  showAddPostComponentModal: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  isPostComponentsSelectorModalShowing:
    state.isPostComponentsSelectorModalShowing
});

const mapDispatchToProps = dispatch => ({
  hideThisPostComponentsSelectorModal: () =>
    dispatch(hidePostComponentsSelectorModal()),
  showAddPostComponentModal: () => dispatch(showAddPostComponentModal())
});

export default connect(mapStateToProps, mapDispatchToProps)(
  PostComponentsSelectorModal
);
