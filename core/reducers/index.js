import { reducer as formReducer } from 'redux-form'

import classroomInvitationModal from './classroom-invitation-modal'
import editPostComponentModal from './edit-post-component-modal'
import postComponentsSelectorModal from './post-components-selector-modal'
import addPostComponentModal from './add-post-component-modal'
import postRemovalConfirmationModal from './post-removal-confirmation-modal'
import postPreviewModal from './post-preview-modal'
import editingPostReceipe from './editing-post-receipe'
import notificationModal from './notification-modal'
import searchBarPanel from './searchbar-panel'
import mutationStatus from './mutation-status'
import chatroomModal from './chatroom-modal'
import errorAlert from './error-alert'
import user from './user'

export default {
  postRemovalConfirmationModal,
  postComponentsSelectorModal,
  classroomInvitationModal,
  editPostComponentModal,
  addPostComponentModal,
  editingPostReceipe,
  form: formReducer,
  notificationModal,
  postPreviewModal,
  searchBarPanel,
  mutationStatus,
  chatroomModal,
  errorAlert,
  user
}
