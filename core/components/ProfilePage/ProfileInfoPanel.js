import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { Button } from "../Button";
import Card from "../Card";

const Seperator = styled.div`
  width: 40%;
  height: 2px;
  background-color: ${p => p.theme.PRIMARY_COLOR};
  margin: 1em auto;
`;

const UserInfoItem = styled.h4`
  color: #777;
  font-size: 1.1em;
  font-weight: 400;
  margin-bottom: 0.3em;
`;

const UserFullName = styled.h1`
  color: ${p => p.theme.PRIMARY_COLOR};
  font-weight: 400;
`;

const ProfileInfoDetails = styled.div`
  margin-bottom: 2em;
`;

const ProfileInfoContainer = styled.div`
  padding: 3.5em 2em;
  text-align: center;
`;

const ProfileInfoPanelCard = Card.extend`
  margin: 1.5em auto 0 auto;
  height: 650px;
  max-width: 480px;
`;

const ProfileImage = styled.img`
  display: block;
  width: 100%;
  height: 250px;
  background-color: #cbcbcb;
`;

/**
 * @name ProfileInfoPanel
 * @desc Display individial user specific information
 * @prop realName : user's real firstname contactinated with his/her lastname
 * @prop username : user's username
 * @prop email : user's email
 * @prop location : user's location(not required)
 * @prop career : user's occupation(not required)
 */
const ProfileInfoPanel = ({
  realName = "Tony Stark",
  username = "IRONMAN2007",
  email = "ironman@marvel.com",
  location = "กรุงเทพฯ",
  career = "วิศวะกร"
}) => (
  <ProfileInfoPanelCard>
    <ProfileImage />
    <ProfileInfoContainer>
      <ProfileInfoDetails>
        <UserFullName>{realName}</UserFullName>
        <Seperator />
        <UserInfoItem>ชื่อผู้ใช้ : {username}</UserInfoItem>
        <UserInfoItem>อีเมลล์ : {email}</UserInfoItem>
        <UserInfoItem>ที่อยู่ : {location}</UserInfoItem>
        <UserInfoItem>อาชีพ : {career}</UserInfoItem>
      </ProfileInfoDetails>
      <Button primary>ส่งข้อความ</Button>
    </ProfileInfoContainer>
  </ProfileInfoPanelCard>
);

ProfileInfoPanel.propTypes = {
  realName: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  location: PropTypes.string,
  career: PropTypes.string
};

export default ProfileInfoPanel;
