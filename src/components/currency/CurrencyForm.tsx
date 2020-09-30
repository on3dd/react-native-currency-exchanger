import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';

import { AppContext } from '@utils/contexts/AppContext';

import CurrencyFormElement from '@components/currency/CurrencyFormElement';
import CurrencyFormDivider from '@components/currency/CurrencyFormDivider';

const usaFlag = "https://icon-library.com/images/united-states-flag-icon/united-states-flag-icon-16.jpg";
const rusFlag = "https://www.iconfinder.com/data/icons/world-flags-circular/1000/Flag_of_Russia_-_Circle-512.png"

const CurrencyForm: React.FC = () => {
  const context = useContext(AppContext);

  return (
    <View style={{ ...context.style.form, ...styles.form }}>
      <CurrencyFormElement
        name="USD - United States Dollar"
        imageUri={usaFlag}
        amount={2.28}
        ratio={'1 USD = 78.86 RUB'}
      />

      <CurrencyFormDivider />

      <CurrencyFormElement
        name="RUB - Russian Ruble"
        imageUri={rusFlag}
        amount={179.57}
        ratio={'1 RUB = 0.013 RUB'}
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
