import { CHANGING_FROM, CHANGING_TO } from '@utils/actionTypes';
import { CURRENCY_TYPES } from '@utils/constants';

import CurrencyType from '@typesdir/CurrencyType';
import Symbol from '@typesdir/Symbol';

type ChangeCurrencyProps = {
  type: CurrencyType;
  symbol: Symbol;
};

const changeCurrency = ({ type, symbol }: ChangeCurrencyProps) => {
  if (type === CURRENCY_TYPES.from) {
    return { type: CHANGING_FROM, payload: { ...symbol } };
  }

  return { type: CHANGING_TO, payload: { ...symbol } };
};

export default changeCurrency;
