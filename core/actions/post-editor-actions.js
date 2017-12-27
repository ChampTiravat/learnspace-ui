import {
  SHOW_POST_COMPONENTS_SELECTOR_MODAL,
  HIDE_POST_COMPONENTS_SELECTOR_MODAL,
  SHOW_ADD_POST_COMPONENT_MODAL,
  HIDE_ADD_POST_COMPONENT_MODAL,
  INITIALIZE_POST_TO_EDIT,
  REMOVE_COMPONENT,
  ADD_COMPONENT
} from "../constants/actions/post-editor";

/**
 * @desc qreturn TRUE, in order to show the modal
 * @return object
 */
export const showPostComponentsSelectorModal = () => ({
  type: SHOW_POST_COMPONENTS_SELECTOR_MODAL,
  payload: true
});

/**
 * @desc return FALSE, in order to close the modal
 * @return object
 */
export const hidePostComponentsSelectorModal = () => ({
  type: HIDE_POST_COMPONENTS_SELECTOR_MODAL,
  payload: false
});

/**
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
 * @desc return FALSE, in order to close the add post component modal
 * @return object
 */
export const hideAddPostComponentModal = () => ({
  type: HIDE_ADD_POST_COMPONENT_MODAL,
  payload: false
});

/**
 * @desc Initialize a post with empty content
 */
export const initializePost = () => ({
  type: INITIALIZE_POST_TO_EDIT
});

/**
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
