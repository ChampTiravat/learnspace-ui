import React from "react";

import UnAuthenticatedLayout from "../core/components/UnAuthenticatedLayout";
import NavigationBar from "../core/components/NavigationBar/NavigationBar";
import RegisterCard from "../core/components/RegisterCard";
import Container from "../core/components/Container";
import Wallpaper from "../core/components/Wallpaper";
import withData from "../core/withData";

class LoginPage extends React.Component {
  render() {
    return (
      <UnAuthenticatedLayout>
        <Wallpaper pageName="register">
          <NavigationBar isLoggedIn={false} />
          <Container transparent>
            <RegisterCard />
          </Container>
        </Wallpaper>
      </UnAuthenticatedLayout>
    );
  }
}

export default withData(LoginPage);
