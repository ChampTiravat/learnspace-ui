import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'

import NavbarLinksContainer from './NavbarLinksContainer'
import NavbarContainer from './NavbarContainer'
import SearchTab from '../SearchTab/SearchTab'
import ButtonsTab from './ButtonsTab'
import NavbarLink from './NavbarLink'
import { InfoBadge } from '../Badge'
import { Button } from '../Button'
import LogoTab from './LogoTab'
import Navbar from './Navbar'
import {
  HOME_PAGE,
  DASHBOARD_PAGE,
  PROFILE_PAGE
} from '../../constants/endpoints/ui'

const NavbarMenuButton = Button.extend`
  display: none;
  @media (max-width: 900px) {
    display: inline-block;
  }
`

/**
 * @name AuthenticatedNav
 * @desc Use this NavigationBar when user is authenticated
 * @prop { activeUser } [REDUX] : Currently logged-in user
 * @prop { showChatroomModal } [REDUX] : Display a ChatroomModal
 * @prop { showNotificationModal } [REDUX] : Display a NotificationModal
 */
const AuthenticatedNav = ({
  showChatroomModal,
  showNotificationModal,
  activeUser
}) => (
  <Navbar>
    <NavbarContainer>
      <LogoTab authenticated>
        <Link href={HOME_PAGE} prefetch>
          <a>LEARNSPACE</a>
        </Link>
        <NavbarMenuButton
          light
          marginLeft="2em"
          marginRight="2em"
          onClick={() => alert('Hello')}
        >
          Menu
        </NavbarMenuButton>
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
            <Link
              href={{ pathname: PROFILE_PAGE, query: { id: activeUser._id } }}
              prefetch
            >
              <a>โปรไฟล์</a>
            </Link>
          </NavbarLink>
          <NavbarLink>
            <a onClick={() => showChatroomModal()}>
              แชท
              <InfoBadge>12</InfoBadge>
            </a>
          </NavbarLink>
          <NavbarLink>
            <a onClick={() => showNotificationModal()}>
              การแจ้งเตือน
              <InfoBadge>5</InfoBadge>
            </a>
          </NavbarLink>
          <NavbarLink>
            <Button light>ออกจากระบบ</Button>
          </NavbarLink>
        </NavbarLinksContainer>
      </ButtonsTab>
    </NavbarContainer>
  </Navbar>
)

AuthenticatedNav.propTypes = {
  showNotificationModal: PropTypes.func.isRequired,
  showChatroomModal: PropTypes.func.isRequired,
  activeUser: PropTypes.object.isRequired
}

export default AuthenticatedNav
