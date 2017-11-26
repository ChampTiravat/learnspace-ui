import React from "react";

import UnAuthenticatedLayout from "../core/components/UnAuthenticatedLayout";
import NavigationBar from "../core/components/NavigationBar";
import Container from "../core/components/Container";
import Wallpaper from "../core/components/Wallpaper";
import LoginCard from "../core/components/LoginCard";

class LoginPage extends React.Component {
  render() {
    return (
      <UnAuthenticatedLayout>
        <Wallpaper pageName="login">
          <NavigationBar />
          <Container transparent>
            <LoginCard />
          </Container>
        </Wallpaper>
      </UnAuthenticatedLayout>
    );
  }
}

export default LoginPage;
