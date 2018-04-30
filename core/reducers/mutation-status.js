/** ==================================================================================
 * Actions
 ================================================================================== */
export const SHOW_LOADING_MODAL = 'SHOW_LOADING_MODAL'
export const HIDE_LOADING_MODAL = 'HIDE_LOADING_MODAL'

/** ==================================================================================
 * @type reducer
 * @desc Display loading icon when performing mutations
 * @return boolean
 ================================================================================== */
export default (state = false, action) => {
  switch (action.type) {
    case SHOW_LOADING_MODAL:
      return true

    case HIDE_LOADING_MODAL:
      return false

    default:
      return state
  }
}

/** ==================================================================================
 * @name showLoadingModal()
 * @desc Show loading modal when performing GraphQL Mutation(s)
 * @return
 ================================================================================== */
export const showLoadingModal = () => ({
  type: SHOW_LOADING_MODAL
})

/** ==================================================================================
 * @name hideLoadingModal()
 * @desc Hide loading modal after GraphQL Mutation(s) operation is done
 ================================================================================== */
export const hideLoadingModal = () => ({
  type: HIDE_LOADING_MODAL
})
