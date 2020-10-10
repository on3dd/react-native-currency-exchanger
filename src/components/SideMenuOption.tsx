import React, { useContext } from 'react';
import { Pressable, View, Text, StyleSheet } from 'react-native'

import { AppContext } from '@utils/contexts/AppContext';
import { COLORS } from '@utils/constants';

import shadow from '@styles/shadow';


type SideMenuOptionProps = {
  code: string;
  description: string;
  onPress: () => void;
}

const SideMenuOption: React.FC<SideMenuOptionProps> = (
  { code, description, onPress }: SideMenuOptionProps,
) => {
  const context = useContext(AppContext);

  return (
    <Pressable style={({ pressed }) => [{
      backgroundColor: pressed
        ? COLORS.cloud
        : COLORS.white
    }, shadow, styles.option]} onPress={onPress}>
      <View style={styles.optionText}>
        <View style={styles.optionCode}>
          <Text style={[context.style.secondaryText, styles.optionCodeText]}>
            {code}
          </Text>
        </View>

        <View style={styles.optionDescription}>
          <Text
            numberOfLines={1}
            style={[context.style.secondaryText, styles.optionDescriptionText]}
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
