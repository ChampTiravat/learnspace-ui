import React from "react";
import Link from "next/link";

import ActivityPanel from "../ActivityPanel";
import {
  CREATE_CLASSROOM_PAGE,
  EDIT_PROFILE_PAGE
} from "../../constants/endpoints/ui";

/**
 * @name ProfileActivityPanel
 * @desc Showing a navigation menu associated to profile page
 */
const ProfileActivityPanel = () => (
  <ActivityPanel>
    <Link href={CREATE_CLASSROOM_PAGE} prefetch>
      <a>สร้างห้องเรียนใหม่</a>
    </Link>
    <Link href={EDIT_PROFILE_PAGE} prefetch>
      <a>แก้ไขข้อมูลผู้ใช้งาน</a>
    </Link>
  </ActivityPanel>
);

export default ProfileActivityPanel;
