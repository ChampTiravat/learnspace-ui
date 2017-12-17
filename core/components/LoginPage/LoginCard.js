import React from "react";

import Card, { Header, Body } from "../Card";
import LoginForm from "./LoginForm";

const LoginCard = () => (
  <Card small marginTop="5em">
    <Header>ยืนยันตัวตนเพื่อเข้าสู่ระบบ</Header>
    <Body>
      <LoginForm />
    </Body>
  </Card>
);

export default LoginCard;
