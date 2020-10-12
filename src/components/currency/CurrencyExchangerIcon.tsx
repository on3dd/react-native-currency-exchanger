import React, { useContext, useMemo } from 'react';
import { View, StyleSheet } from 'react-native';

import { AppContext } from '@utils/contexts/AppContext';
import { COLORS, THEMES } from '@utils/constants';
import { isDarkByFontColor } from '@utils/functions';

import Icon from '@components/base-ui/Icon';

type CurrencyExchangerIconProps = {
  onPress: () => void;
  // [key: string]: any;
}

const CurrencyExchangerIcon: React.FC<CurrencyExchangerIconProps> = (
  { onPress }: CurrencyExchangerIconProps
) => {
  const { theme } = useContext(AppContext);

  const icon = useMemo(() => {
    return isDarkByFontColor(theme.text.color)
      ? 'moon'
      : 'sun'
  }, [theme.text.color])

  return (
    <View style={styles.container}>
      <Icon
        icon={icon}
        size={20}
        color={COLORS.cloud}
        onPress={onPress}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 15,
  }
})

export default CurrencyExchangerIcon;
