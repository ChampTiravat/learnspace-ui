/** ==================================================================================
 * Actions
 ================================================================================== */
export const SHOW_SEARCHBAR_PANEL = 'SHOW_SEARCHBAR_PANEL'
export const HIDE_SEARCHBAR_PANEL = 'HIDE_SEARCHBAR_PANEL'

/** ==================================================================================
 * @type reducer
 * @desc Toggle navbar seach result panel.
 * @return boolean
 ================================================================================== */
export default (state = false, action) => {
  switch (action.type) {
    case SHOW_SEARCHBAR_PANEL:
      return action.payload
    case HIDE_SEARCHBAR_PANEL:
      return action.payload
    default:
      return state
  }
}

/** ==================================================================================
 * @name showSearchPanel()
 * @desc return TRUE, in order to show the navbar search result panel
 * @return boolean
 ================================================================================== */
export const showSearchPanel = () => ({
  type: SHOW_SEARCHBAR_PANEL,
  payload: true
})

/** ==================================================================================
 * @name hideSearchPanel()
 * @desc return FALSE, in order to show the navbar search result panel
 * @return boolean
 ================================================================================== */
export const hideSearchPanel = () => ({
  type: HIDE_SEARCHBAR_PANEL,
  payload: false
})
