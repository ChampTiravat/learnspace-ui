/** ==================================================================================
 * Actions
 ================================================================================== */
export const SHOW_POST_COMPONENTS_SELECTOR_MODAL = 'SHOW_POST_COMPONENTS_SELECTOR_MODAL'
export const HIDE_POST_COMPONENTS_SELECTOR_MODAL = 'HIDE_POST_COMPONENTS_SELECTOR_MODAL'

/** ==================================================================================
 * @type reducer
 * @desc Toggle post components selector modal.
 * @return boolean
 ================================================================================== */
export default (state = false, action) => {
  switch (action.type) {
    case SHOW_POST_COMPONENTS_SELECTOR_MODAL:
      return action.payload
    case HIDE_POST_COMPONENTS_SELECTOR_MODAL:
      return action.payload
    default:
      return state
  }
}

/** ==================================================================================
 * @name showPostComponentsSelectorModal()
 * @desc return TRUE, in order to show the modal
 * @return boolean
 ================================================================================== */
export const showPostComponentsSelectorModal = () => ({
  type: SHOW_POST_COMPONENTS_SELECTOR_MODAL,
  payload: true
})

/** ==================================================================================
 * @name hidePostComponentsSelectorModal()
 * @desc return FALSE, in order to close the modal
 * @return boolean
 ================================================================================== */
export const hidePostComponentsSelectorModal = () => ({
  type: HIDE_POST_COMPONENTS_SELECTOR_MODAL,
  payload: false
})
