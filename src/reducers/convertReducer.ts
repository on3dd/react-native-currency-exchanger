import {
  CONVERTING_CURRENCIES,
  CONVERTING_CURRENCIES_SUCCESS,
  CONVERTING_CURRENCIES_FAIL,
} from '@utils/actionTypes';

import Action from '@typesdir/Action';
import ConvertState from '@typesdir/states/convert';

const initialState: ConvertState = {
  isFetching: null,
  result: 1,
  hasError: false,
  errorMessage: null,
};

const convertReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case CONVERTING_CURRENCIES:
      return Object.assign({}, state, {
        isFetching: true,
        hasError: false,
        errorMessage: null,
      });

    case CONVERTING_CURRENCIES_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        result: action.payload,
        hasError: false,
        errorMessage: null,
      });

    case CONVERTING_CURRENCIES_FAIL:
      return Object.assign({}, state, {
        isFetching: false,
        result: action.payload,
        hasError: true,
        errorMessage: action.err,
      });

    default:
      return state;
  }
};

export default convertReducer;
