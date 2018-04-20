import React from 'react'
import PropTypes from 'prop-types'

import FullContainerCard from '../FullContainerCard'
import MemberItem from './MemberItem'
import UserTitle from './UserTitle'

/**
 * @name ClassroomMemberPanel
 * @desc A Card component, displaying a classroom members
 * @prop { classroomMembers } [APOLLO] : List of classroom members
 */
const ClassroomMemberPanel = ({ classroomMembers }) => (
  <FullContainerCard header="สมาชิก" marginTop="2em" marginBottom="7em">
    {classroomMembers.map(member => (
      <MemberItem key={member._id} memberID={member._id} profilePicture={member.profilePicture}>
        <UserTitle>{member.fname}</UserTitle>
      </MemberItem>
    ))}
  </FullContainerCard>
)

export default ClassroomMemberPanel
