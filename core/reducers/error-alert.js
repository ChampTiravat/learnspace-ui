export const SHOW_ERROR_ALERT = 'SHOW_ERROR_ALERT'
export const HIDE_ERROR_ALERT = 'HIDE_ERROR_ALERT'

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

/**
 * @name showErrorAlert()
 * @desc Show error alert when GraphQL Mutation(s) has failed
 */
export const showErrorAlert = message => ({
  type: SHOW_ERROR_ALERT,
  payload: {
    show: true,
    message
  }
})

/**
 * @name hideErrorAlert()
 * @desc Hide loading modal after clicked on error alert
 */
export const hideErrorAlert = () => ({
  type: HIDE_ERROR_ALERT,
  payload: {
    show: false,
    message: ''
  }
})
