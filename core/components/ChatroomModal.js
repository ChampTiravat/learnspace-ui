import React from "react";
import styled from "styled-components";

import { ModalBackground, ModalPanel } from "./Modal";
import Card, { Header, Body } from "./Card";
import { Form, TextArea } from "./Form";
import { PrimaryButton } from "./Button";

const NotificationPanelCard = Card.extend`
  height: 700px;
  padding-bottom: 2em;
`;

const NotificationOriginPic = styled.img`
  display: inline-block;
  float: left;
  width: 60px;
  height: 60px;
  border: none;
  border-radius: 50%;
  background-color: #ccc;
  margin-right: 1.5em;
`;

const NotificationInfo = styled.div`
  h4 {
    color: ${p => p.theme.primaryColor};
    font-weight: 500;
    font-size: 1.1em;
    margin-bottom: 0;
  }
  p {
    margin: 0;
    color: #777;
  }
`;

const NotificationCard = Card.extend`
  box-shadow: none;
  padding: 1em 1em 1.8em 1em;
  background: red;
  max-width: 400px;
  position: absolute;
`;

const NotificationItem = ({ origin, content }) => (
  <NotificationCard>
    <NotificationOriginPic />
    <NotificationInfo>
      <h4>{origin}</h4>
      <p>{content}</p>
    </NotificationInfo>
  </NotificationCard>
);

const ChatroomModal = () => (
  <ModalBackground show={true}>
    <Card style={{ marginTop: "5em", height: "500px", maxWidth: "1000px" }}>
      <Header>แชทรวม</Header>
      <Body style={{ overflowY: "scroll", height: "400px" }}>
        {[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0].map((n, i) => (
          <NotificationItem
            key={i}
            origin="tiravat"
            content="ฟหกฟหกฟหกฟหกฟหกฟหมกนาฟดรกหาดสฟมดยำดใยฟหกใดยสกฟหยกสฟหดสกฟหยดสกหฟดสยกหสดยกหสฟดยสกหยดสหยฟสดยกหสดยสกหฟยดสกหยฟดสกหยฟดสกหยดสหกด"
          />
        ))}
      </Body>
    </Card>
    <Card large style={{ width: "700px", margin: "1em auto" }}>
      <Body>
        <Form>
          <TextArea
            style={{ marginBottom: "1em", width: "100%", height: "100px" }}
          />
          <PrimaryButton textCenter fluidWidth>
            ส่ง
          </PrimaryButton>
        </Form>
      </Body>
    </Card>
  </ModalBackground>
);

export default ChatroomModal;
