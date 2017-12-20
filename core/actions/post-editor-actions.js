import {
  SHOW_POST_COMPONENTS_SELECTOR_MODAL,
  HIDE_POST_COMPONENTS_SELECTOR_MODAL
} from "../constants/actions/post-editor";

/**
 * @desc return TRUE, in order to show the modal
 * @return object
 */
export const showPostComponentsSelectorModal = () => ({
  type: SHOW_POST_COMPONENTS_SELECTOR_MODAL,
  payload: true
});

/**
 * @desc return FALSE, in order to close the modal
 * @return object
 */
export const hidePostComponentsSelectorModal = () => ({
  type: HIDE_POST_COMPONENTS_SELECTOR_MODAL,
  payload: false
});
