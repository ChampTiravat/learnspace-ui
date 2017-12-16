import React from "react";

import CreateClassroomCard from "../core/components/CreateClassroomPage/CreateClassroomCard";
import AuthenticatedLayout from "../core/components/AuthenticatedLayout";
import Container from "../core/components/Container";
import Wallpaper from "../core/components/Wallpaper";
import withData from "../core/withData";

const EditProfilePage = () => (
  <AuthenticatedLayout>
    <Container transparent>
      <CreateClassroomCard />
    </Container>
  </AuthenticatedLayout>
);

export default withData(EditProfilePage);
