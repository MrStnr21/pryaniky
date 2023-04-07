import { Dispatch } from "react";
import { TAuthState } from "../reducers/authorization";
import { store } from "../store";

import { TAuthorizationActions } from "../actions/authorization";
import { TGetDocActions } from "../actions/data-doc";
import { TDocState } from "../reducers/data-doc";
import { TAddDocActions } from "../actions/add-doc";
import { TAddDocState } from "../reducers/add-doc";
import { TDeleteDocActions } from "../actions/delete-doc";
import { TDeleteDocState } from "../reducers/delete-doc";
import { TEditDocActions } from "../actions/edit-doc";
import { TEditDocState } from "../reducers/edit-doc";

export type TStore = {
  auth: TAuthState;
  documents: TDocState;
  addDocument: TAddDocState;
  deleteDocument: TDeleteDocState;
  editDocument: TEditDocState;
};

export type RootState = ReturnType<typeof store.getState>;

export type TApplicationActions =
  | TAuthorizationActions
  | TGetDocActions
  | TAddDocActions
  | TDeleteDocActions
  | TEditDocActions;

export type AppDispatch = Dispatch<TApplicationActions>;
