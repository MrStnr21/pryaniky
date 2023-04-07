import {
  GET_DOC_REQUEST,
  GET_DOC_SUCCESS,
  GET_DOC_ERROR,
} from "../actions/data-doc";

import { TDoc } from "../types/data";
import { TGetDocActions } from "../actions/data-doc";

export type TDocState = {
  documents: Array<TDoc>;
  documentsRequest: boolean;
  documentsError: boolean;
};

const docInitialState: TDocState = {
  documents: [],
  documentsRequest: false,
  documentsError: false,
};

function getDocReducer(state = docInitialState, action: TGetDocActions) {
  switch (action.type) {
    //экшены авторизации
    case GET_DOC_REQUEST: {
      return {
        ...state,
        documentsRequest: true,
        documentsError: false,
      };
    }
    case GET_DOC_SUCCESS: {
      return {
        ...state,
        documents: action.payload,
        documentsRequest: false,
        documentsError: false,
      };
    }
    case GET_DOC_ERROR: {
      return {
        ...state,
        documentsRequest: false,
        documentsError: true,
      };
    }
    default:
      return state;
  }
}

export { getDocReducer };
