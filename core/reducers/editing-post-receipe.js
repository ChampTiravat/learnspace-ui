import {
  INITIALIZE_POST_TO_EDIT,
  REMOVE_COMPONENT,
  ADD_COMPONENT
} from "../constants/actions/post-editor";

export default (state = [], action) => {
  switch (action.type) {
    case INITIALIZE_POST_TO_EDIT:
      return state;
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
    default:
      return state;
  }
};
