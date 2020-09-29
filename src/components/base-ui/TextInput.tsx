import React, { useState, useEffect } from 'react';
import { TextInput, StyleSheet } from 'react-native';

import { colors } from '@utils/constants';

// TODO: fix types
type TextInputProps = {
  initialValue?: string;
  style?: any;
  [key: string]: any;
}

const Input: React.FC<TextInputProps> = (
  { initialValue = '', style = {}, ...otherProps }: TextInputProps,
) => {
  const [value, setValue] = useState(initialValue);

  useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);

  return (
    <TextInput
      style={{ ...styles.input, ...style }}
      value={value}
      onChangeText={text => setValue(text)}
      {...otherProps}
    />
  )
}

const styles = StyleSheet.create({
  input: {
    // color: colors.gray,
  }
});

export default Input;
