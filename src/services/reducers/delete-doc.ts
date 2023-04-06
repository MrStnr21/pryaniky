import {
  DELETE_DOC_REQUEST,
  DELETE_DOC_SUCCESS,
  DELETE_DOC_ERROR,
  TDeleteDocActions,
} from "../actions/delete-doc";

export type TDeleteDocState = {
  deleteDocRequest: boolean;
  deleteDocSuccess: boolean;
  deleteDocError: boolean;
};

const deleteDocInitialState: TDeleteDocState = {
  deleteDocRequest: false,
  deleteDocSuccess: false,
  deleteDocError: false,
};

const deleteDocReducer = (
  state = deleteDocInitialState,
  action: TDeleteDocActions
) => {
  switch (action.type) {
    case DELETE_DOC_REQUEST:
      return {
        ...state,
        deleteDocRequest: true,
        deleteDocSuccess: false,
        deleteDocError: false,
      };

    case DELETE_DOC_SUCCESS:
      return {
        ...state,
        deleteDocRequest: false,
        deleteDocSuccess: true,
        deleteDocError: false,
      };

    case DELETE_DOC_ERROR:
      return {
        ...state,
        deleteDocRequest: false,
        deleteDocSuccess: false,
        deleteDocError: true,
      };

    default:
      return state;
  }
};

export { deleteDocReducer };
