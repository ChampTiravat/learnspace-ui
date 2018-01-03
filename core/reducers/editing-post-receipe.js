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
      return state.reduce((prevVal, nextVal) => {
        if (
          nextVal.order === action.payload.order &&
          nextVal.type === action.payload.type
        ) {
          nextVal = null;
          prevVal.concat(nextVal);
        }
        return prevVal;
      }, []);

    case RESET_POST:
      return [];

    case INITIALIZE_POST_TO_EDIT:
    default:
      return state;
  }
};
