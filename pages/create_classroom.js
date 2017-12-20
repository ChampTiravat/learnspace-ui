import React from "react";

import CreateClassroomCard from "../core/components/CreateClassroomPage/CreateClassroomCard";
import AuthenticatedLayout from "../core/components/Layout/AuthenticatedLayout";
import Container from "../core/components/Container";
import Wallpaper from "../core/components/Wallpaper";
import withData from "../core/withData";

const CreateClassroomPage = () => (
  <AuthenticatedLayout>
    <Container transparent>
      <CreateClassroomCard />
    </Container>
  </AuthenticatedLayout>
);

export default withData(EditProfilePage);
