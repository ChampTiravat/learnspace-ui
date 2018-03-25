import React from 'react'
import Link from 'next/link'

import ActivityPanel from '../ActivityPanel'
import {
  CREATE_POST_PAGE,
  EDIT_CLASSROOM_PAGE,
  CLASSROOM_MEMBER_PAGE,
  CLASSROOM_CHATROOM_PAGE,
  CLASSROOM_JOIN_REQUEST_PAGE
} from '../../constants/endpoints/ui'

/**
 * @name ClassroomActivityPanel
 * @desc Showing a navigation menu associated to classroom page
 * @prop { classroomID } [REDUX] : Classroom ID
 * @prop { currentUserID } [REDUX] : Current logged-in user
 * @prop { classroomCreatorID } [REDUX] : Creator of the classroom
 */
const ClassroomActivityPanel = ({
  classroomCreatorID,
  currentUserID,
  classroomID
}) => (
  <ActivityPanel>
    <Link href={CLASSROOM_CHATROOM_PAGE} prefetch>
      <a>ห้องแชท</a>
    </Link>

    {classroomCreatorID === currentUserID ? (
      // hide this if current user is not classroom's admin
      <Link
        href={{ pathname: CREATE_POST_PAGE, query: { classroomID } }}
        prefetch
      >
        <a>สร้างโพสใหม่</a>
      </Link>
    ) : null}

    {classroomCreatorID === currentUserID ? (
      // hide this if current user is not classroom's admin
      <Link href={EDIT_CLASSROOM_PAGE} prefetch>
        <a>แก้ไขข้อมูลห้องเรียน</a>
      </Link>
    ) : null}

    {classroomCreatorID === currentUserID ? (
      // hide this if current user is not classroom's admin
      <a onClick={() => alert('Hello')}>เพิ่มสมาชิกใหม่</a>
    ) : null}

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
