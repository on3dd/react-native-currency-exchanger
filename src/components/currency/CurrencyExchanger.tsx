import React, { useContext } from 'react';
import { Text, View } from 'react-native';

import { AppContext } from '@utils/contexts/AppContext';

import heading from '@styles/heading';

import CurrencyForm from '@components/currency/CurrencyForm';

const CurrencyExchanger: React.FC = () => {
  const { theme } = useContext(AppContext);

  return (
    <View style={theme.view}>
      <Text style={{ ...theme.text, ...heading }}>
        Convert
      </Text>
      <CurrencyForm />
    </View >
  )
}

export default CurrencyExchanger;
