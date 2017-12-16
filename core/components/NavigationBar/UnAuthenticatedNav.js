import React from "react";
import Link from "next/link";

import Navbar from "./Navbar";
import NavbarLinkButton from "./NavbarLinkButton";
import NavbarContainer from "./NavbarContainer";
import NavbarLinksContainer from "./NavbarLinksContainer";
import AppDescription from "./AppDescription";
import LogoTab from "./LogoTab";
import ButtonsTab from "./ButtonsTab";
import {
  HOME_PAGE,
  REGISTER_PAGE,
  LOGIN_PAGE,
  DASHBOARD_PAGE
} from "../../constants/endpoints/ui";

/**
 * @desc Use this component when user is not authenticated
 */
const UnAuthenticatedNav = () => (
  <Navbar>
    <NavbarContainer>
      <LogoTab>
        <Link href={HOME_PAGE} prefetch>
          <a>LEARNSPACE</a>
        </Link>
        <AppDescription>ระบบสนับสนุนการเรียนการสอนนอกห้องเรียน</AppDescription>
      </LogoTab>
      <ButtonsTab>
        <NavbarLinksContainer>
          <NavbarLinkButton url={HOME_PAGE} label="หน้าแรก" />
          <NavbarLinkButton url={HOME_PAGE} label="เกี่ยวกับเรา" />
          <NavbarLinkButton url={DASHBOARD_PAGE} label="ห้องเรียนออนใลน์" />
          <NavbarLinkButton url={REGISTER_PAGE} label="สมัครสมาชิก" />
          <NavbarLinkButton url={LOGIN_PAGE} label="เข้าสู่ระบบ" />
        </NavbarLinksContainer>
      </ButtonsTab>
    </NavbarContainer>
  </Navbar>
);

export default UnAuthenticatedNav;
