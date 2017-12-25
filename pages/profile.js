import React from "react";
import Head from "next/head";

import ProfileActivityPanel from "../core/components/ProfilePage/ProfileActivityPanel";
import AuthenticatedLayout from "../core/components/Layout/AuthenticatedLayout";
import ProfileInfoPanel from "../core/components/ProfilePage/ProfileInfoPanel";
import ClassroomsList from "../core/components/ClassroomsList";
import Container from "../core/components/Container";
import Panel from "../core/components/Panel";
import withData from "../core/withData";

const ProfilePage = () => [
  <Head>
    <title>tiravat thaisubvorakul | LEARNSPACE</title>
  </Head>,
  <AuthenticatedLayout>
    <Container>
      <Panel left width="40">
        <ProfileInfoPanel />
      </Panel>
      <Panel right width="60">
        <ClassroomsList height="700px" />
      </Panel>
    </Container>
    <ProfileActivityPanel />
  </AuthenticatedLayout>
];

export default withData(ProfilePage);
