import {
  SHOW_POST_REMOVAL_CONFIRMATION_MODAL,
  HIDE_POST_REMOVAL_CONFIRMATION_MODAL
} from "../constants/actions/post-page";

/**
 * @desc return TRUE, in order to show the modal
 * @return object
 */
export const showPostRemovalConfirmationModal = () => ({
  type: SHOW_POST_REMOVAL_CONFIRMATION_MODAL,
  payload: true
});

/**
 * @desc return FALSE, in order to close the modal
 * @return object
 */
export const hidePostRemovalConfirmationModal = () => ({
  type: HIDE_POST_REMOVAL_CONFIRMATION_MODAL,
  payload: false
});
