import React from "react";

import EditProfileCard from "../core/components/EditProfilePage/EditProfileCard";
import AuthenticatedLayout from "../core/components/Layout/AuthenticatedLayout";
import Container from "../core/components/Container";
import Wallpaper from "../core/components/Wallpaper";
import withData from "../core/withData";

const EditProfilePage = () => (
  <AuthenticatedLayout>
    <Container transparent>
      <EditProfileCard />
    </Container>
  </AuthenticatedLayout>
);

export default withData(EditProfilePage);
