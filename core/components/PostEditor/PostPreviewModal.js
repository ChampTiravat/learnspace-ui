import React from "react";
import PropTypes from "prop-types";

import { renderPostComponent } from "../../helpers/post";
import { ModalBackground, ModalPanel } from "../Modal";
import { Header, Body, Footer } from "../Card";
import { Button } from "../Button";

/**
 * @name PostPreviewModal
 * @desc Show a final rendered components of the current receipe(currently editing in PostEditor)
 * @prop isShowing : A state of this modal used to specify wether to show or hide this modal
 * @prop receipe : A list of components that need to be rendered
 * @prop hidePostPreviewModal : f() to hide this modal
 */
const PostPreviewModal = ({ receipe, isShowing, hidePostPreviewModal }) => (
  <ModalBackground show={isShowing}>
    <ModalPanel style={{ maxWidth: "1400px", paddingTop: "3em" }}>
      <Body>{renderPostComponent(receipe)}</Body>
      <Footer>
        <Button light onClick={hidePostPreviewModal}>
          ปิด
        </Button>
      </Footer>
    </ModalPanel>
  </ModalBackground>
);

PostPreviewModal.propTypes = {
  receipe: PropTypes.array.isRequired,
  isShowing: PropTypes.bool.isRequired,
  hidePostPreviewModal: PropTypes.func.isRequired
};

export default PostPreviewModal;
