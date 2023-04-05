import { combineReducers } from "redux";

import { authorizationReducer } from "./authorization";
import { getDocReducer } from "./data-doc";

const rootReducer = combineReducers({
  auth: authorizationReducer,
  documents: getDocReducer,
});

export { rootReducer };
