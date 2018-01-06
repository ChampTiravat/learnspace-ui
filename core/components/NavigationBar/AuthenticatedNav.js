import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import { connect } from "react-redux";

import { showNotificationModal } from "../../actions/notification-modal-actions";
import { showChatroomModal } from "../../actions/chatroom-modal-actions";
import NavbarLinksContainer from "./NavbarLinksContainer";
import NavbarContainer from "./NavbarContainer";
import SearchTab from "../SearchTab/SearchTab";
import ButtonsTab from "./ButtonsTab";
import NavbarLink from "./NavbarLink";
import { InfoBadge } from "../Badge";
import { Button } from "../Button";
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
const AuthenticatedNav = ({ showChatroomModal, showNotificationModal }) => (
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
);

AuthenticatedNav.propTypes = {
  showNotificationModal: PropTypes.func.isRequired,
  showChatroomModal: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => ({
  showNotificationModal: () => dispatch(showNotificationModal()),
  showChatroomModal: () => dispatch(showChatroomModal())
});

export default connect(null, mapDispatchToProps)(AuthenticatedNav);
