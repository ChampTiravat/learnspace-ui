import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'

import { CLASSROOM_PAGE } from '../../constants/endpoints/ui'
import { Button } from '../Button'
import Card from '../Card'

const ClassroomInvitationItemWrapper = styled.div`
  position: relative;
  display: inline-block;
  text-align: center;
  margin: 1em 1.5em;
  cursor: pointer;
  padding: 0;
`

const ClassroomInvitationItemCard = Card.extend`
  transition: all 200ms ease-in;
  margin-bottom: 1em;
  max-width: 650px;
  box-shadow: none;
  margin-left: 0;
  padding: 4em;
  &:hover {
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  }
`

const ClassroomInvitationItemLabel = styled.div`
  width: 470px;
  h3 {
    color: ${p => p.theme.PRIMARY_COLOR};
    margin-bottom: 1em;
    font-weight: 400;
    font-size: 1.3em;
  }
  p {
    font-weight: 300;
    font-size: 1.1em;
    color: #777;
    margin: 0;
  }
`

const ClassroomsInvitationWrapper = styled.div`
  height: ${p => p.height || '600px'};
  margin-top: 1.5em;
  overflow-y: auto;
`

const ClassroomInvitationProfilePicture = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  position: absolute;
  margin-top: -7.5em;
  margin-left: 25em;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
`

/**
 * @name ClassroomInvitationItem
 * @desc Display a received classroom invitation items of a particular user.
 *       This component will be placed in Dashboard page
 * @prop { _id } : Classroom ID. Use this to generate a URL to the particular classroom
 * @prop { name } : Classroom name
 * @prop { thumbnail } : Classroom thumbnail
 */
const ClassroomInvitationItem = ({ _id, name, thumbnail }) => (
  <Link href={{ pathname: CLASSROOM_PAGE, query: { id: _id } }} prefetch>
    <ClassroomInvitationItemWrapper>
      <ClassroomInvitationItemCard>
        <ClassroomInvitationItemLabel>
          <h3>{name}</h3>
          <Button primary>ยอมรับ</Button>
          <Button light marginLeft="1em">
            ปฏิเศษ
          </Button>
        </ClassroomInvitationItemLabel>
        <ClassroomInvitationProfilePicture src={thumbnail} />
      </ClassroomInvitationItemCard>
    </ClassroomInvitationItemWrapper>
  </Link>
)

export default ClassroomInvitationItem
