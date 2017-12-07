import React from "react";
import styled from "styled-components";

import ChatMessage from "./ChatMessage";
import Card, { Header, Body, Footer } from "./Card";
import { Form, TextArea } from "./Form";
import { PrimaryButton } from "./Button";

const ChatMessagesPanelWrapper = Card.extend`
  height: auto;
  max-width: 100%;
  width: 1000px;
`;

const MessageWrapper = styled.div`
  text-align: ${p => (p.isMine ? "right" : "left")};
`;

const ChatMessageIndicator = ({
  creator,
  content,
  isBelongsToCurrentUser,
  id
}) =>
  isBelongsToCurrentUser ? (
    <MessageWrapper isMine>
      <ChatMessage key={id} creator={creator} content={content} />
    </MessageWrapper>
  ) : (
    <MessageWrapper>
      <ChatMessage key={id} creator={creator} content={content} />
    </MessageWrapper>
  );

const ChatMessagesPanel = () => (
  <ChatMessagesPanelWrapper>
    <Header>ห้องแชท</Header>
    <Body style={{ overflowY: "scroll", height: "550px" }}>
      {[0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0].map((n, i) => (
        <ChatMessageIndicator
          creator="tiravat"
          content="ฟหกฟหกฟหกฟหกฟหกฟหมกนาฟดรกหาดสฟมดยำดใยฟหกใดยสกฟฟดสกหยดสหกด"
          isBelongsToCurrentUser={n}
        />
      ))}
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
  </ChatMessagesPanelWrapper>
);

export default ChatMessagesPanel;
