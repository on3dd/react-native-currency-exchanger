import React, { useContext, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { View, StyleSheet } from 'react-native';

import { AppContext } from '@utils/contexts/AppContext';
import { CURRENCY_TYPES } from '@utils/constants';

import convertCurrencies from '@actions/convertCurrencies';
import changeAmount from '@actions/changeAmount';

import shadow from '@styles/shadow';

import RootState from '@typesdir/states/root';
import CurrencyType from '@typesdir/CurrencyType';

import CurrencyFormElement from '@components/currency/CurrencyFormElement';
import CurrencyFormDivider from '@components/currency/CurrencyFormDivider';

const CurrencyForm: React.FC = () => {
  const dispatch = useDispatch();

  const currencies = useSelector((state: RootState) => state.currency);
  const amount = useSelector((state: RootState) => state.amount);
  const convert = useSelector((state: RootState) => state.convert);

  useEffect(() => {
    const props = {
      from: currencies.from.code,
      to: currencies.to.code,
      amount: amount.number,
    }

    dispatch(convertCurrencies(props));
  }, [currencies.from, currencies.to, amount.number]);

  const context = useContext(AppContext);

  const getRatio = (type: CurrencyType) => {
    const ratio = (type === 'from' ? convert.result : 1 / convert.result).toFixed(3);

    if (type === 'from') {
      return `1 ${currencies.from.code} = ${ratio} ${currencies.to.code}`;
    }

    return `1 ${currencies.to.code} = ${ratio} ${currencies.from.code}`;
  }

  const onChangeText = (amount: string) => {
    dispatch(changeAmount(amount));
  }

  return (
    <View style={{ ...context.style.form, ...styles.form, ...shadow }}>
      <CurrencyFormElement
        symbol={currencies.from}
        amount={amount.number.toString()}
        ratio={getRatio('from')}
        type={CURRENCY_TYPES.from}
        onChangeText={onChangeText}
      />

      <CurrencyFormDivider />

      <CurrencyFormElement
        symbol={currencies.to}
        amount={convert.result.toString()}
        ratio={getRatio('to')}
        type={CURRENCY_TYPES.to}
        editable={false}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  form: {
    padding: 20,
    borderRadius: 5,
  },
})

export default CurrencyForm;
