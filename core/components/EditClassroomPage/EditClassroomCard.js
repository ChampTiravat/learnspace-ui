import React from "react";

import Card, { Header, Body } from "../Card";
import EditClassroomForm from "./EditClassroomForm";

const EditProfileCard = () => (
  <Card small marginTop="5em">
    <Header>แก้ไขข้อมูลห้องเรียน</Header>
    <Body>
      <EditClassroomForm />
    </Body>
  </Card>
);

export default EditProfileCard;
