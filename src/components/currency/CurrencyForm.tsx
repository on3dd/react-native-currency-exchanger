import React, { useContext, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { View, StyleSheet } from 'react-native';

import { AppContext } from '@utils/contexts/AppContext';
import { CURRENCY_TYPES } from '@utils/constants';

import shadow from '@styles/shadow';

// import CurrencyType from '@typesdir/CurrencyType';
import RootState from '@typesdir/states/root';

import CurrencyFormElement from '@components/currency/CurrencyFormElement';
import CurrencyFormDivider from '@components/currency/CurrencyFormDivider';

const usaFlag = "https://icon-library.com/images/united-states-flag-icon/united-states-flag-icon-16.jpg";
const rusFlag = "https://www.iconfinder.com/data/icons/world-flags-circular/1000/Flag_of_Russia_-_Circle-512.png"

const CurrencyForm: React.FC = () => {
  const context = useContext(AppContext);

  const currencies = useSelector((state: RootState) => state.currency);

  useEffect(() => {
    console.log('currencies', currencies);
  }, [currencies]);

  return (
    <View style={{ ...context.style.form, ...styles.form, ...shadow }}>
      <CurrencyFormElement
        symbol={currencies.from}
        imageUri={usaFlag}
        amount={2.28}
        ratio={'1 USD = 78.86 RUB'}
        type={CURRENCY_TYPES.from}
      />

      <CurrencyFormDivider />

      <CurrencyFormElement
        symbol={currencies.to}
        imageUri={rusFlag}
        amount={179.57}
        ratio={'1 RUB = 0.013 RUB'}
        type={CURRENCY_TYPES.to}
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
