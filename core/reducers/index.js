import { reducer as formReducer } from "redux-form";

import isEditPostComponentModalShowing from "./is-edit-post-component-modal-showing";
import isPostComponentsSelectorModalShowing from "./post-components-selector-modal";
import isAddPostComponentModalShowing from "./is-add-post-component-modal-showing";
import postRemovalConfirmationModal from "./post-removal-confirmation-modal";
import isPostPreviewModalShowing from "./is-post-preview-modal-showing";
import editingPostReceipe from "./editing-post-receipe";
import notificationModal from "./notification-modal";
import searchBarPanel from "./searchbar-panel";
import chatroomModal from "./chatroom-modal";
import user from "./user";

// Attach other reducers into the object below
export default {
  isPostComponentsSelectorModalShowing,
  isEditPostComponentModalShowing,
  isAddPostComponentModalShowing,
  postRemovalConfirmationModal,
  isPostPreviewModalShowing,
  editingPostReceipe,
  notificationModal,
  form: formReducer,
  searchBarPanel,
  chatroomModal,
  user
};
