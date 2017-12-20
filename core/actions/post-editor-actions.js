import {
  SHOW_POST_COMPONENTS_SELECTOR_MODAL,
  HIDE_POST_COMPONENTS_SELECTOR_MODAL,
  SHOW_ADD_POST_COMPONENT_MODAL,
  HIDE_ADD_POST_COMPONENT_MODAL
} from "../constants/actions/post-editor";

/**
 * @desc qreturn TRUE, in order to show the modal
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

/**
 * @desc return TRUE, in order to show the add post component modal
 * @return object
 */
export const showAddPostComponentModal = type => ({
  type: SHOW_ADD_POST_COMPONENT_MODAL,
  payload: {
    isShowing: true,
    type
  }
});

/**
 * @desc return FALSE, in order to close the add post component modal
 * @return object
 */
export const hideAddPostComponentModal = () => ({
  type: HIDE_ADD_POST_COMPONENT_MODAL,
  payload: false
});
