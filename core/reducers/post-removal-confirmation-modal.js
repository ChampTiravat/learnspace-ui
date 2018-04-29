export const SHOW_POST_REMOVAL_CONFIRMATION_MODAL = 'SHOW_POST_REMOVAL_CONFIRMATION_MODAL'
export const HIDE_POST_REMOVAL_CONFIRMATION_MODAL = 'HIDE_POST_REMOVAL_CONFIRMATION_MODAL'

/**
 * @desc Toggle post removal confirmation modal. Depending on this reducer's state
 */
export default (state = false, action) => {
  switch (action.type) {
    case SHOW_POST_REMOVAL_CONFIRMATION_MODAL:
      return action.payload
    case HIDE_POST_REMOVAL_CONFIRMATION_MODAL:
      return action.payload
    default:
      return state
  }
}

/**
 * @desc return TRUE, in order to show the modal
 * @return object
 */
export const showPostRemovalConfirmationModal = () => ({
  type: SHOW_POST_REMOVAL_CONFIRMATION_MODAL,
  payload: true
})

/**
 * @desc return FALSE, in order to close the modal
 * @return object
 */
export const hidePostRemovalConfirmationModal = () => ({
  type: HIDE_POST_REMOVAL_CONFIRMATION_MODAL,
  payload: false
})
