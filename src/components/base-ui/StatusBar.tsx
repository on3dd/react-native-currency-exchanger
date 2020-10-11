import React from 'react';
import { View, StatusBar, StyleSheet } from 'react-native';

import { STATUSBAR_HEIGHT } from '@utils/constants';

const BaseStatusBar = <T,>(props: T) => (
  <View style={[statusBar]}>
    <StatusBar translucent {...props} />
  </View>
);

const styles = StyleSheet.create({
  statusBar: {
    height: STATUSBAR_HEIGHT,
  },
});

const { statusBar } = styles;

export default BaseStatusBar;
