import React from "react";

import AuthenticatedLayout from "../core/components/AuthenticatedLayout";
import NavigationBar from "../core/components/NavigationBar";
import Container from "../core/components/Container";
import Wallpaper from "../core/components/Wallpaper";
import withData from "../core/withData";

class DashboardPage extends React.Component {
  render() {
    return (
      <AuthenticatedLayout>
        <NavigationBar isLoggedIn={true} />
        <Container>
          <h1>dashboard</h1>
          <h1>dashboard</h1>
          <h1>dashboard</h1>
          <h1>dashboard</h1>
          <h1>dashboard</h1>
          <h1>dashboard</h1>
          <h1>dashboard</h1>
          <h1>dashboard</h1>
        </Container>
      </AuthenticatedLayout>
    );
  }
}

export default withData(DashboardPage);
