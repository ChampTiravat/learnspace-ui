import React from "react";

import { UnAuthenticatedLayout } from "../components/Layout";
import Card, { Header, Body, Footer } from "../components/Card";

class LoginPage extends React.Component {
  render() {
    return (
      <UnAuthenticatedLayout>
        <Card>
          <Header>ยืนยันตัวตนเพื่อเข้าสู่ระบบ</Header>
          <Body>asdasdddddddddddddddd</Body>
          <Footer>
            <button>ปิด</button>
          </Footer>
        </Card>
      </UnAuthenticatedLayout>
    );
  }
}

export default LoginPage;
