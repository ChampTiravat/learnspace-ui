import {
  SHOW_POST_COMPONENTS_SELECTOR_MODAL,
  HIDE_POST_COMPONENTS_SELECTOR_MODAL
} from "../constants/actions/post-editor";

/**
 * @desc Toggle post components selector modal. Depending on this reducer's state
 */
export default (state = false, action) => {
  switch (action.type) {
    case SHOW_POST_COMPONENTS_SELECTOR_MODAL:
      return action.payload;
    case HIDE_POST_COMPONENTS_SELECTOR_MODAL:
      return action.payload;
    default:
      return state;
  }
};
