import React from "react";

import Card, { Header, Body } from "./Card";
import RegisterForm from "./RegisterForm";

const RegisterCard = () => (
  <Card small marginTop="5em">
    <Header>กรอกข้อมูลเล็กน้อยเพื่อสมัครสมาชิก</Header>
    <Body>
      <RegisterForm />
    </Body>
  </Card>
);

export default RegisterCard;
