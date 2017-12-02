import React from "react";
import Head from "next/head";
import styled from "styled-components";

import AuthenticatedLayout from "../core/components/AuthenticatedLayout";
import Card from "../core/components/Card";
import { PrimaryButton } from "../core/components/Button";
import NavigationBar from "../core/components/NavigationBar";
import Container from "../core/components/Container";
import ClassroomsList from "../core/components/ClassroomsList";
import Panel from "../core/components/Panel";
import ActivityPanel from "../core/components/ActivityPanel";
import ProfileInfoPanel from "../core/components/ProfileInfoPanel";
import withData from "../core/withData";

const ProfileInfoContainer = styled.div`
  padding: 3.5em 2em;
  text-align: center;
`;

const ProfileInfoDetails = styled.div`
  margin-bottom: 2em;
`;

const UserFullName = styled.h1`
  color: ${p => p.theme.primaryColor};
  font-weight: 400;
`;
const UserInfoItem = styled.h4`
  color: #777;
  font-size: 1.1em;
  font-weight: 400;
  margin-bottom: 0.3em;
`;

const Seperator = styled.div`
  width: 40%;
  height: 2px;
  background-color: ${p => p.theme.primaryColor};
  margin: 1em auto;
`;

const ProfilePage = () => [
  <Head>
    <title>tiravat thaisubvorakul | LEARNSPACE</title>
  </Head>,
  <AuthenticatedLayout>
    <NavigationBar isLoggedIn={true} />
    <Container>
      <Panel left width="40">
        <ProfileInfoPanel>
          <ProfileInfoContainer>
            <ProfileInfoDetails>
              <UserFullName>Tony Stark</UserFullName>
              <Seperator />
              <UserInfoItem>ชื่อผู้ใช้ : IRONMAN2007</UserInfoItem>
              <UserInfoItem>อีเมลล์ : ironman@marvel.com</UserInfoItem>
              <UserInfoItem>ที่อยู่ : กรุงเทพฯ</UserInfoItem>
              <UserInfoItem>อาชีพ : วิศวะกร</UserInfoItem>
            </ProfileInfoDetails>
            <PrimaryButton>ส่งข้อความ</PrimaryButton>
          </ProfileInfoContainer>
        </ProfileInfoPanel>
      </Panel>
      <Panel right width="60">
        <ClassroomsList height="700px" />
      </Panel>
      <ActivityPanel />
    </Container>
  </AuthenticatedLayout>
];

export default withData(ProfilePage);
