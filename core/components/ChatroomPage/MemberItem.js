import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import Card from "../Card";

const UserConnectionStatusCard = Card.extend`
  box-shadow: none;
  padding: 1em 1em 1.8em 1em;
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

/**
 * @name UserConnectionStatusPanel
 * @desc Displaying classroom member and their online status
 * @prop username : member's username
 * @prop isOnline : does the member is currently in the chatroom
 */
const MemberItem = ({ username, isOnline }) => (
  <UserConnectionStatusCard>
    <UserConnectionStatusPic status={isOnline} />
    <div>
      <Username>{username}</Username>
      {isOnline ? (
        <OnlineText>กำลังใช้งานอยู่</OnlineText>
      ) : (
        <OfflineText>ออฟใลน์</OfflineText>
      )}
    </div>
  </UserConnectionStatusCard>
);

MemberItem.propTypes = {
  username: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired
};

export default MemberItem;
