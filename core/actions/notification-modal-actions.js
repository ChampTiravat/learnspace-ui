import {
  SHOW_NOTIFICATION_MODAL,
  HIDE_NOTIFICATION_MODAL
} from "../constants/actions/notification-modal";

/**
 * @desc return TRUE, in order to show the modal
 * @return object
 */
export const showNotificationModal = () => ({
  type: SHOW_NOTIFICATION_MODAL,
  payload: true
});

/**
 * @desc return FALSE, in order to close the modal
 * @return object
 */
export const hideNotificationModal = () => ({
  type: HIDE_NOTIFICATION_MODAL,
  payload: false
});
