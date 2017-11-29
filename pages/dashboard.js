import React from "react";
import Head from "next/head";
import styled from "styled-components";

import AuthenticatedLayout from "../core/components/AuthenticatedLayout";
import Card, { Header, Body } from "../core/components/Card";
import NavigationBar from "../core/components/NavigationBar";
import Container from "../core/components/Container";
import Wallpaper from "../core/components/Wallpaper";
import ActivityPanel from "../core/components/ActivityPanel";
import withData from "../core/withData";

const Panel = styled.div`
  display: inline-block;
  width: ${p => p.width}%;
  height: 100%;
`;

const ClassroomProfilePic = styled.div`
  padding: 1.5em;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background-color: #c8c8c8;
  position: absolute;
  margin-top: -7.5em;
  margin-left: 34em;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
`;

class DashboardPage extends React.Component {
  render() {
    return [
      <Head>
        <title>หน้าหลัก | LEARNSPACE</title>
      </Head>,
      <AuthenticatedLayout>
        <NavigationBar isLoggedIn={true} />
        <Container>
          <Panel
            width="40"
            style={{
              backgroundColor: "",
              float: "left"
            }}
          >
            <Card style={{ height: "60%" }}>
              <Header>การแจ้งเตือน</Header>
              <Body style={{ height: "580px", overflowY: "scroll" }}>
                <Card padding="1em">dasdasdasd</Card>
                <Card padding="1em">dasdasdasd</Card>
                <Card padding="1em">dasdasdasd</Card>
                <Card padding="1em">dasdasdasd</Card>
                <Card padding="1em">dasdasdasd</Card>
                <Card padding="1em">dasdasdasd</Card>
                <Card padding="1em">dasdasdasd</Card>
                <Card padding="1em">dasdasdasd</Card>
                <Card padding="1em">dasdasdasd</Card>
                <Card padding="1em">dasdasdasd</Card>
                <Card padding="1em">dasdasdasd</Card>
                <Card padding="1em">dasdasdasd</Card>
                <Card padding="1em">dasdasdasd</Card>
                <Card padding="1em">dasdasdasd</Card>
              </Body>
            </Card>
          </Panel>
          <Panel
            width="60"
            style={{
              backgroundColor: "",
              height: "70%",
              marginBottom: "6em"
            }}
          >
            <Card fluidWidth textCenter padding="2em">
              <div
                style={{
                  width: "100px",
                  height: "100px",
                  backgroundColor: "#333",
                  display: "inline-block",
                  marginRight: "1em"
                }}
              />
              <div
                style={{
                  width: "500px",
                  display: "inline-block",
                  textAlign: "left"
                }}
              >
                <h2>คุณสามารถดูการแจ้งเตือนและสิ่งที่เกิดขึ้นได้ที่นี่</h2>
                <p>
                  ศูนย์รวมการแจ้งเตือนต่างๆของห้องเรียนที่คุณได้สร้างหรือเข้าร่วม
                </p>
              </div>
            </Card>
            <div
              style={{
                marginTop: "1.5em",
                overflowY: "scroll",
                height: "500px"
              }}
            >
              <Card
                large
                marginBottom="1em"
                padding="4em"
                style={{ position: "relative" }}
              >
                <div>
                  <h3>Introduction to AI</h3>
                  <p>ฟหกฟหกฟหกฟหกสาฟนดาำๆนาดำ่ดพไรำ่ดนาฟนกฟยกสๆไยสกยฟสกยสฟก</p>
                </div>
                <ClassroomProfilePic />
              </Card>

              <Card
                large
                marginBottom="1em"
                padding="4em"
                style={{ position: "relative" }}
              >
                <div>
                  <h3>Introduction to AI</h3>
                  <p>ฟหกฟหกฟหกฟหกสาฟนดาำๆนาดำ่ดพไรำ่ดนาฟนกฟยกสๆไยสกยฟสกยสฟก</p>
                </div>
                <ClassroomProfilePic />
              </Card>
              <Card
                large
                marginBottom="1em"
                padding="4em"
                style={{ position: "relative" }}
              >
                <div>
                  <h3>Introduction to AI</h3>
                  <p>ฟหกฟหกฟหกฟหกสาฟนดาำๆนาดำ่ดพไรำ่ดนาฟนกฟยกสๆไยสกยฟสกยสฟก</p>
                </div>
                <ClassroomProfilePic />
              </Card>
            </div>
          </Panel>
          <ActivityPanel />
        </Container>
      </AuthenticatedLayout>
    ];
  }
}

export default withData(DashboardPage);
