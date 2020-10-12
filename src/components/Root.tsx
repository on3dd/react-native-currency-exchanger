import React, { useContext, useMemo } from 'react';
import { View } from 'react-native';

import { AppContext } from '@utils/contexts/AppContext';
import { isDarkByFontColor } from '@utils/functions';

import container from '@styles/container';

import StatusBar from '@components/base-ui/StatusBar';
import CurrencyExchanger from '@components/currency/CurrencyExchanger';

const Root: React.FC = () => {
  const { theme } = useContext(AppContext);

  const barStyle = useMemo(() => {
    return isDarkByFontColor(theme.text.color)
      ? 'light-content'
      : 'dark-content'
  }, [theme.text.color])

  return (
    <View style={[theme.view, container]}>
      <StatusBar
        backgroundColor={theme.view.backgroundColor}
        barStyle={barStyle}
      />
      <CurrencyExchanger />
    </View>
  )
}

export default Root;
