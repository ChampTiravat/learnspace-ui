import React from "react";

import EditProfileForm from "./EditProfileForm";
import Card, { Header, Body } from "../Card";

const EditProfileCard = () => (
  <Card small marginTop="5em">
    <Header>แก้ไขข้อมูลส่วนตัว</Header>
    <Body>
      <EditProfileForm />
    </Body>
  </Card>
);

export default EditProfileCard;
