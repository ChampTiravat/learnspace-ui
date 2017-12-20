import {
  SHOW_ADD_POST_COMPONENT_MODAL,
  HIDE_ADD_POST_COMPONENT_MODAL
} from "../constants/actions/post-editor";

/**
 * @desc Toggle post removal confirmation modal. Depending on this reducer's state
 */
export default (state = false, action) => {
  switch (action.type) {
    case SHOW_ADD_POST_COMPONENT_MODAL:
      return action.payload;
    case HIDE_ADD_POST_COMPONENT_MODAL:
      return action.payload;
    default:
      return state;
  }
};
