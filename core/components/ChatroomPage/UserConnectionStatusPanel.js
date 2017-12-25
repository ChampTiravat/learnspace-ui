import React from "react";

import Card, { Header, Body } from "../Card";
import MemberItem from "./MemberItem";

const UserStatusPanelCard = Card.extend`
  height: 700px;
  padding-bottom: 2em;
`;

/**
 * @name UserConnectionStatusPanel
 * @desc Displaying classroom member and their online status
 */
const UserConnectionStatusPanel = () => (
  <UserStatusPanelCard>
    <Header>สมาชิกที่ออนใลน์อยู่</Header>
    <Body overflowY="scroll" height="600px">
      <MemberItem username="Tony Stark" isOnline={true} />
      <MemberItem username="Chris Evans" isOnline={false} />
      <MemberItem username="Scarlett Johanson" isOnline={true} />
      <MemberItem username="Tom Holland" isOnline={false} />
      <MemberItem username="Chris Patt" isOnline={true} />
      <MemberItem username="Samuel Jackson" isOnline={true} />
      <MemberItem username="Scarlett Johanson" isOnline={true} />
      <MemberItem username="Tom Holland" isOnline={false} />
      <MemberItem username="Chris Patt" isOnline={true} />
      <MemberItem username="Samuel Jackson" isOnline={true} />
    </Body>
  </UserStatusPanelCard>
);

export default UserConnectionStatusPanel;
