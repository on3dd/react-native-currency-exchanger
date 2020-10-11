import React, { useContext } from 'react';
import { Text, View, StyleSheet } from 'react-native';

import { AppContext } from '@utils/contexts/AppContext';

import heading from '@styles/heading';

import CurrencyExchangerIcon from '@components/currency/CurrencyExchangerIcon';
import CurrencyForm from '@components/currency/CurrencyForm';

const CurrencyExchanger: React.FC = () => {
  const { theme, toggleTheme } = useContext(AppContext);

  return (
    <View style={theme.view}>
      <View style={styles.header}>
        <Text style={{ ...theme.text, ...heading }}>
          Convert
        </Text>
        <CurrencyExchangerIcon onPress={toggleTheme} />
      </View>
      <CurrencyForm />
    </View >
  )
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  }
});

export default CurrencyExchanger;
