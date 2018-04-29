/** ==================================================================================
 * Actions
 ================================================================================== */
export const SHOW_ERROR_ALERT = 'SHOW_ERROR_ALERT'
export const HIDE_ERROR_ALERT = 'HIDE_ERROR_ALERT'

/** ==================================================================================
 * @type reducer
 * @desc Display/Hide Error message box
 * @return object
 ================================================================================== */
export default (state = {}, action) => {
  switch (action.type) {
    case SHOW_ERROR_ALERT:
      return action.payload
    case HIDE_ERROR_ALERT:
      return action.payload
    default:
      return state
  }
}

/** ==================================================================================
 * @name showErrorAlert()
 * @desc Show error alert when GraphQL Mutation(s) has failed
 * @param message : Error message to be displayed on the Error Box
 * @return object
 ================================================================================== */
export const showErrorAlert = message => ({
  type: SHOW_ERROR_ALERT,
  payload: {
    show: true,
    message
  }
})

/** ==================================================================================
 * @name hideErrorAlert()
 * @desc Hide loading modal after clicked on error alert
 * @return object
 ================================================================================== */
export const hideErrorAlert = () => ({
  type: HIDE_ERROR_ALERT,
  payload: {
    show: false,
    message: ''
  }
})
