import React from 'react';
import { View, StyleSheet } from 'react-native';

import { colors } from '@utils/constants';

import StatusBar from '@components/base-ui/StatusBar';
import CurrencyExchanger from '@components/currency/CurrencyExchanger';

const Index: React.FC = () => {
  return (
    <View style={styles.container}>
      <StatusBar />
      <CurrencyExchanger />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 30,
    paddingHorizontal: 20,
    backgroundColor: colors.gray,
  },
})

export default Index;
