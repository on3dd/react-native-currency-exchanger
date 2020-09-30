import React, { useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { AppContext } from '@utils/AppContext';
import CurrencyForm from '@components/currency/CurrencyForm';

const CurrencyExchanger: React.FC = () => {
  const context = useContext(AppContext);

  return (
    <View style={context.style.view}>
      <Text style={{ ...context.style.primaryText, ...styles.text }}>
        Convert
      </Text>
      <CurrencyForm />
    </View >
  )
}

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 20,
  }
});

export default CurrencyExchanger;
