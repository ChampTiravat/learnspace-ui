import React from "react";

import Card, { Header, Body } from "../Card";
import CreateClassroomForm from "./CreateClassroomForm";

const EditProfileCard = () => (
  <Card small marginTop="5em">
    <Header>สร้างห้องเรียนใหม่</Header>
    <Body>
      <CreateClassroomForm />
    </Body>
  </Card>
);

export default EditProfileCard;
