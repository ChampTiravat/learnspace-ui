import React from "react";
import PropTypes from "prop-types";
import Link from 'next/link'
import { connect } from "react-redux";

import { showPostRemovalConfirmationModal } from "../../actions/post-page-actions";
import ActivityPanel from '../ActivityPanel'

const PostActivityPanel = ({ showPostRMModal }) => (
  <ActivityPanel>
    <Link>
      <a>แก้ไขเนื้อหาโพส</a>
    </Link>
    <a onClick={() => showPostRMModal()}>ลบโพส</a>
  </ActivityPanel>
);

const mapDispatchToProps = dispatch => ({
  showPostRMModal: () => dispatch(showPostRemovalConfirmationModal())
});

export default connect(null, mapDispatchToProps)(PostActivityPanel);
