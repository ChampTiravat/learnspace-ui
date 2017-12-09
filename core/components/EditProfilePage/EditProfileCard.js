import React from "react";

import Card, { Header, Body } from "../Card";
import EditProfileForm from "./EditProfileForm";

const EditProfileCard = () => (
  <Card small marginTop="5em">
    <Header>แก้ไขข้อมูลส่วนตัว</Header>
    <Body>
      <EditProfileForm />
    </Body>
  </Card>
);

export default EditProfileCard;
