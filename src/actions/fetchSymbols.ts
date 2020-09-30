import axiosService from '@utils/axiosService';

import {
  FETCHING_SYMBOLS,
  FETCHING_SYMBOLS_SUCCESS,
  FETCHING_SYMBOLS_FAIL,
} from '@utils/actionTypes';

import { API_ENDPOINTS } from '@utils/constants';

const fetchSymbols = () => {
  return async (dispatch: any) => {
    dispatch({ type: FETCHING_SYMBOLS });

    return axiosService
      .get(API_ENDPOINTS.symbols)
      .then((res) => {
        dispatch({ type: FETCHING_SYMBOLS_SUCCESS, payload: res.data.symbols });
      })
      .catch((err) => {
        dispatch({ type: FETCHING_SYMBOLS_FAIL, payload: err.data.symbols });
      });
  };
};

export default fetchSymbols;
