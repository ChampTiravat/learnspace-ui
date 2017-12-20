import React from "react";

import CreateClassroomForm from "./CreateClassroomForm";
import Card, { Header, Body } from "../Card";

const EditProfileCard = () => (
  <Card small marginTop="5em">
    <Header>สร้างห้องเรียนใหม่</Header>
    <Body>
      <CreateClassroomForm />
    </Body>
  </Card>
);

export default EditProfileCard;
