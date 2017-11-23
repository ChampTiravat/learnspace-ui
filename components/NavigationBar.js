import React from "react";
import styled from "styled-components";

const Navbar = styled.nav`
  padding: 1em;
  background-color: #3b90f9;
`;

const LogoTab = styled.div`
  display: inline-block;
`;

const AuthenticatedNav = () => <Navbar>Not Logged In</Navbar>;
const UnAuthenticatedNav = () => (
  <Navbar>
    <LogoTab>
      <a>
        <h1>LEARNSPACE</h1>
      </a>
      <h2>ระบบสนับสนุนการเรียนการสอนนอกห้องเรียน</h2>
    </LogoTab>
    <div>
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
    </div>
  </Navbar>
);

/**
 * @desc Navigation Bar component. it will render a different navigation bar
 *       Depends on wether user is already logged in or not
 */
class NavigationBar extends React.Component {
  state = { isLoggedIn: false };

  render() {
    return this.state.isLoggedIn ? (
      <AuthenticatedNav />
    ) : (
      <UnAuthenticatedNav />
    );
  }
}

export default NavigationBar;
