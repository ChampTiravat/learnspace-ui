import {
  SHOW_CLASSROOM_INVITATION_MODAL,
  HIDE_CLASSROOM_INVITATION_MODAL
} from '../constants/actions/classroom-invitation'

/**
 * @name showClassroomInvitationModal
 * @desc return TRUE, in order to show the modal
 * @return Boolean
 */
export const showClassroomInvitationModal = () => ({
  type: SHOW_CLASSROOM_INVITATION_MODAL,
  payload: true
})

/**
 * @name hideClassroomInvitationModal
 * @desc return FALSE, in order to close the modal
 * @return Boolean
 */
export const hideClassroomInvitationModal = () => ({
  type: HIDE_CLASSROOM_INVITATION_MODAL,
  payload: false
})
