import { combineReducers } from "redux";

import { authorizationReducer } from "./authorization";
import { getDocReducer } from "./data-doc";
import { addDocReducer } from "./add-doc";
import { deleteDocReducer } from "./delete-doc";

const rootReducer = combineReducers({
  auth: authorizationReducer,
  documents: getDocReducer,
  addDocument: addDocReducer,
  deleteDocument: deleteDocReducer,
});

export { rootReducer };
