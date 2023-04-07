import { loginApi } from "../../components/utils/auth-api";

import { TUser } from "../types/data";
import { AppDispatch } from "../types";
import { AppThunk } from "../types";

const LOGIN_REQUSET = "LOGIN_REQUSET";
const LOGIN_SUCCESS = "LOGIN_SUCCESS";
const LOGIN_ERROR = "LOGIN_ERROR";

const LOGOUT = "LOGOUT";

export interface ILoginRequestAction {
  readonly type: typeof LOGIN_REQUSET;
}

export interface ILoginSuccessAction {
  readonly type: typeof LOGIN_SUCCESS;
  user: TUser;
}

export interface ILoginErrorAction {
  readonly type: typeof LOGIN_ERROR;
}

export interface ILogout {
  readonly type: typeof LOGOUT;
}

export type TAuthorizationActions =
  | ILoginRequestAction
  | ILoginSuccessAction
  | ILoginErrorAction
  | ILogout;

//экшн логина
const loginAction: AppThunk = (userInfo: { [name: string]: string }) => {
  return function (dispatch: AppDispatch) {
    dispatch({
      type: LOGIN_REQUSET,
    });

    loginApi(userInfo)
      .then((res) => {
        if (!res.error_code) {
          localStorage.setItem("x-auth", res.data?.token + userInfo.name);
          dispatch({
            type: LOGIN_SUCCESS,
            user: res.user,
          });
        } else {
          console.log(res.error_code);
          dispatch({
            type: LOGIN_ERROR,
          });
        }
      })
      .catch((err: { message: string }) => {
        console.log(err.message);
        dispatch({
          type: LOGIN_ERROR,
        });
      });
  };
};

//экшн разлогина
const logoutAction: AppThunk = () => {
  return function (dispatch: AppDispatch) {
    localStorage.removeItem("x-auth");
    dispatch({ type: LOGOUT });
  };
};

export {
  LOGIN_REQUSET,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  LOGOUT,
  loginAction,
  logoutAction,
};
