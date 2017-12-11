import {
  SHOW_SEARCHBAR_PANEL,
  HIDE_SEARCHBAR_PANEL
} from "../constants/actions/searchbar-panel";

export const showSearchPanel = () => ({
  type: SHOW_SEARCHBAR_PANEL,
  payload: true
});

export const hideSearchPanel = () => ({
  type: HIDE_SEARCHBAR_PANEL,
  payload: false
});
