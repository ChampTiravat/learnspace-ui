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
      let counter = 0;
      return state
        .filter(component => component.order !== action.payload.order)
        .reduce((totalComponent, nextComponent) => {
          nextComponent.order = counter++;
          return totalComponent.concat(nextComponent);
        }, []);

    case RESET_POST:
      return [];

    case INITIALIZE_POST_TO_EDIT:
    default:
      return state;
  }
};
