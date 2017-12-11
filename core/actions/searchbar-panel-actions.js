import {
  SHOW_SEARCHBAR_PANEL,
  HIDE_SEARCHBAR_PANEL
} from "../constants/actions/searchbar-panel";

/**
 * @desc return TRUE in order to show the search result panel
 * @return boolean
 */
export const showSearchPanel = () => ({
  type: SHOW_SEARCHBAR_PANEL,
  payload: true
});

/**
 * @desc return FALSE in order to show the search result panel
 * @return boolean
 */
export const hideSearchPanel = () => ({
  type: HIDE_SEARCHBAR_PANEL,
  payload: false
});
