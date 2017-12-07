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
import ChatMessage from "../core/components/ChatMessage";
import ActivityPanel from "../core/components/ActivityPanel";

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
                    <ChatMessage
                      key={i}
                      creator="tiravat"
                      content="ฟหกฟหกฟหกฟหกฟหกฟหมกนาฟดรกหาดสฟมดยำดใยฟหกใดยสกฟหยกสฟหดสกฟหยดสกหฟดสยกหสดยกหสฟดยสกหยดสหยฟสดยกหสดยสกหฟยดสกหยฟดสกหยฟดสกหยดสหกด"
                    />
                  </div>
                ) : (
                  <div style={{ textAlign: "left" }}>
                    <ChatMessage
                      key={i}
                      creator="tiravat"
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
