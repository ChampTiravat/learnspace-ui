import {
  SHOW_POST_COMPONENTS_SELECTOR_MODAL,
  HIDE_POST_COMPONENTS_SELECTOR_MODAL,
  SHOW_ADD_POST_COMPONENT_MODAL,
  HIDE_ADD_POST_COMPONENT_MODAL,
  INITIALIZE_POST_TO_EDIT,
  REMOVE_COMPONENT,
  ADD_COMPONENT,
  RESET_POST
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
 * @param type  : Component type
 */
export const removePostComponent = ({ order, type }) => ({
  type: REMOVE_COMPONENT,
  payload: {
    order,
    type
  }
});

/**
 * @name resetPost()
 * @desc Remove every components from a post
 */
export const resetPost = () => ({
  type: RESET_POST
});
