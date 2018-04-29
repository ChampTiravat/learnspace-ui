/** ==================================================================================
 * Actions
 ================================================================================== */
export const SHOW_ADD_POST_COMPONENT_MODAL = 'SHOW_ADD_POST_COMPONENT_MODAL'
export const HIDE_ADD_POST_COMPONENT_MODAL = 'HIDE_ADD_POST_COMPONENT_MODAL'

/** ==================================================================================
 * @type reducer
 * @desc Toggle add post component modal.
 * @return object
 ================================================================================== */
export default (state = false, action) => {
  switch (action.type) {
    case SHOW_ADD_POST_COMPONENT_MODAL:
      return action.payload
    case HIDE_ADD_POST_COMPONENT_MODAL:
      return action.payload
    default:
      return state
  }
}

/** ==================================================================================
 * @name showaddPostComponentMOdal()
 * @desc return TRUE, in order to show the add post component modal
 * @param type [String] : type of the component which will be added to the post
 * @return object
 ================================================================================== */
export const showAddPostComponentModal = type => ({
  type: SHOW_ADD_POST_COMPONENT_MODAL,
  payload: {
    isShowing: true,
    type
  }
})

/** ==================================================================================
 * @name hideAddPostComponentModal()
 * @desc return FALSE, in order to close the add post component modal
 * @return object
 ================================================================================== */
export const hideAddPostComponentModal = () => ({
  type: HIDE_ADD_POST_COMPONENT_MODAL,
  payload: {
    isShowing: false
  }
})
