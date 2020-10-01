import React, { useContext } from 'react';
import { useSelector } from 'react-redux';
import { Pressable, View, SafeAreaView, ScrollView, Text, StyleSheet } from 'react-native';

import { AppContext } from '@utils/contexts/AppContext';
import { useFetching } from '@utils/hooks';
import { COLORS } from '@utils/constants';

import fetchSymbols from '@actions/fetchSymbols';

import container from '@styles/container';

import CurrencyType from '@typesdir/CurrencyType';
import RootState from '@typesdir/states/root';

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
    }, styles.option]} onPress={onPress}>
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

type SideMenuProps = {
  type: CurrencyType;
}

const SideMenu: React.FC<SideMenuProps> = (
  { type }: SideMenuProps
) => {
  const symbols = useSelector((state: RootState) => state.symbols);

  useFetching(fetchSymbols);

  const context = useContext(AppContext);

  return (
    <View style={{ ...container, ...styles.menu }}>
      <Text style={{ ...context.style.primaryText, ...styles.text }}>
        Currencies
      </Text>

      <SafeAreaView style={styles.scrollContainer}>
        <ScrollView contentContainerStyle={styles.options}>
          {symbols.data && Object.values(symbols.data).map(el => (
            <SideMenuOption
              key={el.code}
              code={el.code}
              description={el.description}
              onPress={() => console.log(`code: ${el.code}, type: ${type}`)}
            />)
          )}

        </ScrollView>
      </SafeAreaView>
    </View>
  )
}

const styles = StyleSheet.create({
  menu: {
    paddingBottom: 0,
    backgroundColor: "#242A35",
  },
  text: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 20,
  },
  scrollContainer: {
    flexGrow: 1,
    flexDirection: 'column',
  },
  options: {
    flexGrow: 1,
  },
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

export default SideMenu;
