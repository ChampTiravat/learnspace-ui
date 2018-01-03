import {
  INITIALIZE_POST_TO_EDIT,
  REMOVE_COMPONENT,
  ADD_COMPONENT,
  RESET_POST
} from "../constants/actions/post-editor";

export default (state = [], action) => {
  switch (action.type) {
    case ADD_COMPONENT:
      return state.concat(action.payload);

    case REMOVE_COMPONENT:
      return state.filter(
        component => component.order !== action.payload.order
      );

    case RESET_POST:
      return [];

    case INITIALIZE_POST_TO_EDIT:
    default:
      return state;
  }
};
