import { reducer as formReducer } from "redux-form";

import isPostComponentsSelectorModalShowing from "./post-components-selector-modal";
import isAddPostComponentModalShowing from "./is-add-post-component-modal-showing";
import postRemovalConfirmationModal from "./post-removal-confirmation-modal";
import editingPostReceipe from "./editing-post-receipe";
import notificationModal from "./notification-modal";
import searchBarPanel from "./searchbar-panel";
import chatroomModal from "./chatroom-modal";
import user from "./user";

// import other reducers into the object below
export default {
  isPostComponentsSelectorModalShowing,
  isAddPostComponentModalShowing,
  postRemovalConfirmationModal,
  editingPostReceipe,
  notificationModal,
  form: formReducer,
  searchBarPanel,
  chatroomModal,
  user
};
