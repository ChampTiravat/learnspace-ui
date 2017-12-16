import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { ModalBackground, ModalPanel } from "..//Modal";
import { PrimaryButton, LightButton } from "../Button";
import { Header, Body, Footer } from "../Card";
import {
  showPostRemovalConfirmationModal,
  hidePostRemovalConfirmationModal
} from "../../actions/post-page-actions";

/**
 * @name PostRemovalConfirmationModal
 * @desc A modal prompts for post removal confirmation
 * @prop isShowing : State of the modal(is displaying or not)
 * @prop showPostRMModal : Show the modal
 * @prop hidePostRMModal : Hide the modal
 */
const PostRemovalConfirmationModal = ({
  isShowing,
  showPostRMModal,
  hidePostRMModal
}) => (
  <ModalBackground show={isShowing}>
    <ModalPanel large>
      <Header>ยืนยันการดำเนินการ</Header>
      <Body style={{ color: "#777", fontSize: "1.2em", textAlign: "center" }}>
        การกระทำนี้ไม่สามารถย้อนกลับได้ และคุณจะสูญเสียข้อมูลทั้งหมดของโพสนี้
        คุณต้องการดำเนินการต่อหรอไม่
      </Body>
      <Footer>
        <PrimaryButton marginRight="0.5em">ยืนยัน</PrimaryButton>
        <LightButton onClick={() => hidePostRMModal()}>ยกเลิก</LightButton>
      </Footer>
    </ModalPanel>
  </ModalBackground>
);

PostRemovalConfirmationModal.propTypes = {
  isShowing: PropTypes.bool.isRequired,
  showPostRMModal: PropTypes.func.isRequired,
  hidePostRMModal: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  isShowing: state.postRemovalConfirmationModal
});

const mapDispatchToProps = dispatch => ({
  showPostRMModal: () => dispatch(showPostRemovalConfirmationModal()),
  hidePostRMModal: () => dispatch(hidePostRemovalConfirmationModal())
});

export default connect(mapStateToProps, mapDispatchToProps)(
  PostRemovalConfirmationModal
);
