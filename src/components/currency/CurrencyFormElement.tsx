import React, { useContext } from 'react';
import { View, Pressable, Text, StyleSheet } from 'react-native';

import { AppContext } from '@utils/contexts/AppContext';
import { SideMenuContext } from '@utils/contexts/SideMenuContext';

import CurrencyType from '@typesdir/CurrencyType';
import Symbol from '@typesdir/Symbol';

import CurrencyInput from '@components/currency/CurrencyInput';

type CurrencyFormElementProps = {
  symbol: Symbol;
  amount: string;
  ratio: string;
  type: CurrencyType;
  editable?: boolean;
  onChangeText?: (str: string) => void;
}

const CurrencyFormElement: React.FC<CurrencyFormElementProps> = (
  { symbol, amount, ratio, type, ...otherProps }: CurrencyFormElementProps,
) => {
  const { theme } = useContext(AppContext);
  const { changeType, toggleVisibility } = useContext(SideMenuContext);

  const toggle = () => {
    changeType(type);
    toggleVisibility();
  }

  return (
    <View>
      <Pressable style={styles.row} onPress={toggle}>
        <Text style={[theme.text, styles.text, styles.bold]}>
          {symbol.code}
        </Text>
        <Text style={[theme.text, styles.text]}>
          {' - '}
        </Text>
        <Text style={[theme.text, styles.text]}>
          {symbol.description}
        </Text>
      </Pressable>

      <CurrencyInput
        value={amount}
        text={ratio}
        style={theme.text}
        {...otherProps}
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
