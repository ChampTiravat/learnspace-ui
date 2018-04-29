export const SHOW_NOTIFICATION_MODAL = 'SHOW_NOTIFICATION_MODAL'
export const HIDE_NOTIFICATION_MODAL = 'HIDE_NOTIFICATION_MODA'

/**
 * @desc Toggle notification modal. Depending on this reducer's state
 */
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

/**
 * @desc return TRUE, in order to show the modal
 * @return object
 */
export const showNotificationModal = () => ({
  type: SHOW_NOTIFICATION_MODAL,
  payload: true
})

/**
 * @desc return FALSE, in order to close the modal
 * @return object
 */
export const hideNotificationModal = () => ({
  type: HIDE_NOTIFICATION_MODAL,
  payload: false
})
