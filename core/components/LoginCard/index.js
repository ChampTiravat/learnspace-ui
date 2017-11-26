import React from "react";
import Card, { Header, Body, Footer } from "../Card";

const LoginCard = () => (
  <Card marginTop="5em">
    <Header>ยืนยันตัวตนเพื่อเข้าสู่ระบบ</Header>
    <Body>
      If child is and tag and doesn't have a href attribute we specify it so
      that the repetition is not needed by the user. However, sometimes, you’ll
      want to pass and tag inside of a wrapper and the Link won’t recognize it
      as a hyperlink, and, consequently, won’t transfer its href to the child.
      In cases like that, you should define a boolean passHref property to the
      Link, forcing it to expose its href property to the child.
    </Body>
    <Footer>
      <button>ปิด</button>
    </Footer>
  </Card>
);

export default LoginCard;
