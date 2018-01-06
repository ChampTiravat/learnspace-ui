import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";

import ActivityPanel from "../ActivityPanel";

const PostActivityPanel = ({ showPostRMModal }) => (
  <ActivityPanel>
    <Link>
      <a>แก้ไขเนื้อหาโพส</a>
    </Link>
    <a onClick={() => showPostRMModal()}>ลบโพส</a>
  </ActivityPanel>
);

PostActivityPanel.propTypes = {
  showPostRMModal: PropTypes.func.isRequired
};

export default PostActivityPanel;
