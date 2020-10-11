import React, { useContext } from 'react';
import { Pressable, View, Text, StyleSheet } from 'react-native'

import { darken } from 'polished';

import { AppContext } from '@utils/contexts/AppContext';
import { DARKEN_AMOUNT } from '@utils/constants';

import { shadowSmall } from '@styles/shadows';

type SideMenuOptionProps = {
  code: string;
  description: string;
  onPress: () => void;
}

const SideMenuOption: React.FC<SideMenuOptionProps> = (
  { code, description, onPress }: SideMenuOptionProps,
) => {
  const { theme } = useContext(AppContext);

  const backgroundColor = (pressed: boolean) => ({
    backgroundColor: pressed
      ? darken(DARKEN_AMOUNT, theme.view.backgroundColor)
      : theme.view.backgroundColor
  })

  return (
    <Pressable
      style={({ pressed }) => [
        backgroundColor(pressed),
        shadowSmall,
        styles.option,
      ]}
      onPress={onPress}
    >
      <View style={styles.optionText}>
        <View style={styles.optionCode}>
          <Text style={[theme.text, styles.optionCodeText]}>
            {code}
          </Text>
        </View>

        <View style={styles.optionDescription}>
          <Text
            numberOfLines={1}
            style={[theme.text, styles.optionDescriptionText]}
          >
            {description}
          </Text>
        </View>
      </View>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  option: {
    padding: 10,
    marginBottom: 20,
    borderRadius: 5,
  },
  optionText: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  optionCode: {
    marginRight: 5,
  },
  optionCodeText: {
    fontWeight: 'bold',
  },
  optionDescription: {
    flex: 1,
  },
  optionDescriptionText: {
    fontSize: 12,
  }
})

export default SideMenuOption;
