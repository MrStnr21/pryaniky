import { Dispatch } from "react";
import { TAuthState } from "../reducers/authorization";
import { store } from "../store";

import { TAuthorizationActions } from "../actions/authorization";
import { TGetDocActions } from "../actions/data-doc";
import { TDocState } from "../reducers/data-doc";
import { TAddDocActions } from "../actions/add-doc";
import { TAddDocState } from "../reducers/add-doc";

export type TStore = {
  auth: TAuthState;
  documents: TDocState;
  addDocument: TAddDocState;
};

export type RootState = ReturnType<typeof store.getState>;

export type TApplicationActions =
  | TAuthorizationActions
  | TGetDocActions
  | TAddDocActions;

export type AppDispatch = Dispatch<TApplicationActions>;
