/** ==================================================================================
 * Actions
 ================================================================================== */
export const SHOW_NOTIFICATION_MODAL = 'SHOW_NOTIFICATION_MODAL'
export const HIDE_NOTIFICATION_MODAL = 'HIDE_NOTIFICATION_MODA'

/** ==================================================================================
 * @type reducer
 * @desc Toggle notification modal.
 * @return boolean
 ================================================================================== */
export default (state = false, action) => {
  switch (action.type) {
    case SHOW_NOTIFICATION_MODAL:
      return action.payload
    case HIDE_NOTIFICATION_MODAL:
      return action.payload
    default:
      return state
  }
}

/** ==================================================================================
 * @name showNotificationModal()
 * @desc return TRUE, in order to show the modal
 * @return boolean
 ================================================================================== */
export const showNotificationModal = () => ({
  type: SHOW_NOTIFICATION_MODAL,
  payload: true
})

/** ==================================================================================
 * @desc return TRUE, in order to show the modal
 * @desc return FALSE, in order to close the modal
 * @return boolean
 ================================================================================== */
export const hideNotificationModal = () => ({
  type: HIDE_NOTIFICATION_MODAL,
  payload: false
})
