import React from "react";
import styled from "styled-components";
import Head from "next/head";

import Card, { Header, Body, Footer } from "../core/components/Card";
import { Form, TextArea } from "../core/components/Form";
import { PrimaryButton } from "../core/components/Button";
import AuthenticatedLayout from "../core/components/AuthenticatedLayout";
import NavigationBar from "../core/components/NavigationBar";
import Container from "../core/components/Container";
import Panel from "../core/components/Panel";
import UserConnectionStatusPanel from "../core/components/UserConnectionStatusPanel";
import ActivityPanel from "../core/components/ActivityPanel";

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
  &:hover {
    background: #f5f5f5;
  }
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

const ChatroomModal = () => [
  <Head>
    <title>ห้องแชท | LEARNSPACE</title>
  </Head>,
  <AuthenticatedLayout>
    <NavigationBar isLoggedIn={true} />
    <Container>
      <Panel left width="40">
        <UserConnectionStatusPanel />
      </Panel>
      <Panel right width="60">
        <Card
          style={{
            height: "auto",
            maxWidth: "100%",
            width: "1000px"
          }}
        >
          <Header>ห้องแชท</Header>
          <Body style={{ overflowY: "scroll", height: "550px" }}>
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
          <Footer>
            <Form>
              <TextArea
                style={{ marginBottom: "1em", width: "100%", height: "50px" }}
              />
              <PrimaryButton textCenter fluidWidth>
                ส่ง
              </PrimaryButton>
            </Form>
          </Footer>
        </Card>
      </Panel>
      <ActivityPanel />
    </Container>
  </AuthenticatedLayout>
];

export default ChatroomModal;
