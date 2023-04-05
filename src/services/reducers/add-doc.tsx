import {
  ADD_DOC_REQUEST,
  ADD_DOC_SUCCESS,
  ADD_DOC_ERROR,
  TAddDocActions,
} from "../actions/add-doc";

export type TAddDocState = {
  addDocRequest: Boolean;
  addDocSuccess: Boolean;
  addDocError: Boolean;
};

const addDocInitialState: TAddDocState = {
  addDocRequest: false,
  addDocSuccess: false,
  addDocError: false,
};

const addDocReducer = (state = addDocInitialState, action: TAddDocActions) => {
  switch (action.type) {
    case ADD_DOC_REQUEST:
      return {
        ...state,
        addDocRequest: true,
        addDocSuccess: false,
        addDocError: false,
      };

    case ADD_DOC_SUCCESS:
      return {
        ...state,
        addDocRequest: false,
        addDocSuccess: true,
        addDocError: false,
      };

    case ADD_DOC_ERROR:
      return {
        ...state,
        addDocRequest: false,
        addDocSuccess: false,
        addDocError: true,
      };

    default:
      return state;
  }
};

export { addDocReducer };
