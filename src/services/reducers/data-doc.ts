import {
  GET_DOC_REQUEST,
  GET_DOC_SUCCESS,
  GET_DOC_ERROR,
} from "../actions/data-doc";

import { TDoc } from "../types/data";
import { TGetDocActions } from "../actions/data-doc";

export type TDocState = {
  document: TDoc | null;
  documentRequest: boolean;
  hasError: boolean;
};

const docInitialState: TDocState = {
  document: null,
  documentRequest: false,
  hasError: false,
};

function getDocReducer(state = docInitialState, action: TGetDocActions) {
  switch (action.type) {
    //экшены авторизации
    case GET_DOC_REQUEST: {
      return {
        ...state,
        documentRequest: true,
        hasError: false,
      };
    }
    case GET_DOC_SUCCESS: {
      return {
        ...state,
        document: action.payload, // тут проблема
        documentRequest: false,
        hasError: false,
      };
    }
    case GET_DOC_ERROR: {
      return {
        ...state,
        documentRequest: false,
        hasError: true,
      };
    }
    default:
      return state;
  }
}

export { getDocReducer };
