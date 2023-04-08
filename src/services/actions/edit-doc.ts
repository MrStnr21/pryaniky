import { addNewDocApi } from "../../components/utils/documents-actions-api";

import { AppDispatch, AppThunk } from "../types";
import { TDoc } from "../types/data";

const EDIT_DOC_REQUEST = "EDIT_DOC_REQUEST";
const EDIT_DOC_SUCCESS = "EDIT_DOC_SUCCESS";
const EDIT_DOC_ERROR = "EDIT_DOC_ERROR";

export interface IEditDocRequestAction {
  readonly type: typeof EDIT_DOC_REQUEST;
}

export interface IEditDocSuccessAction {
  readonly type: typeof EDIT_DOC_SUCCESS;
}

export interface IEditDocErrorAction {
  readonly type: typeof EDIT_DOC_ERROR;
}

export type TEditDocActions =
  | IEditDocRequestAction
  | IEditDocSuccessAction
  | IEditDocErrorAction;

//экшн добавления нового документа

const editDocAction: AppThunk = (docInfo: TDoc) => {
  return function (dispatch: AppDispatch) {
    dispatch({
      type: EDIT_DOC_REQUEST,
    });

    addNewDocApi(docInfo)
      .then((res) => {
        if (!res.error_code) {
          dispatch({
            type: EDIT_DOC_SUCCESS,
          });
        } else {
          console.log(res.error_code);
          dispatch({
            type: EDIT_DOC_ERROR,
          });
        }
      })
      .catch((err: { message: string }) =>
        dispatch({
          type: EDIT_DOC_ERROR,
        })
      );
  };
};

export { EDIT_DOC_REQUEST, EDIT_DOC_SUCCESS, EDIT_DOC_ERROR, editDocAction };
