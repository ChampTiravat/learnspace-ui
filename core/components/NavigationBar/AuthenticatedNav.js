import React from "react";
import styled from "styled-components";
import Link from "next/link";

import Container from "../Container";
import Navbar from "./Navbar";
import NavbarContainer from "./NavbarContainer";
import LogoTab from "./LogoTab";
import ButtonsTab from "./ButtonsTab";
import Button from "../Button";
import { Form, Input } from "../Form";
import { HOME_PAGE } from "../../constants/endpoints/ui";

const SearchForm = styled.form`
  display: inline-block;
`;

const SearchPanel = () => (
  <SearchForm>
    <Input type="text" />
    <Button textCenter>ค้นหา</Button>
  </SearchForm>
);

/**
 * @desc Use this component when user is already authenticated
 */
export default () => (
  <Navbar>
    <NavbarContainer>
      <LogoTab authenticated>
        <Link href={HOME_PAGE} prefetch>
          <a>
            <h1>LEARNSPACE</h1>
          </a>
        </Link>
      </LogoTab>
      <SearchForm />
      <ButtonsTab>
        <ul>
          <li>
            <Link href={HOME_PAGE}>
              <a>หน้าหลัก</a>
            </Link>
          </li>
          <li>
            <Link href={HOME_PAGE}>
              <a>โปรไฟล์</a>
            </Link>
          </li>
          <li>
            <Link href={HOME_PAGE}>
              <a>ห้องเรียนของฉัน</a>
            </Link>
          </li>
          <li>
            <Link href={HOME_PAGE}>
              <a>การแจ้งเตือน</a>
            </Link>
          </li>
          <li>
            <Link href={HOME_PAGE} prefetch>
              <a>ออกจากระบบ</a>
            </Link>
          </li>
        </ul>
      </ButtonsTab>
    </NavbarContainer>
  </Navbar>
);
