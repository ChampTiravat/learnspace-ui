import {
  SHOW_CHATROOM_MODAL,
  HIDE_CHATROOM_MODAL
} from "../constants/actions/chatroom-modal";

/**
 * @desc return TRUE, in order to show the modal
 * @return object
 */
export const showChatroomModal = () => ({
  type: SHOW_CHATROOM_MODAL,
  payload: true
});

/**
 * @desc return FALSE, in order to close the modal
 * @return object
 */
export const hideChatroomModal = () => ({
  type: HIDE_CHATROOM_MODAL,
  payload: false
});
