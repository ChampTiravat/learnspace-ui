import {
  INITIALIZE_POST_TO_EDIT,
  EDIT_POST_COMPONENT,
  REMOVE_COMPONENT,
  ADD_COMPONENT,
  RESET_POST
} from "../constants/actions/post-editor";

export default (state = [], action) => {
  switch (action.type) {
    case ADD_COMPONENT:
      return state.concat(action.payload);

    case EDIT_POST_COMPONENT:
      const { order, type, newData } = action.payload;
      return state.reduce((totalItems, nextItem) => {
        if (nextItem.order === order && nextItem.type === type) {
          nextItem.data = newData;
        }
        return totalItems.concat(nextItem);
      }, []);

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
      return state;

    default:
      return state;
  }
};
