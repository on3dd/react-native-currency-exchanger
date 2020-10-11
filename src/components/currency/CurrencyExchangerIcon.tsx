import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';

import { AppContext } from '@utils/contexts/AppContext';
import { COLORS, THEMES } from '@utils/constants';

import Icon from '@components/base-ui/Icon';

type CurrencyExchangerIconProps = {
  onPress: () => void;
  // [key: string]: any;
}

const CurrencyExchangerIcon: React.FC<CurrencyExchangerIconProps> = (
  { onPress }: CurrencyExchangerIconProps
) => {
  const { theme } = useContext(AppContext);

  const icon = () => {
    return theme.text.color === THEMES.light.fontColor
      ? 'sun'
      : 'moon'
  }

  return (
    <View style={styles.container}>
      <Icon
        icon={icon()}
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
