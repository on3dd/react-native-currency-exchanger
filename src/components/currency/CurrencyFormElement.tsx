import React, { useContext } from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

import { AppContext } from '@utils/AppContext';

import CurrencyInput from '@components/currency/CurrencyInput';

type CurrencyFormElementProps = {
  name: string;
  imageUri: string;
  amount: number;
  ratio: string;
}

const CurrencyFormElement: React.FC<CurrencyFormElementProps> = (
  { name, imageUri, amount, ratio }: CurrencyFormElementProps,
) => {
  const context = useContext(AppContext);

  return (
    <View>
      <View style={styles.row}>
        <Image source={{ uri: imageUri }} style={styles.image} />
        <Text style={{ ...context.style.secondaryText, ...styles.text }}>
          {name}
        </Text>
      </View>

      <CurrencyInput
        value={amount.toString()}
        text={ratio}
        style={context.style.secondaryText}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  image: {
    width: 15,
    height: 15,
    marginRight: 7.5,
  },
  text: {
    fontSize: 14,
    fontWeight: "600",
  },
})

export default CurrencyFormElement;
