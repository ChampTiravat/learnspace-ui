import {
  SHOW_POST_COMPONENTS_SELECTOR_MODAL,
  HIDE_POST_COMPONENTS_SELECTOR_MODAL,
  SHOW_ADD_POST_COMPONENT_MODAL,
  HIDE_ADD_POST_COMPONENT_MODAL,
  INITIALIZE_POST_TO_EDIT,
  EDIT_POST_COMPONENT,
  REMOVE_COMPONENT,
  ADD_COMPONENT,
  RESET_POST,
  SHOW_POST_PREVIEW_MODAL,
  HIDE_POST_PREVIEW_MODAL,
  SHOW_EDIT_POST_COMPONENT_MODAL,
  HIDE_EDIT_POST_COMPONENT_MODAL
} from "../constants/actions/post-editor";

/**
 * @name showPostComponentsSelectorModal()
 * @desc return TRUE, in order to show the modal
 * @return object
 */
export const showPostComponentsSelectorModal = () => ({
  type: SHOW_POST_COMPONENTS_SELECTOR_MODAL,
  payload: true
});

/**
 * @name hidePostComponentsSelectorModal()
 * @desc return FALSE, in order to close the modal
 * @return object
 */
export const hidePostComponentsSelectorModal = () => ({
  type: HIDE_POST_COMPONENTS_SELECTOR_MODAL,
  payload: false
});

/**
 * @name showaddPostComponentMOdal()
 * @desc return TRUE, in order to show the add post component modal
 * @return object
 */
export const showAddPostComponentModal = type => ({
  type: SHOW_ADD_POST_COMPONENT_MODAL,
  payload: {
    isShowing: true,
    type
  }
});

/**
 * @name hideAddPostComponentModal()
 * @desc return FALSE, in order to close the add post component modal
 * @return object
 */
export const hideAddPostComponentModal = () => ({
  type: HIDE_ADD_POST_COMPONENT_MODAL,
  payload: {
    isShowing: false
  }
});

/**
 * @name initializePost()
 * @desc Initialize a post with empty content
 */
export const initializePost = () => ({
  type: INITIALIZE_POST_TO_EDIT
});

/**
 * @name addNewPostComponent()
 * @desc Append a component to a post
 * @param order : A component rendering order
 * @param type  : Component type
 * @param data  : Component data associated to component type
 */
export const addNewPostComponent = ({ order, type, data }) => ({
  type: ADD_COMPONENT,
  payload: {
    order,
    type,
    data
  }
});

/**
 * @name removePostComponent()
 * @desc Remove a component from a post by specifying a rendering order and a type of the component
 * @param order : A component rendering order
 */
export const removePostComponent = order => ({
  type: REMOVE_COMPONENT,
  payload: {
    order
  }
});

/**
 * @name resetPost()
 * @desc Remove every components from a post
 */
export const resetPost = () => ({
  type: RESET_POST
});

/**
 * @name showPostPreviewModal()
 * @desc Show post preview modal
 */
export const showPostPreviewModal = () => ({
  type: SHOW_POST_PREVIEW_MODAL,
  payload: true
});

/**
 * @name hidePostPreviewModal()
 * @desc Hide post preview modal
 */
export const hidePostPreviewModal = () => ({
  type: HIDE_POST_PREVIEW_MODAL,
  payload: false
});

/**
 * @name editPostComponent()
 * @desc Edit an existing component in the receipe
 * @param { order } : Component rendering order
 * @param { type } : Component type
 * @param { newData } : New data for the component
 * @return Object
 */
export const editPostComponent = ({ order, type, newData }) => ({
  type: EDIT_POST_COMPONENT,
  payload: {
    order,
    type,
    newData
  }
});

/**
 * @name showEditPostComponentModal()
 * @desc return TRUE, in order to show the edit post component modal
 * @param order : Component rendering order
 * @param type : Component type
 * @return object
 */
export const showEditPostComponentModal = (type, order) => ({
  type: SHOW_EDIT_POST_COMPONENT_MODAL,
  payload: {
    isShowing: true,
    type,
    order
  }
});

/**
 * @name hideEditPostComponentModal()
 * @desc return FALSE, in order to close the edit post component modal
 * @return object
 */
export const hideEditPostComponentModal = () => ({
  type: HIDE_EDIT_POST_COMPONENT_MODAL,
  payload: {
    isShowing: false
  }
});
