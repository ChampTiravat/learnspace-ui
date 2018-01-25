import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'

import NavbarLinksContainer from './NavbarLinksContainer'
import NavbarContainer from './NavbarContainer'
import NavbarLink from './NavbarLink'
import ButtonsTab from './ButtonsTab'
import LogoTab from './LogoTab'
import Navbar from './Navbar'
import {
  HOME_PAGE,
  REGISTER_PAGE,
  LOGIN_PAGE,
  DASHBOARD_PAGE
} from '../../constants/endpoints/ui'

const AppDescription = styled.h2`
  display: inline-block;
  font-size: 1em;
  font-weight: 300;
  margin-left: 1em;
`

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
          <NavbarLink>
            <Link href={DASHBOARD_PAGE} prefetch>
              <a>ห้องเรียนออนใลน์</a>
            </Link>
          </NavbarLink>
          <NavbarLink>
            <Link href={REGISTER_PAGE} prefetch>
              <a>สมัครสมาชิก</a>
            </Link>
          </NavbarLink>
          <NavbarLink>
            <Link href={LOGIN_PAGE} prefetch>
              <a>เข้าสู่ระบบ</a>
            </Link>
          </NavbarLink>
        </NavbarLinksContainer>
      </ButtonsTab>
    </NavbarContainer>
  </Navbar>
)

export default UnAuthenticatedNav
