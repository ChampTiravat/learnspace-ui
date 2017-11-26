import React from "react";
import styled from "styled-components";
import Link from "next/link";

import Container from "../Container";
import Navbar from "./Navbar";
import NavbarContainer from "./NavbarContainer";
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
export default () => (
  <Navbar>
    <NavbarContainer>
      <LogoTab>
        <Link href={HOME_PAGE} prefetch>
          <a>
            <h1>LEARNSPACE</h1>
          </a>
        </Link>
        <h2>ระบบสนับสนุนการเรียนการสอนนอกห้องเรียน</h2>
      </LogoTab>
      <ButtonsTab>
        <ul>
          <li>
            <Link href={HOME_PAGE}>
              <a>หน้าแรก</a>
            </Link>
          </li>
          <li>
            <a>เกี่ยวกับเรา</a>
          </li>
          <li>
            <Link href={DASHBOARD_PAGE}>
              <a>ระบบห้องเรียนออนใลน์</a>
            </Link>
          </li>
          <li>
            <Link href={REGISTER_PAGE}>
              <a>สมัครสมาชิก</a>
            </Link>
          </li>
          <li>
            <Link href={LOGIN_PAGE} prefetch>
              <a>เข้าสู่ระบบ</a>
            </Link>
          </li>
        </ul>
      </ButtonsTab>
    </NavbarContainer>
  </Navbar>
);
