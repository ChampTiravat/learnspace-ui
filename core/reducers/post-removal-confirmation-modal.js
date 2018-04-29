/** ==================================================================================
 * Actions
 ================================================================================== */
export const SHOW_POST_REMOVAL_CONFIRMATION_MODAL = 'SHOW_POST_REMOVAL_CONFIRMATION_MODAL'
export const HIDE_POST_REMOVAL_CONFIRMATION_MODAL = 'HIDE_POST_REMOVAL_CONFIRMATION_MODAL'

/** ==================================================================================
 * @type reducer
 * @desc Toggle post removal confirmation modal.
 * @return boolean
 ================================================================================== */
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

/** ==================================================================================
 * @name showPostRemovalConfirmationModal()
 * @desc return TRUE, in order to show the modal
 * @return boolean
 ================================================================================== */
export const showPostRemovalConfirmationModal = () => ({
  type: SHOW_POST_REMOVAL_CONFIRMATION_MODAL,
  payload: true
})

/** ==================================================================================
 * @name hidePostRemovalConfirmationModal()
 * @desc return FALSE, in order to close the modal
 * @return boolean
 ================================================================================== */
export const hidePostRemovalConfirmationModal = () => ({
  type: HIDE_POST_REMOVAL_CONFIRMATION_MODAL,
  payload: false
})
