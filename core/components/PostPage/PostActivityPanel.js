import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";

import { EDIT_POST_PAGE } from "../../constants/endpoints/ui";
import ActivityPanel from "../ActivityPanel";

const PostActivityPanel = ({ showPostRMModal }) => (
  <ActivityPanel>
    <Link
      href={{ pathname: EDIT_POST_PAGE, query: { id: "1525651231" } }}
      prefetch
    >
      <a>แก้ไขเนื้อหาโพส</a>
    </Link>
    <a onClick={() => showPostRMModal()}>ลบโพส</a>
  </ActivityPanel>
);

PostActivityPanel.propTypes = {
  showPostRMModal: PropTypes.func.isRequired
};

export default PostActivityPanel;
