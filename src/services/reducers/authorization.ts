import {
  LOGIN_REQUSET,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  LOGOUT,
  TAuthorizationActions,
} from "../actions/authorization";

import { TUser } from "../types/data";

export type TAuthState = {
  user: TUser | null;

  loginSuccess: boolean;
  loginRequest: boolean;
  loginError: boolean;
};

const authInitialState: TAuthState = {
  user: null,

  loginSuccess: false,
  loginRequest: false,
  loginError: false,
};

function authorizationReducer(
  state = authInitialState,
  action: TAuthorizationActions
) {
  switch (action.type) {
    //экшены авторизации
    case LOGIN_REQUSET: {
      return {
        ...state,
        loginRequest: true,
        loginError: false,
      };
    }
    case LOGIN_SUCCESS: {
      return {
        ...state,
        loginSuccess: true,
        loginRequest: false,
        loginError: false,
      };
    }
    case LOGIN_ERROR: {
      return {
        ...state,
        loginRequest: false,
        loginError: true,
      };
    }
    case LOGOUT: {
      return {
        ...state,
        loginSuccess: false,
      };
    }
    default:
      return state;
  }
}

export { authorizationReducer };
