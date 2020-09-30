import React from 'react';
import { View } from 'react-native';

import container from '@styles/container';
import StatusBar from '@components/base-ui/StatusBar';
import CurrencyExchanger from '@components/currency/CurrencyExchanger';

const Root: React.FC = () => {
  return (
    <View style={container}>
      <StatusBar />
      <CurrencyExchanger />
    </View>
  )
}

export default Root;
