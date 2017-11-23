import React from "react";

import UnAuthenticatedLayout from "../core/components/UnAuthenticatedLayout";
import LoginCard from "../core/components/LoginCard";

class LoginPage extends React.Component {
  render() {
    return (
      <UnAuthenticatedLayout>
        <LoginCard />
      </UnAuthenticatedLayout>
    );
  }
}

export default LoginPage;
