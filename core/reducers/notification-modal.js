import {
  SHOW_NOTIFICATION_MODAL,
  HIDE_NOTIFICATION_MODAL
} from "../constants/actions/notification-modal";

/**
 * @desc Toggle notification modal. Depending on this reducer's state
 */
export default (state = false, action) => {
  switch (action.type) {
    case SHOW_NOTIFICATION_MODAL:
      return action.payload;
    case HIDE_NOTIFICATION_MODAL:
      return action.payload;
    default:
      return state;
  }
};
