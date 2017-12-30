import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { ModalBackground, ModalPanel } from "../Modal";
import { Header, Body, Footer } from "../Card";
import { LightButton } from "../Button";
import {
  showChatroomModal,
  hideChatroomModal
} from "../../actions/chatroom-modal-actions";

const ChatroomModal = ({ isModalShowing, showModal, hideModal }) => (
  <ModalBackground show={isModalShowing}>
    <ModalPanel large>
      <Header>ข้อความที่ส่งถึงคุณ</Header>
      <Body overflowY="scroll" height="600px">
        {/* {}  */}
      </Body>
      <Footer>
        <LightButton onClick={() => hideModal()}>ปิด</LightButton>
      </Footer>
    </ModalPanel>
  </ModalBackground>
);

const mapStateToProps = state => ({
  isModalShowing: state.chatroomModal
});

const mapDispatchToProps = dispatch => ({
  showModal: () => dispatch(showChatroomModal()),
  hideModal: () => dispatch(hideChatroomModal())
});

export default connect(mapStateToProps, mapDispatchToProps)(ChatroomModal);
