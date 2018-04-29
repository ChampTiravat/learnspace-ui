/** ==================================================================================
 * Actions
 ================================================================================== */
export const SHOW_CHATROOM_MODAL = 'SHOW_CHATROOM_MODAL'
export const HIDE_CHATROOM_MODAL = 'HIDE_CHATROOM_MODAL'

/** ==================================================================================
 * @type reducer
 * @desc Toggle chatroom modal. Depending on this reducer's state
 * @return boolean
 ================================================================================== */
export default (state = false, action) => {
  switch (action.type) {
    case SHOW_CHATROOM_MODAL:
      return action.payload
    case HIDE_CHATROOM_MODAL:
      return action.payload
    default:
      return state
  }
}

/** ==================================================================================
 * @name showChatroomModal()
 * @desc return TRUE, in order to show the modal
 * @return object
 ================================================================================== */
export const showChatroomModal = () => ({
  type: SHOW_CHATROOM_MODAL,
  payload: true
})

/** ==================================================================================
 * @name hideChatroomModal()
 * @desc return FALSE, in order to close the modal
 * @return object
 ================================================================================== */
export const hideChatroomModal = () => ({
  type: HIDE_CHATROOM_MODAL,
  payload: false
})
