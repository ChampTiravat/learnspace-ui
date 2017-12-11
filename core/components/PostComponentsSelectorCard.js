import React from "react";
import PropTypes from "prop-types";

import Card, { Header, Body, Footer } from "./Card";
import { PrimaryButton, DangerButton } from "./Button";
import PostComponentItem from "./PostComponentItem";

class PostComponentsSelectorCard extends React.Component {
  render() {
    return (
      <Card style={{ position: "fixed", maxWidth: "400px" }}>
        <Header>เลือกส่วนประกอบที่ต้องการ</Header>
        <Body height="470px">
          <PostComponentItem label="หัวข้อเรื่อง" />
          <PostComponentItem label="หัวข้อย่อย" />
          <PostComponentItem label="ย่อหน้า" />
          <PostComponentItem label="รุปภาพ" />
          <PostComponentItem label="วิดีโอ" />
          <PostComponentItem label="แผนที่" />
          <PostComponentItem label="ตาราง" />
          <PostComponentItem label="สไลด์รูปภาพ" />
          <PostComponentItem label="ไฟล์แนบ" />
        </Body>
        <Footer>
          <PrimaryButton textCenter fluidWidth marginBottom="0.5em">
            เสร็จสิ้น
          </PrimaryButton>
          <DangerButton textCenter fluidWidth>
            ยกเลิก
          </DangerButton>
        </Footer>
      </Card>
    );
  }
}

export default PostComponentsSelectorCard;
