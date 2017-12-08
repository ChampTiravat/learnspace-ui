import styled from "styled-components";

/**
 * @desc Components related in /profile(pages/profile.js)
 */

export const ProfileInfoContainer = styled.div`
  padding: 3.5em 2em;
  text-align: center;
`;

export const ProfileInfoDetails = styled.div`
  margin-bottom: 2em;
`;

export const UserFullName = styled.h1`
  color: ${p => p.theme.primaryColor};
  font-weight: 400;
`;
export const UserInfoItem = styled.h4`
  color: #777;
  font-size: 1.1em;
  font-weight: 400;
  margin-bottom: 0.3em;
`;

export const Seperator = styled.div`
  width: 40%;
  height: 2px;
  background-color: ${p => p.theme.primaryColor};
  margin: 1em auto;
`;
