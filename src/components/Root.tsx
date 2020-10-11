import React, { useContext } from 'react';
import { View } from 'react-native';

import { AppContext } from '@utils/contexts/AppContext';

import container from '@styles/container';

import StatusBar from '@components/base-ui/StatusBar';
import CurrencyExchanger from '@components/currency/CurrencyExchanger';

const Root: React.FC = () => {
  const context = useContext(AppContext);

  return (
    <View style={[context.style.view, container]}>
      <StatusBar />
      <CurrencyExchanger />
    </View>
  )
}

export default Root;
