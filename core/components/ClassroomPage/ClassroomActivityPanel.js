import React from 'react'
import Link from 'next/link'

import ActivityPanel from '../ActivityPanel'
import {
  CLASSROOM_CHATROOM_PAGE,
  CREATE_POST_PAGE,
  EDIT_CLASSROOM_PAGE,
  CLASSROOM_MEMBER_PAGE,
  CLASSROOM_JOIN_REQUEST_PAGE
} from '../../constants/endpoints/ui'

/**
 * @name ClassroomActivityPanel
 * @desc Showing a navigation menu associated to classroom page
 * @prop { classroomCreatorID } : Creator of the classroom
 * @prop { currentUserID } [REDUX] : Current logged-in user
 */
const ClassroomActivityPanel = ({ classroomCreatorID, currentUserID }) => (
  <ActivityPanel>
    <Link href={CLASSROOM_CHATROOM_PAGE} prefetch>
      <a>ห้องแชท</a>
    </Link>

    {classroomCreatorID === currentUserID ? (
      // hide this if current user is not classroom's admin
      <Link href={CREATE_POST_PAGE} prefetch>
        <a>สร้างโพสใหม่</a>
      </Link>
    ) : null}

    <Link href={EDIT_CLASSROOM_PAGE} prefetch>
      <a>แก้ไขข้อมูลห้องเรียน</a>
    </Link>

    <Link href={CLASSROOM_MEMBER_PAGE} prefetch>
      <a>สมาชิก</a>
    </Link>

    {classroomCreatorID === currentUserID ? (
      // hide this if current user is not classroom's admin
      <Link href={CLASSROOM_JOIN_REQUEST_PAGE} prefetch>
        <a>คำขอเข้าร่วม</a>
      </Link>
    ) : null}
  </ActivityPanel>
)

export default ClassroomActivityPanel
