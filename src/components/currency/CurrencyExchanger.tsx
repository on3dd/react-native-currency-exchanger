import React, { useContext } from 'react';
import { Text, View, StyleSheet } from 'react-native';

import { AppContext } from '@utils/contexts/AppContext';

import heading from '@styles/heading';

import CurrencyExchangerIcon from '@components/currency/CurrencyExchangerIcon';
import CurrencyForm from '@components/currency/CurrencyForm';
import CurrencyChart from '@components/currency/CurrencyChart';

const CurrencyExchanger: React.FC = () => {
  const { theme, toggleTheme } = useContext(AppContext);

  return (
    <View style={[theme.view, styles.container]}>
      <View style={styles.header}>
        <Text style={{ ...theme.text, ...heading }}>
          Convert
        </Text>
        <CurrencyExchangerIcon onPress={toggleTheme} />
      </View>
      <View style={styles.form}>
        <CurrencyForm />
      </View>
      <View style={styles.chart}>
        <CurrencyChart data={[16, 23, 32]} />
      </View>
    </View >
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  form: {
    marginBottom: 20,
  },
  chart: {
    flex: 1,
  }
});

export default CurrencyExchanger;
