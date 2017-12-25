import React from "react";

import UnAuthenticatedLayout from "../core/components/Layout/UnAuthenticatedLayout";
import LoginCard from "../core/components/LoginPage/LoginCard";
import Container from "../core/components/Container";
import Wallpaper from "../core/components/Wallpaper";
import withData from "../core/withData";

class LoginPage extends React.Component {
  render() {
    return (
      <UnAuthenticatedLayout>
        <Wallpaper pageName="login">
          <Container transparent>
            <LoginCard />
          </Container>
        </Wallpaper>
      </UnAuthenticatedLayout>
    );
  }
}

export default withData(LoginPage);
