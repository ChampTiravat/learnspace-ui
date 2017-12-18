import {
  SHOW_POST_REMOVAL_CONFIRMATION_MODAL,
  HIDE_POST_REMOVAL_CONFIRMATION_MODAL
} from "../constants/actions/post-page";

/**
 * @desc Toggle post removal confirmation modal. Depending on this reducer's state
 */
export default (state = false, action) => {
  switch (action.type) {
    case SHOW_POST_REMOVAL_CONFIRMATION_MODAL:
      return action.payload;
    case HIDE_POST_REMOVAL_CONFIRMATION_MODAL:
      return action.payload;
    default:
      return state;
  }
};
