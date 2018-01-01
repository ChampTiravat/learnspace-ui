import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import Card, { Header, Body, Footer } from "../Card";
import { Form, TextArea } from "../Form";
import ChatMessage from "./ChatMessage";
import { Button } from "../Button";

const ChatMessagesPanelWrapper = Card.extend`
  height: auto;
  max-width: 100%;
  width: 1000px;
`;

const MessageWrapper = styled.div`
  text-align: ${p => (p.isMine ? "right" : "left")};
`;

/**
 * @name ChatMessageIndicator
 * @desc Determine wether to intent the message to the left or the right depending on which message is belong the the current user or not
 * @prop creator : Owner of the particular message
 * @prop content : Chat message body
 * @prop isBelongsToCurrentUser : Does this message belong the the current user?
 * @prop id : Chatmessage ID
 */
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

ChatMessageIndicator.propTypes = {
  creator: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  isBelongsToCurrentUser: PropTypes.bool.isRequired,
  id: PropTypes.string.isRequired
};

/**
 * @name ChatMessagesPanel
 * @desc Display chat messages and a form to send a new message
 */
const ChatMessagesPanel = () => (
  <ChatMessagesPanelWrapper>
    <Header>ห้องแชท</Header>
    <Body style={{ overflowY: "scroll", height: "550px" }}>
      {[0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0].map((n, i) => (
        <ChatMessageIndicator
          creator="tiravat"
          content="ฟหกฟหกฟหกฟหกฟหกฟหมกนาฟดรกหาดสฟมดยำดใยฟหกใดยสกฟฟดสกหยดสหกด"
          isBelongsToCurrentUser={n}
          id={i}
          key={i}
        />
      ))}
    </Body>
    <Footer>
      <Form>
        <TextArea
          style={{ marginBottom: "1em", width: "100%", height: "50px" }}
        />
        <Button primary textCenter fluidWidth>
          ส่ง
        </Button>
      </Form>
    </Footer>
  </ChatMessagesPanelWrapper>
);

export default ChatMessagesPanel;
