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
  margin-top: 0.5em;
`;

const NotificationInfo = styled.div`
  padding-left: 5em;
  h4 {
    color: ${p => p.theme.primaryColor};
    font-weight: 500;
    font-size: 1.1em;
    margin-bottom: 0;
  }
  p {
    margin: 0;
    color: #777;
    font-family: arial;
  }
`;

const NotificationCard = Card.extend`
  display: inline-block;
  box-shadow: none;
  padding: 1em 1em 1.8em 1em;
  max-width: 450px;
  margin-bottom: 1em;
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
    <Card
      style={{
        marginTop: "5em",
        height: "600px",
        maxWidth: "100%",
        width: "1000px"
      }}
    >
      <Header>แชทรวม</Header>
      <Body
        style={{ overflowY: "scroll", height: "520px", background: "#eee" }}
      >
        {[0, 1, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0].map(
          (n, i) =>
            n === 1 ? (
              <div style={{ textAlign: "right" }}>
                <NotificationItem
                  key={i}
                  origin="tiravat"
                  content="ฟหกฟหกฟหกฟหกฟหกฟหมกนาฟดรกหาดสฟมดยำดใยฟหกใดยสกฟหยกสฟหดสกฟหยดสกหฟดสยกหสดยกหสฟดยสกหยดสหยฟสดยกหสดยสกหฟยดสกหยฟดสกหยฟดสกหยดสหกด"
                />
              </div>
            ) : (
              <div style={{ textAlign: "left" }}>
                <NotificationItem
                  key={i}
                  origin="tiravat"
                  content="ฟหกฟหกฟหกฟหกฟหกฟหมกนาฟดรกหาดสฟมดยำดใยฟหกใดยสกฟหยกสฟหดสกฟหยดสกหฟดสยกหสดยกหสฟดยสกหยดสหยฟสดยกหสดยสกหฟยดสกหยฟดสกหยฟดสกหยดสหกด"
                />
              </div>
            )
        )}
      </Body>
    </Card>
    <Card style={{ maxWidth: "100%", width: "1000px", margin: "1em auto" }}>
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
