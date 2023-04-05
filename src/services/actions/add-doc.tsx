import { addNewDocApi } from "../../components/utils/api";
import { AppDispatch } from "../types";

import { TDoc } from "../types/data";

const ADD_DOC_REQUEST = "ADD_DOC_REQUEST";
const ADD_DOC_SUCCESS = "ADD_DOC_SUCCESS";
const ADD_DOC_ERROR = "ADD_DOC_ERROR";

export interface IAddDocRequestAction {
  readonly type: typeof ADD_DOC_REQUEST;
}

export interface IAddDocSuccessAction {
  readonly type: typeof ADD_DOC_SUCCESS;
  document: TDoc;
}

export interface IAddDocErrorAction {
  readonly type: typeof ADD_DOC_ERROR;
}

export type TAddDocActions =
  | IAddDocRequestAction
  | IAddDocSuccessAction
  | IAddDocErrorAction;

//экшн добавления нового документа

const addDocAction: any = (docInfo: TDoc) => {
  return function (dispatch: AppDispatch) {
    dispatch({
      type: ADD_DOC_REQUEST,
    });

    addNewDocApi(docInfo)
      .then((res) => {
        if (!res.error_code) {
          dispatch({
            type: ADD_DOC_SUCCESS,
            document: res.document,
          });
        } else {
          console.log(res.error_code);
          dispatch({
            type: ADD_DOC_ERROR,
          });
        }
      })
      .catch((err: { message: string }) =>
        dispatch({
          type: ADD_DOC_ERROR,
        })
      );
  };
};

export { ADD_DOC_REQUEST, ADD_DOC_SUCCESS, ADD_DOC_ERROR, addDocAction };
