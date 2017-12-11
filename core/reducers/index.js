import { reducer as formReducer } from "redux-form";

import user from "./user";
import searchBarPanel from "./searchbar-panel";

// import other reducers into the object below
export default {
  user,
  searchBarPanel,
  form: formReducer,
  test: () => "hello"
};
