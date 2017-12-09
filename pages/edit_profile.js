import React from "react";

import AuthenticatedLayout from "../core/components/AuthenticatedLayout";
import NavigationBar from "../core/components/NavigationBar";
import Container from "../core/components/Container";
import Wallpaper from "../core/components/Wallpaper";
import EditProfileCard from "../core/components/EditProfilePage/EditProfileCard";
import withData from "../core/withData";

const EditProfilePage = () => (
  <AuthenticatedLayout>
    <NavigationBar isLoggedIn={true} />
    <Container transparent>
      <EditProfileCard />
    </Container>
  </AuthenticatedLayout>
);

export default withData(EditProfilePage);
