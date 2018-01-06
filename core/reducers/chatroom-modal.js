import {
  SHOW_CHATROOM_MODAL,
  HIDE_CHATROOM_MODAL
} from "../constants/actions/chatroom-modal";

/**
 * @desc Toggle chatroom modal. Depending on this reducer's state
 */
export default (state = false, action) => {
  switch (action.type) {
    case SHOW_CHATROOM_MODAL:
      return action.payload;
    case HIDE_CHATROOM_MODAL:
      return action.payload;
    default:
      return state;
  }
};
