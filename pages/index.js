import React from "react";
import Head from "next/head";

import UnAuthenticatedLayout from "../core/components/UnAuthenticatedLayout";
import NavigationBar from "../core/components/NavigationBar";

const IndexPage = () => [
  <Head>
    <title>หน้าแรก | LEARNSPACE</title>
  </Head>,
  <UnAuthenticatedLayout>
    <NavigationBar isLoggedIn={false} />
  </UnAuthenticatedLayout>
];

export default IndexPage;
