import { reducer as formReducer } from "redux-form";

import user from "./user";

// import other reducers into the object below
export default {
  user,
  form: formReducer,
  test: () => "hello"
};
