import styled from "styled-components";

import Card from "./Card";

const ProfileInfoPanelCard = Card.extend`
  margin: 1.5em auto 0 auto;
  height: 650px;
  max-width: 480px;
`;

const ProfileImage = styled.img`
  display: block;
  width: 100%;
  height: 250px;
  background-color: #cbcbcb;
`;

const ProfileInfoPanel = ({ children }) => (
  <ProfileInfoPanelCard>
    <ProfileImage />
    {children}
  </ProfileInfoPanelCard>
);

export default ProfileInfoPanel;
