import {
  EDIT_DOC_REQUEST,
  EDIT_DOC_SUCCESS,
  EDIT_DOC_ERROR,
  TEditDocActions,
} from "../actions/edit-doc";

export type TEditDocState = {
  editDocRequest: boolean;
  editDocSuccess: boolean;
  editDocError: boolean;
};

const editDocInitialState: TEditDocState = {
  editDocRequest: false,
  editDocSuccess: false,
  editDocError: false,
};

const editDocReducer = (
  state = editDocInitialState,
  action: TEditDocActions
) => {
  switch (action.type) {
    case EDIT_DOC_REQUEST:
      return {
        ...state,
        editDocRequest: true,
        editDocSuccess: false,
        editDocError: false,
      };

    case EDIT_DOC_SUCCESS:
      return {
        ...state,
        editDocRequest: false,
        editDocSuccess: true,
        editDocError: false,
      };

    case EDIT_DOC_ERROR:
      return {
        ...state,
        editDocRequest: false,
        editDocSuccess: false,
        editDocError: true,
      };

    default:
      return state;
  }
};

export { editDocReducer };
