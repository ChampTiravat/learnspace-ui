import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";

import Navbar from "./Navbar";
import NavbarContainer from "./NavbarContainer";
import LogoTab from "./LogoTab";
import SearchTab from "../SearchTab/SearchTab";
import ButtonsTab from "./ButtonsTab";
import NavbarLinksContainer from "./NavbarLinksContainer";
import NavbarLinkButton from "./NavbarLinkButton";
import { LightButton } from "../Button";
import {
  HOME_PAGE,
  DASHBOARD_PAGE,
  PROFILE_PAGE
} from "../../constants/endpoints/ui";

/**
 * @desc Use this component when user is authenticated
 */
const AuthenticatedNav = () => (
  <Navbar>
    <NavbarContainer>
      <LogoTab authenticated>
        <Link href={HOME_PAGE} prefetch>
          <a>LEARNSPACE</a>
        </Link>
      </LogoTab>
      <SearchTab />
      <ButtonsTab>
        <NavbarLinksContainer>
          <NavbarLinkButton url={DASHBOARD_PAGE} label="หน้าหลัก" />
          <NavbarLinkButton url={PROFILE_PAGE} label="โปรไฟล์" />
          <NavbarLinkButton url={DASHBOARD_PAGE} hasBadge label="แชท" />
          <NavbarLinkButton
            url={DASHBOARD_PAGE}
            hasBadge
            label="การแจ้งเตือน"
          />
          <Link href={HOME_PAGE}>
            <LightButton>ออกจากระบบ</LightButton>
          </Link>
        </NavbarLinksContainer>
      </ButtonsTab>
    </NavbarContainer>
  </Navbar>
);

export default AuthenticatedNav;
