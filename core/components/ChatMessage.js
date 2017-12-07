import React from "react";
import styled from "styled-components";

import Card, { Header, Body, Footer } from "./Card";

const ChatMessageCreatorPic = styled.img`
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

const ChatMessageInfo = styled.div`
  padding-left: 5em;
`;

const Creator = styled.h4`
  color: ${p => p.theme.primaryColor};
  font-weight: 500;
  font-size: 1.1em;
  margin-bottom: 0;
`;

const Content = styled.p`
  margin: 0;
  color: #777;
  font-family: arial;
`;

const ChatMessageCard = Card.extend`
  display: inline-block;
  box-shadow: none;
  padding: 1em 1em 1.8em 1em;
  max-width: 450px;
  margin-bottom: 1em;
  &:hover {
    background: #f5f5f5;
  }
`;

const ChatMessage = ({ creator, content }) => (
  <ChatMessageCard>
    <ChatMessageCreatorPic />
    <ChatMessageInfo>
      <Creator>{creator}</Creator>
      <Content>{content}</Content>
    </ChatMessageInfo>
  </ChatMessageCard>
);

export default ChatMessage;
