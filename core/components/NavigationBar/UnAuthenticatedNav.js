import React from "react";
import styled from "styled-components";

import Container from "../Container";
import Navbar from "./Navbar";
import NavbarContainer from "./NavbarContainer";
import LogoTab from "./LogoTab";
import ButtonsTab from "./ButtonsTab";

/**
 * @desc Use this component when user is not authenticated
 */
export default () => (
  <Navbar>
    <NavbarContainer>
      <LogoTab>
        <a>
          <h1>LEARNSPACE</h1>
        </a>
        <h2>ระบบสนับสนุนการเรียนการสอนนอกห้องเรียน</h2>
      </LogoTab>
      <ButtonsTab>
        <ul>
          <li>
            <a>หน้าแรก</a>
          </li>
          <li>
            <a>เกี่ยวกับเรา</a>
          </li>
          <li>
            <a>ระบบห้องเรียนออนใลน์</a>
          </li>
          <li>
            <a>สมัครสมาชิก</a>
          </li>
        </ul>
      </ButtonsTab>
    </NavbarContainer>
  </Navbar>
);
