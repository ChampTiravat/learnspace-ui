import React from "react";

import CreateClassroomCard from "../core/components/CreateClassroomPage/CreateClassroomCard";
import PostComponentsSelectorCard from "../core/components/PostComponentsSelectorCard";
import AuthenticatedLayout from "../core/components/AuthenticatedLayout";
import PostContentEditor from "../core/components/PostContentEditor";
import NavigationBar from "../core/components/NavigationBar";
import Wallpaper from "../core/components/Wallpaper";
import Container from "../core/components/Container";
import Panel from "../core/components/Panel";
import withData from "../core/withData";

const EditProfilePage = () => (
  <AuthenticatedLayout>
    <NavigationBar isLoggedIn={true} />
    <Container transparent>
      <Panel left width="70" paddingRight="1.5em">
        <PostContentEditor />
      </Panel>
      <Panel right width="30">
        <PostComponentsSelectorCard />
      </Panel>
    </Container>
  </AuthenticatedLayout>
);

export default withData(EditProfilePage);
