import React, { useContext } from 'react';
import { View, Pressable, Image, Text, StyleSheet } from 'react-native';

import { AppContext } from '@utils/contexts/AppContext';
import { SideMenuContext } from '@utils/contexts/SideMenuContext';

import CurrencyType from '@typesdir/CurrencyType';
import Symbol from '@typesdir/Symbol';

import CurrencyInput from '@components/currency/CurrencyInput';

type CurrencyFormElementProps = {
  symbol: Symbol;
  // imageUri: string;
  amount: number;
  ratio: string;
  type: CurrencyType;
}

const CurrencyFormElement: React.FC<CurrencyFormElementProps> = (
  { symbol, amount, ratio, type }: CurrencyFormElementProps,
) => {
  const appContext = useContext(AppContext);
  const sideMenuContext = useContext(SideMenuContext);

  const toggle = () => {
    if (sideMenuContext) {
      sideMenuContext.changeType(type);
      sideMenuContext.toggleVisibility();
    }
  }

  return (
    <View>
      <Pressable style={styles.row} onPress={toggle}>
        {/* <Image source={{ uri: imageUri }} style={styles.image} /> */}
        <Text style={[appContext.style.secondaryText, styles.text, styles.bold]}>
          {symbol.code}
        </Text>
        <Text style={[appContext.style.secondaryText, styles.text]}>
          {` - ${symbol.description}`}
        </Text>
      </Pressable>

      <CurrencyInput
        value={amount.toString()}
        text={ratio}
        style={appContext.style.secondaryText}
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
  bold: {
    fontWeight: "bold"
  }
})

export default CurrencyFormElement;
