import { deleteDocApi } from "../../components/utils/documents-actions-api";

import { AppDispatch } from "../types";

const DELETE_DOC_REQUEST = "DELETE_DOC_REQUEST";
const DELETE_DOC_SUCCESS = "DELETE_DOC_SUCCESS";
const DELETE_DOC_ERROR = "DELETE_DOC_ERROR";

export interface IDeleteDocRequestAction {
  readonly type: typeof DELETE_DOC_REQUEST;
}

export interface IDeleteDocSuccessAction {
  readonly type: typeof DELETE_DOC_SUCCESS;
}

export interface IDeleteDocErrorAction {
  readonly type: typeof DELETE_DOC_ERROR;
}

export type TDeleteDocActions =
  | IDeleteDocRequestAction
  | IDeleteDocSuccessAction
  | IDeleteDocErrorAction;

//экшн добавления нового документа

const deleteDocAction: any = (id: string) => {
  return function (dispatch: AppDispatch) {
    dispatch({
      type: DELETE_DOC_REQUEST,
    });

    deleteDocApi(id)
      .then((res) => {
        if (!res.error_code) {
          dispatch({
            type: DELETE_DOC_SUCCESS,
          });
        } else {
          console.log(res.error_code);
          dispatch({
            type: DELETE_DOC_ERROR,
          });
        }
      })
      .catch((err: { message: string }) =>
        dispatch({
          type: DELETE_DOC_ERROR,
        })
      );
  };
};

export {
  DELETE_DOC_REQUEST,
  DELETE_DOC_SUCCESS,
  DELETE_DOC_ERROR,
  deleteDocAction,
};
