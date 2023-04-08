import { Dispatch } from "react";
import { Action, ActionCreator } from "redux";
import { ThunkAction } from "redux-thunk";

import { store } from "../store";

import { TAuthorizationActions } from "../actions/authorization";
import { TGetDocActions } from "../actions/data-doc";
import { TAddDocActions } from "../actions/add-doc";
import { TDeleteDocActions } from "../actions/delete-doc";
import { TEditDocActions } from "../actions/edit-doc";

import { TAuthState } from "../reducers/authorization";
import { TDocState } from "../reducers/data-doc";
import { TAddDocState } from "../reducers/add-doc";
import { TDeleteDocState } from "../reducers/delete-doc";
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

export type AppThunk<TReturn = void> = ActionCreator<
  ThunkAction<TReturn, Action, RootState, TApplicationActions>
>;

export type AppDispatch = Dispatch<TApplicationActions>;
