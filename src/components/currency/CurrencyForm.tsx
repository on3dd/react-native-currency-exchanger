import React, { useContext, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { View, StyleSheet } from 'react-native';

import { AppContext } from '@utils/contexts/AppContext';
import { CURRENCY_TYPES } from '@utils/constants';

import convertCurrencies from '@actions/convertCurrencies';
import changeAmount from '@actions/changeAmount';

import shadow from '@styles/shadow';

import RootState from '@typesdir/states/root';

import CurrencyFormElement from '@components/currency/CurrencyFormElement';
import CurrencyFormDivider from '@components/currency/CurrencyFormDivider';

const CurrencyForm: React.FC = () => {
  const dispatch = useDispatch();

  const currencies = useSelector((state: RootState) => state.currency);
  const amount = useSelector((state: RootState) => state.amount);
  const convert = useSelector((state: RootState) => state.convert);

  useEffect(() => {
    console.log('rendering form');
    const props = {
      from: currencies.from.code,
      to: currencies.to.code,
      amount: amount.number,
    }

    dispatch(convertCurrencies(props));
  }, [currencies.from, currencies.to, amount.number]);

  const context = useContext(AppContext);

  const onChangeText = (amount: string) => {
    console.log('onChangeText:', amount);
    dispatch(changeAmount(amount));
  }

  return (
    <View style={{ ...context.style.form, ...styles.form, ...shadow }}>
      <CurrencyFormElement
        symbol={currencies.from}
        amount={amount.number.toString()}
        ratio={'1 USD = 78.86 RUB'}
        type={CURRENCY_TYPES.from}
        onChangeText={onChangeText}
      />

      <CurrencyFormDivider />

      <CurrencyFormElement
        symbol={currencies.to}
        amount={convert.result.toString()}
        ratio={'1 RUB = 0.013 RUB'}
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
