/** ==================================================================================
 * Actions
 ================================================================================== */
export const SHOW_EDIT_POST_COMPONENT_MODAL = 'SHOW_EDIT_POST_COMPONENT_MODAL'
export const HIDE_EDIT_POST_COMPONENT_MODAL = 'HIDE_EDIT_POST_COMPONENT_MODAL'

/** ==================================================================================
 * @type reducer
 * @desc Toggle edit post modal.
 * @return object
 ================================================================================== */
export default (state = false, action) => {
  switch (action.type) {
    case SHOW_EDIT_POST_COMPONENT_MODAL:
      return action.payload
    case HIDE_EDIT_POST_COMPONENT_MODAL:
      return action.payload
    default:
      return state
  }
}

/** ==================================================================================
 * @name showEditPostComponentModal()
 * @desc return TRUE, in order to show the edit post component modal
 * @param order : Component rendering order
 * @param type : Component type
 * @return object
 ================================================================================== */
export const showEditPostComponentModal = (type, order) => ({
  type: SHOW_EDIT_POST_COMPONENT_MODAL,
  payload: {
    isShowing: true,
    type,
    order
  }
})

/** ==================================================================================
 * @name hideEditPostComponentModal()
 * @desc return FALSE, in order to close the edit post component modal
 * @return object
 ================================================================================== */
export const hideEditPostComponentModal = () => ({
  type: HIDE_EDIT_POST_COMPONENT_MODAL,
  payload: {
    isShowing: false
  }
})
