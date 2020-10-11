import React, { useContext } from 'react';
import { Text, View } from 'react-native';

import { AppContext } from '@utils/contexts/AppContext';

import heading from '@styles/heading';

import CurrencyForm from '@components/currency/CurrencyForm';

const CurrencyExchanger: React.FC = () => {
  const context = useContext(AppContext);

  return (
    <View style={context.style.view}>
      <Text style={{ ...context.style.text, ...heading }}>
        Convert
      </Text>
      <CurrencyForm />
    </View >
  )
}

export default CurrencyExchanger;
