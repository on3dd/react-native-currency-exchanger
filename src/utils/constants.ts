import { Platform, StatusBar } from 'react-native';

export const STATUSBAR_HEIGHT =
  Platform.OS === 'ios' ? 20 : StatusBar.currentHeight;

export const colors = {
  // black: '#333',
  gray: '#262c38',
  white: '#fafafa',
};
