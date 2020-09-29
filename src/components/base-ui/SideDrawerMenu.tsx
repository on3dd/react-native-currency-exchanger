import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { AppContext } from '@utils/AppContext';
import { STATUSBAR_HEIGHT } from '@utils/constants';
import container from '@styles/container';

const BaseSideDrawerMenu = () => {
  const context = useContext(AppContext);

  return (
    <View style={styles.view}>
      <View style={{ ...container, ...styles.menu }}>
        <Text style={{ ...context.style.primaryText, ...styles.text }}>
          Nigger
      </Text>
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
  }
});

export default BaseSideDrawerMenu;
