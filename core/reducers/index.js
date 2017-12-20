import { reducer as formReducer } from "redux-form";

import postRemovalConfirmationModal from "./post-removal-confirmation-modal";
import isPostComponentsSelectorModalShowing from "./post-components-selector-modal";
import notificationModal from "./notification-modal";
import searchBarPanel from "./searchbar-panel";
import user from "./user";

// import other reducers into the object below
export default {
  postRemovalConfirmationModal,
  isPostComponentsSelectorModalShowing,
  notificationModal,
  form: formReducer,
  searchBarPanel,
  user
};
