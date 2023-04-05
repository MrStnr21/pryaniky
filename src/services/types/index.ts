import { Dispatch } from "react";
import { TAuthState } from "../reducers/authorization";
import { store } from "../store";

import { TAuthorizationActions } from "../actions/authorization";
import { TGetDocActions } from "../actions/data-doc";
import { TDocState } from "../reducers/data-doc";

export type TStore = {
  auth: TAuthState;
  documents: TDocState;
};

export type RootState = ReturnType<typeof store.getState>;

export type TApplicationActions = TAuthorizationActions | TGetDocActions;

export type AppDispatch = Dispatch<TApplicationActions>;
