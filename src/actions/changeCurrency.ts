import { CHANGE_FROM, CHANGE_TO } from '@utils/actionTypes';
import { CURRENCY_TYPES } from '@utils/constants';

import CurrencyType from '@typesdir/CurrencyType';
import Symbol from '@typesdir/Symbol';

type ChangeCurrencyProps = {
  type: CurrencyType;
  symbol: Symbol;
};

const changeCurrency = ({ type, symbol }: ChangeCurrencyProps) => {
  console.log('symbol', symbol);

  if (type === CURRENCY_TYPES.from) {
    return { type: CHANGE_FROM, payload: { ...symbol } };
  }

  return { type: CHANGE_TO, payload: { ...symbol } };
};

export default changeCurrency;
