import { reducer as formReducer } from "redux-form";

import user from "./user";
import searchBarPanel from "./searchbar-panel";
import postRemovalConfirmationModal from "./post-removal-confirmation-modal.js";

// import other reducers into the object below
export default {
  user,
  searchBarPanel,
  postRemovalConfirmationModal,
  form: formReducer,
  test: () => "hello"
};
