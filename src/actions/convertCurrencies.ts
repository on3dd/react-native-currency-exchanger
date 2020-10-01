import axiosService from '@utils/axiosService';
import { API_ENDPOINTS } from '@utils/constants';

import {
  CONVERTING_CURRENCIES,
  CONVERTING_CURRENCIES_SUCCESS,
  CONVERTING_CURRENCIES_FAIL,
} from '@utils/actionTypes';

type ConvertCurrenciesProps = {
  from: string;
  to: string;
  amount: number;
};

const convertCurrencies = (props: ConvertCurrenciesProps) => {
  return async (dispatch: any) => {
    dispatch({ type: CONVERTING_CURRENCIES });

    return axiosService
      .get(API_ENDPOINTS.convert(props))
      .then((res) => {
        console.log('res.data.result', res.data.result);

        dispatch({
          type: CONVERTING_CURRENCIES_SUCCESS,
          payload: res.data.result,
        });
      })
      .catch((err) => {
        dispatch({
          type: CONVERTING_CURRENCIES_FAIL,
          payload: err.data.result,
        });
      });
  };
};

export default convertCurrencies;
