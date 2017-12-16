import React from "react";

import EditClassroomCard from "../core/components/EditClassroomPage/EditClassroomCard";
import AuthenticatedLayout from "../core/components/AuthenticatedLayout";
import Container from "../core/components/Container";
import Wallpaper from "../core/components/Wallpaper";
import withData from "../core/withData";

const EditProfilePage = () => (
  <AuthenticatedLayout>
    <Container transparent>
      <EditClassroomCard />
    </Container>
  </AuthenticatedLayout>
);

export default withData(EditProfilePage);
