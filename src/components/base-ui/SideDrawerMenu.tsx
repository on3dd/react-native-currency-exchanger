import React from 'react';
import { View, StyleSheet } from 'react-native';

import { STATUSBAR_HEIGHT } from '@utils/constants';

type BaseSideDrawerMenuProps = {
  children: JSX.Element
}

const BaseSideDrawerMenu: React.FC<BaseSideDrawerMenuProps> = (
  { children }: BaseSideDrawerMenuProps
) => {
  return (
    <View style={styles.view}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
    paddingTop: STATUSBAR_HEIGHT,
  },
});

export default BaseSideDrawerMenu;
