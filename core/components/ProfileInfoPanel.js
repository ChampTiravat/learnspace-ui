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

const ProfileInfoContainer = styled.div`
  padding: 3.5em 2em;
  text-align: center;
`;

const ProfileInfoDetails = styled.div`
  margin-bottom: 2em;
  h1 {
    color: ${p => p.theme.primaryColor};
    font-weight: 400;
  }
  h4 {
    color: #777;
    font-size: 1.1em;
    font-weight: 400;
    margin-bottom: 0.3em;
  }
`;

const Seperator = styled.div`
  width: 40%;
  height: 2px;
  background-color: ${p => p.theme.primaryColor};
  margin: 1em auto;
`;

const ProfileInfoPanel = () => (
  <ProfileInfoPanelCard>
    <ProfileImage />
  </ProfileInfoPanelCard>
);

export default ProfileInfoPanel;
