import {
  FETCHING_SYMBOLS,
  FETCHING_SYMBOLS_SUCCESS,
  FETCHING_SYMBOLS_FAIL,
} from '@utils/actionTypes';

import AsyncAction from '@typesdir/AsyncAction';
import SymbolsState from '@typesdir/states/symbols';

const initialState: SymbolsState = {
  isFetching: false,
  data: [],
  hasError: false,
  errorMessage: null,
};

const symbolsReducer = (state = initialState, action: AsyncAction) => {
  switch (action.type) {
    case FETCHING_SYMBOLS:
      return Object.assign({}, state, {
        isFetching: true,
        hasError: false,
        errorMessage: null,
      });

    case FETCHING_SYMBOLS_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        data: Object.values(action.payload),
        hasError: false,
        errorMessage: null,
      });

    case FETCHING_SYMBOLS_FAIL:
      return Object.assign({}, state, {
        isFetching: false,
        data: action.payload,
        hasError: true,
        errorMessage: action.err,
      });

    default:
      return state;
  }
};

export default symbolsReducer;
