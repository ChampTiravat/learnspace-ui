import {
  SHOW_EDIT_POST_COMPONENT_MODAL,
  HIDE_EDIT_POST_COMPONENT_MODAL
} from "../constants/actions/post-editor";

/**
 * @desc Toggle edit post modal. Depending on this reducer's state
 */
export default (state = false, action) => {
  switch (action.type) {
    case SHOW_EDIT_POST_COMPONENT_MODAL:
      return action.payload;
    case HIDE_EDIT_POST_COMPONENT_MODAL:
      return action.payload;
    default:
      return state;
  }
};
