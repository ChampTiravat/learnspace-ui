import {
  SHOW_SEARCHBAR_PANEL,
  HIDE_SEARCHBAR_PANEL
} from "../constants/actions/searchbar-panel";

/**
 * @desc Determine wether to show or hide the navbar search result panel
 */
export default (state = false, action) => {
  switch (action.type) {
    case SHOW_SEARCHBAR_PANEL:
      return action.payload;

    case HIDE_SEARCHBAR_PANEL:
      return action.payload;

    default:
      return state;
  }
};
