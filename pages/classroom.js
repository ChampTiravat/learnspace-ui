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
    margin-bottom: 0.3em;
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
  </ProfileInfoPanelCard>
);

class ClassroomPage extends React.Component {
  static getInitialProps = async ({ query: { id } }) => {
    console.log(id);
    return { classId: id, className: "Introduction to Computer Science" };
  };

  componentDidMount = () => console.log(this.props.classId);

  render() {
    return [
      <Head>
        <title>{this.props.className} | LEARNSPACE</title>
      </Head>,
      <AuthenticatedLayout>
        <NavigationBar isLoggedIn={true} />
        <Card
          style={{ position: "absolute", left: "0", maxWidth: "100%" }}
          padding="4.5em"
        />
        <Container style={{ marginTop: "7.5em" }}>
          <Panel left width="40">
            <ProfileInfoPanel />
          </Panel>
          <Panel right style={{ height: "850px" }} width="60">
            <ClassroomsList height="700px" />
          </Panel>
          <ActivityPanel />
        </Container>
      </AuthenticatedLayout>
    ];
  }
}

export default ClassroomPage;
