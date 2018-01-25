import styled from 'styled-components'

/**
 * @name ClassroomProfilePic
 * @desc Dispay an profile picture of a particular classroom
 * @prop { src } : Image URL of the classroom's profile picture
 */
const ClassroomProfilePic = styled.img`
  padding: 1.5em;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background: ${p => (p.src ? `url(${p.src})` : '#c8c8c8')};
  position: absolute;
  margin-top: -8em;
  margin-left: 31em;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
`

export default ClassroomProfilePic
