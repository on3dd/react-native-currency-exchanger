import React, { useContext } from 'react';
import { Pressable, View, SafeAreaView, ScrollView, Text, StyleSheet } from 'react-native';

import { AppContext } from '@utils/AppContext';
import { colors, STATUSBAR_HEIGHT } from '@utils/constants';
import container from '@styles/container';

type BaseSideDrawerMenuOptionProps = {
  name: string;
}

const BaseSideDrawerMenuOption: React.FC<BaseSideDrawerMenuOptionProps> = (
  { name }: BaseSideDrawerMenuOptionProps,
) => {
  return (
    <Pressable style={({ pressed }) => [{
      backgroundColor: pressed
        ? colors.cloud
        : colors.white
    }, styles.option]} onPress={() => console.log('bruh')}>
      <Text style={styles.optionText}>{name}</Text>
    </Pressable>
  )
}

const BaseSideDrawerMenu: React.FC = () => {
  const context = useContext(AppContext);

  return (
    <View style={styles.view}>
      <View style={{ ...container, ...styles.menu }}>
        <Text style={{ ...context.style.primaryText, ...styles.text }}>
          Currencies
        </Text>
        <SafeAreaView style={styles.scrollContainer}>
          <ScrollView contentContainerStyle={styles.options}>
            <BaseSideDrawerMenuOption name="USD" />
            <BaseSideDrawerMenuOption name="RUB" />
          </ScrollView>
        </SafeAreaView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
    paddingTop: STATUSBAR_HEIGHT,
  },
  menu: {
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
    flex: 1,
  },
  option: {
    padding: 10,
    marginBottom: 20,
    justifyContent: 'center',
    borderRadius: 5,
    // backgroundColor: colors.white
  },
  optionText: {

  }
});

export default BaseSideDrawerMenu;
