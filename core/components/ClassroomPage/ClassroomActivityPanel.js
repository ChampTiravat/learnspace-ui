import React from "react";
import Link from "next/link";

import ActivityPanel from "../ActivityPanel";
import {
  CREATE_POST_PAGE,
  EDIT_CLASSROOM_PAGE,
  CLASSROOM_MEMBER_PAGE,
  CLASSROOM_JOIN_REQUEST_PAGE
} from "../../constants/endpoints/ui";

/**
 * @name ClassroomActivityPanel
 * @desc Showing a navigation menu associated to classroom page
 */
const ClassroomActivityPanel = () => (
  <ActivityPanel>
    <Link href={CREATE_POST_PAGE} prefetch>
      <a>สร้างโพสใหม่</a>
    </Link>
    <Link>
      <a>เพิ่มการสอบ</a>
    </Link>
    <Link href={EDIT_CLASSROOM_PAGE} prefetch>
      <a>แก้ไขข้อมูลห้องเรียน</a>
    </Link>
    <Link href={CLASSROOM_MEMBER_PAGE} prefetch>
      <a>สมาชิก</a>
    </Link>
    <Link href={CLASSROOM_JOIN_REQUEST_PAGE} prefetch>
      <a>คำขอเข้าร่วม</a>
    </Link>
  </ActivityPanel>
);

export default ClassroomActivityPanel;
