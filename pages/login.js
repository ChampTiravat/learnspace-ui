import React from "react";

import { UnAuthenticatedLayout } from "../components/Layout";

class LoginPage extends React.Component {
  render() {
    return (
      <UnAuthenticatedLayout>
        <h1>Login page</h1>
      </UnAuthenticatedLayout>
    );
  }
}

export default LoginPage;
