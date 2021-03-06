import React from 'react'
import Link from 'next/link'
import PropTypes from 'prop-types'

import ActivityPanel from '../ActivityPanel'
import {
  CREATE_POST_PAGE,
  EDIT_CLASSROOM_PAGE,
  CLASSROOM_MEMBER_PAGE,
  CLASSROOM_CHATROOM_PAGE,
  CLASSROOM_JOIN_REQUEST_PAGE
} from '../../constants/endpoints/ui'

/**
 * @name AdminOnly
 * @desc Render 'children' if the current user is an admin of a particular classroom.
 *       Otherwise, return NULL
 * @prop { classroomCreatorID } : User ID of the classroom creator(Admin)
 * @prop { currentUserID } : ID of the current user
 */
const AdminOnly = ({ classroomCreatorID, currentUserID, children }) =>
  classroomCreatorID === currentUserID ? children : null

/**
 * @name ClassroomActivityPanel
 * @desc Showing a navigation menu associated to classroom page
 * @prop { classroomID } [REDUX] : Classroom ID
 * @prop { currentUserID } [REDUX] : Current logged-in user
 * @prop { classroomCreatorID } [REDUX] : Creator of the classroom
 */
const ClassroomActivityPanel = ({
  showClassroomInvitationModal,
  classroomCreatorID,
  currentUserID,
  classroomID
}) => (
  <ActivityPanel>
    <Link href={CLASSROOM_CHATROOM_PAGE} prefetch>
      <a>ห้องแชท</a>
    </Link>

    <AdminOnly>
      <Link
        href={{ pathname: CREATE_POST_PAGE, query: { classroomID } }}
        prefetch
      >
        <a>สร้างโพสใหม่</a>
      </Link>
    </AdminOnly>

    <AdminOnly>
      <Link href={EDIT_CLASSROOM_PAGE} prefetch>
        <a>แก้ไขข้อมูลห้องเรียน</a>
      </Link>
    </AdminOnly>

    <Link
      href={{ pathname: CLASSROOM_MEMBER_PAGE, query: { id: classroomID } }}
    >
      <a>สมาชิก</a>
    </Link>

    <AdminOnly>
      <Link href={CLASSROOM_JOIN_REQUEST_PAGE} prefetch>
        <a>คำขอเข้าร่วม</a>
      </Link>
    </AdminOnly>
  </ActivityPanel>
)

ClassroomActivityPanel.propTypes = {
  classroomCreatorID: PropTypes.string.isRequired,
  currentUserID: PropTypes.string.isRequired,
  classroomID: PropTypes.string.isRequired
}

export default ClassroomActivityPanel
