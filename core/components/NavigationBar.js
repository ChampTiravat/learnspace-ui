import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Link from "next/link";

import { Form, Input } from "./Form";
import SearchTab from "./SearchTab/SearchTab";
import { LightButton } from "./Button";
import {
  HOME_PAGE,
  REGISTER_PAGE,
  LOGIN_PAGE,
  DASHBOARD_PAGE,
  PROFILE_PAGE
} from "../constants/endpoints/ui";

const Navbar = styled.nav`
  position: fixed;
  z-index: 100;
  width: 100%;
  left: 0;
  top: 0;
  background-color: #3b90f9;
  box-shadow: 5px 0 20px rgba(0, 0, 0, 0.2);
`;

const NavbarContainer = styled.div`
  padding-top: 0;
  padding-bottom: 0;
  padding-left: 0;
  padding-right: 0;
  margin: 0 auto;
  max-width: 1400px;
  width: 100%;
  height: auto;
`;

const LogoTab = styled.div`
  display: inline-block;
  color: #fff;
  width: ${p => (p.authenticated ? "15%" : "50%")};
  a {
    background-color: #3a82ea;
    display: inline-block;
    padding: 0.5em 1em;
    text-decoration: none;
    color: inherit;
    font-size: 1.2em;
    font-weight: 400;
  }
`;

const AppDescription = styled.h2`
  display: inline-block;
  font-size: 1em;
  font-weight: 300;
  margin-left: 1em;
`;

const ButtonsTab = styled.div`
  display: inline-block;
  padding-right: 1em;
  text-align: right;
  width: 50%;
`;

const NavbarLinksContainer = styled.ul`
  display: inline-block;
  margin: 0;
  padding: 0;
  list-style: none;
`;

const NavbarLink = styled.li`
  display: inline-block;
  padding: 0.4em;
  margin: 0;
  a {
    color: #fff;
    padding: 0.3em 0.5em;
    border-radius: 5px;
    font-size: 1.1em;
    font-weight: 300;
    text-decoration: none;
    &:hover {
      background-color: #fff;
      color: #3b90f9;
      cursor: pointer;
    }
  }
`;

const NavbarLinkButton = ({ url, label }) => (
  <NavbarLink>
    <Link href={url} prefetch>
      <a>{label}</a>
    </Link>
  </NavbarLink>
);

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
          <Link href={HOME_PAGE}>
            <LightButton>ออกจากระบบ</LightButton>
          </Link>
        </NavbarLinksContainer>
      </ButtonsTab>
    </NavbarContainer>
  </Navbar>
);

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

/**
 * @desc Navigation Bar component. it will render a different navigation bar
 *       Depends on wether user is already logged in or not
 */
const NavigationBar = ({ isLoggedIn }) =>
  isLoggedIn ? <AuthenticatedNav /> : <UnAuthenticatedNav />;

NavigationBar.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired
};

export default NavigationBar;
