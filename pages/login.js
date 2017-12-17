import React from "react";

import UnAuthenticatedLayout from "../core/components/UnAuthenticatedLayout";
import Container from "../core/components/Container";
import Wallpaper from "../core/components/Wallpaper";
import LoginCard from "../core/components/LoginPage/LoginCard";
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
