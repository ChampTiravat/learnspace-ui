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
import withData from "../core/withData";

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

const ProfileInfoContainer = styled.div`
  padding: 3.5em 2em;
  text-align: center;
`;

const ProfileInfoDetails = styled.div`
  margin-bottom: 2em;
  h1 {
    color: ${p => p.theme.primaryColor};
    font-weight: 400;
  }
  h4 {
    color: #777;
    font-size: 1.1em;
    font-weight: 400;
  }
`;

const Seperator = styled.div`
  width: 40%;
  height: 2px;
  background-color: ${p => p.theme.primaryColor};
  margin: 1em auto;
`;

const ProfileInfoPanel = () => (
  <ProfileInfoPanelCard>
    <ProfileImage />
    <ProfileInfoContainer>
      <ProfileInfoDetails>
        <h1>Tony Stark</h1>
        <Seperator />
        <h4>ชื่อผู้ใช้ : IRONMAN2007</h4>
        <h4>อีเมลล์ : ironman@marvel.com</h4>
        <h4>ที่อยู่ : กรุงเทพฯ</h4>
        <h4>อาชีพ : วิศวะกร</h4>
      </ProfileInfoDetails>
      <PrimaryButton>ส่งข้อความ</PrimaryButton>
    </ProfileInfoContainer>
  </ProfileInfoPanelCard>
);

const ProfilePage = () => [
  <Head>
    <title>tiravat thaisubvorakul | LEARNSPACE</title>
  </Head>,
  <AuthenticatedLayout>
    <NavigationBar isLoggedIn={true} />
    <Container>
      <Panel left width="40">
        <ProfileInfoPanel />
      </Panel>
      <Panel right width="60">
        <ClassroomsList height="700px" />
      </Panel>
      <ActivityPanel />
    </Container>
  </AuthenticatedLayout>
];

export default withData(ProfilePage);
