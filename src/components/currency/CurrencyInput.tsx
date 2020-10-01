import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { COLORS } from '@utils/constants';
import TextInput from '@components/base-ui/TextInput';

// TODO: fix types
type CurrencyInputProps = {
  value?: string;
  text?: string;
  style?: any;
  [key: string]: any;
}

const CurrencyInput: React.FC<CurrencyInputProps> = (
  { value, text = '', style = {}, ...otherProps }: CurrencyInputProps,
) => {
  return (
    <View style={styles.view}>
      <Text style={styles.text}>{text}</Text>
      <TextInput
        initialValue={value}
        style={{ ...style, ...styles.input }}
        keyboardType="numeric"
        {...otherProps}
      />
    </View>

  )
}

const styles = StyleSheet.create({
  view: {
    paddingHorizontal: 10,
  },
  text: {
    color: COLORS.cloud,
    fontSize: 10,
    marginBottom: 5,
  },
  input: {
    padding: 0,
    margin: 0,
    fontSize: 25,
  }
})

export default CurrencyInput;
