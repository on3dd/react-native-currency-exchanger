import React, { useState, useEffect } from 'react';
import { TextInput, StyleSheet } from 'react-native';

type TextInputProps = {
  initialValue?: string;
  style?: any;
  [key: string]: any;
  onChangeText?: (str: string) => void;
}

const Input: React.FC<TextInputProps> = (
  { initialValue = '', style = {}, onChangeText, ...otherProps }: TextInputProps,
) => {
  const [value, setValue] = useState(initialValue);

  useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);

  const updValue = (val: string) => {
    if (onChangeText) onChangeText(val);
  }

  return (
    <TextInput
      style={{ ...styles.input, ...style }}
      value={value}
      onChangeText={updValue}
      {...otherProps}
    />
  )
}

const styles = StyleSheet.create({
  input: {}
});

export default Input;
