import React from "react";

import UnAuthenticatedLayout from "../core/components/UnAuthenticatedLayout";
import RegisterCard from "../core/components/RegisterCard";
import Container from "../core/components/Container";
import Wallpaper from "../core/components/Wallpaper";
import withData from "../core/withData";

class LoginPage extends React.Component {
  render() {
    return (
      <UnAuthenticatedLayout>
        <Wallpaper pageName="register">
          <Container transparent>
            <RegisterCard />
          </Container>
        </Wallpaper>
      </UnAuthenticatedLayout>
    );
  }
}

export default withData(LoginPage);
