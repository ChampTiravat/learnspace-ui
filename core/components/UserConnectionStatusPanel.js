import React from "react";
import styled from "styled-components";

import Card, { Header, Body } from "./Card";

const UserStatusPanelCard = Card.extend`
  height: 700px;
  padding-bottom: 2em;
`;

const UserConnectionStatusPic = styled.img`
  display: inline-block;
  float: left;
  width: 60px;
  height: 60px;
  border: ${p => (p.status ? "2px solid #4db6ac" : "none")};
  border-radius: 50%;
  background-color: #ccc;
  margin-right: 1.5em;
`;

const UserConnectionStatusInfo = styled.div``;

const Username = styled.h4`
  color: ${p => p.theme.primaryColor};
  font-weight: 500;
  font-size: 1.1em;
  margin-bottom: 0;
`;

const OfflineText = styled.p`
  margin: 0;
  color: #777;
`;

const OnlineText = styled.p`
  margin: 0;
  color: #4db6ac;
`;

const UserConnectionStatusCard = Card.extend`
  box-shadow: none;
  padding: 1em 1em 1.8em 1em;
`;

const NotificationItem = ({ username, status }) => (
  <UserConnectionStatusCard>
    <UserConnectionStatusPic status={status} />
    <UserConnectionStatusInfo>
      <Username>{username}</Username>
      {status ? (
        <OnlineText>กำลังใช้งานอยู่</OnlineText>
      ) : (
        <OfflineText>ออฟใลน์</OfflineText>
      )}
    </UserConnectionStatusInfo>
  </UserConnectionStatusCard>
);

const UserConnectionStatusPanel = () => (
  <UserStatusPanelCard>
    <Header>สมาชิกที่ออนใลน์อยู่</Header>
    <Body overflowY="scroll" height="600px">
      <NotificationItem username="Tony Stark" status={true} />
      <NotificationItem username="Chris Evans" status={false} />
      <NotificationItem username="Scarlett Johanson" status={true} />
      <NotificationItem username="Tom Holland" status={false} />
      <NotificationItem username="Chris Patt" status={true} />
      <NotificationItem username="Samuel Jackson" status={true} />
      <NotificationItem username="Scarlett Johanson" status={true} />
      <NotificationItem username="Tom Holland" status={false} />
      <NotificationItem username="Chris Patt" status={true} />
      <NotificationItem username="Samuel Jackson" status={true} />
    </Body>
  </UserStatusPanelCard>
);

export default UserConnectionStatusPanel;
