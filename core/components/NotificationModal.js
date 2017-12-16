import React from "react";
import PropTypes from "prop-types";

import { ModalBackground, ModalPanel } from "./Modal";
import { Header, Body, Footer } from "./Card";
import { LightButton } from "./Button";
import { NotificationItem } from "./NotificationPanel";

const NotificationModal = () => (
  <ModalBackground show={true}>
    <ModalPanel large>
      <Header>การแจ้งเตือน</Header>
      <Body overflowY="scroll" height="600px">
        <NotificationItem
          origin="Introduction to Computer Science"
          content="ไสดมวไำดยสเนาฟบไำานดำฟสาดร่เพเาๆขนายำสกยบากนฟกานฟหากจๆไำาดชๆสยไำนด่ำไจาเ"
        />
        <NotificationItem
          origin="Computer Vision and Image Processing"
          content="ไสดมวไำดยสเนาฟบไำานดำฟสาดร่เพเาๆขนายำสกยบากนฟกานฟหากจๆไำาดชๆสยไำนด่ำไจาเ"
        />
        <NotificationItem
          origin="Chris Evans"
          content="ไสดมวไำดยสเนาฟบไำานดำฟสาดร่เพเาๆขนายำสกยบากนฟกานฟหากจๆไำาดชๆสยไำนด่ำไจาเ"
        />
        <NotificationItem
          origin="Introduction to Computer Science"
          content="ไสดมวไำดยสเนาฟบไำานดำฟสาดร่เพเาๆขนายำสกยบากนฟกานฟหากจๆไำาดชๆสยไำนด่ำไจาเ"
        />
        <NotificationItem
          origin="Programming with Python"
          content="ไสดมวไำดยสเนาฟบไำานดำฟสาดร่เพเาๆขนายำสกยบากนฟกานฟหากจๆไำาดชๆสยไำนด่ำไจาเ"
        />
        <NotificationItem
          origin="Introduction to Computer Science"
          content="ไสดมวไำดยสเนาฟบไำานดำฟสาดร่เพเาๆขนายำสกยบากนฟกานฟหากจๆไำาดชๆสยไำนด่ำไจาเ"
        />
      </Body>
      <Footer>
        <LightButton>ปิด</LightButton>
      </Footer>
    </ModalPanel>
  </ModalBackground>
);

export default NotificationModal;
