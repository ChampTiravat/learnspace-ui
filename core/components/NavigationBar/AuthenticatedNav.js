import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";

import NavbarLinksContainer from "./NavbarLinksContainer";
import NavbarContainer from "./NavbarContainer";
import SearchTab from "../SearchTab/SearchTab";
import { LightButton } from "../Button";
import ButtonsTab from "./ButtonsTab";
import NavbarLink from "./NavbarLink";
import { InfoBadge } from "../Badge";
import LogoTab from "./LogoTab";
import Navbar from "./Navbar";
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
          <NavbarLink>
            <Link href={DASHBOARD_PAGE} prefetch>
              <a>หน้าหลัก</a>
            </Link>
          </NavbarLink>
          <NavbarLink>
            <Link href={PROFILE_PAGE} prefetch>
              <a>โปรไฟล์</a>
            </Link>
          </NavbarLink>
          <NavbarLink>
            <Link href={PROFILE_PAGE} prefetch>
              <a>
                แชท
                <InfoBadge>12</InfoBadge>
              </a>
            </Link>
          </NavbarLink>
          <NavbarLink>
            <a>
              การแจ้งเตือน
              <InfoBadge>5</InfoBadge>
            </a>
          </NavbarLink>
          <NavbarLink>
            <LightButton>ออกจากระบบ</LightButton>
          </NavbarLink>
        </NavbarLinksContainer>
      </ButtonsTab>
    </NavbarContainer>
  </Navbar>
);

export default AuthenticatedNav;
