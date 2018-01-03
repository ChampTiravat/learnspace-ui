import {
  SHOW_POST_PREVIEW_MODAL,
  HIDE_POST_PREVIEW_MODAL
} from "../constants/actions/post-editor";

/**
 * @desc Toggle post preview modal. Depending on this reducer's state
 */
export default (state = false, action) => {
  switch (action.type) {
    case SHOW_POST_PREVIEW_MODAL:
      return action.payload;
    case HIDE_POST_PREVIEW_MODAL:
      return action.payload;
    default:
      return state;
  }
};
