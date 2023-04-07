import { AppDispatch } from "../types";

import { getDataDocApi } from "../../components/utils/get-documents-api";
import { TDoc } from "../types/data";

const GET_DOC_REQUEST = "GET_DOC_REQUEST";
const GET_DOC_SUCCESS = "GET_DOC_SUCCESS";
const GET_DOC_ERROR = "GET_DOC_ERROR";

export interface IGetDocRequestAction {
  readonly type: typeof GET_DOC_REQUEST;
}

export interface IGetDocSuccessAction {
  readonly type: typeof GET_DOC_SUCCESS;
  payload: TDoc[];
}

export interface IGetDocErrorAction {
  readonly type: typeof GET_DOC_ERROR;
}

export type TGetDocActions =
  | IGetDocRequestAction
  | IGetDocSuccessAction
  | IGetDocErrorAction;

//экшн получения массива данных для таблицы
const getDataDocAction: any = () => {
  return function (dispatch: AppDispatch) {
    dispatch({
      type: GET_DOC_REQUEST,
    });

    getDataDocApi()
      .then((res) => {
        if (!res.error_code) {
          dispatch({
            type: GET_DOC_SUCCESS,
            payload: res.data,
          });
        } else {
          console.log(res.error_code);
          dispatch({
            type: GET_DOC_ERROR,
          });
        }
      })
      .catch((err: { message: string }) =>
        dispatch({
          type: GET_DOC_ERROR,
        })
      );
  };
};
export { GET_DOC_REQUEST, GET_DOC_SUCCESS, GET_DOC_ERROR, getDataDocAction };
