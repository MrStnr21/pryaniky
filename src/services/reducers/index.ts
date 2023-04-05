import { combineReducers } from "redux";

import { authorizationReducer } from "./authorization";
import { getDocReducer } from "./data-doc";
import { addDocReducer } from "./add-doc";

const rootReducer = combineReducers({
  auth: authorizationReducer,
  documents: getDocReducer,
  addDocument: addDocReducer,
});

export { rootReducer };
