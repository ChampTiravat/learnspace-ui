import React from "react";
import PropTypes from "prop-types";

import { ModalBackground, ModalPanel } from "..//Modal";
import { PrimaryButton, LightButton } from "../Button";
import { Header, Body, Footer } from "../Card";

/**
 * @name PostRemovalConfirmationModal
 * @desc A modal prompts for post removal confirmation
 * @prop isPostRMModalShowing : State of the modal(is displaying or not)
 * @prop hidePostRMModal : Hide the modal
 */
const PostRemovalConfirmationModal = ({
  isPostRMModalShowing,
  hidePostRMModal
}) => (
  <ModalBackground show={isPostRMModalShowing}>
    <ModalPanel large>
      <Header>ยืนยันการดำเนินการ</Header>
      <Body style={{ color: "#777", fontSize: "1em", textAlign: "center" }}>
        การกระทำนี้ไม่สามารถย้อนกลับได้ และคุณจะสูญเสียข้อมูลทั้งหมดของโพสนี้
        คุณต้องการดำเนินการต่อหรือไม่
      </Body>
      <Footer>
        <PrimaryButton marginRight="0.5em">ยืนยัน</PrimaryButton>
        <LightButton onClick={() => hidePostRMModal()}>ยกเลิก</LightButton>
      </Footer>
    </ModalPanel>
  </ModalBackground>
);

PostRemovalConfirmationModal.propTypes = {
  isPostRMModalShowing: PropTypes.bool.isRequired,
  hidePostRMModal: PropTypes.func.isRequired
};

export default PostRemovalConfirmationModal;
