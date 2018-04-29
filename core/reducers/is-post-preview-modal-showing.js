/** ==================================================================================
 * Actions
 ================================================================================== */
export const SHOW_POST_PREVIEW_MODAL = 'SHOW_POST_PREVIEW_MODAL'
export const HIDE_POST_PREVIEW_MODAL = 'HIDE_POST_PREVIEW_MODAL'

/** ==================================================================================
 * @type reducer
 * @desc Toggle post preview modal. Depending on this reducer's state
 * @return boolean
 ================================================================================== */
export default (state = false, action) => {
  switch (action.type) {
    case SHOW_POST_PREVIEW_MODAL:
      return action.payload
    case HIDE_POST_PREVIEW_MODAL:
      return action.payload
    default:
      return state
  }
}

/** ==================================================================================
 * @name showPostPreviewModal()
 * @desc Show post preview modal
 * @return boolean
 ================================================================================== */
export const showPostPreviewModal = () => ({
  type: SHOW_POST_PREVIEW_MODAL,
  payload: true
})

/** ==================================================================================
 * @name hidePostPreviewModal()
 * @desc Hide post preview modal
 * @return boolean
 ================================================================================== */
export const hidePostPreviewModal = () => ({
  type: HIDE_POST_PREVIEW_MODAL,
  payload: false
})
