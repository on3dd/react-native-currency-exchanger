import { Platform, StatusBar } from 'react-native';

export const STATUSBAR_HEIGHT =
  Platform.OS === 'ios' ? 20 : StatusBar.currentHeight;

export const COLORS = {
  gray: '#262c38',
  cloud: '#bdc3c7',
  white: '#fafafa',
};

export const API_BASE_URL = 'https://api.exchangerate.host';

export const API_ENDPOINTS = {
  symbols: '/symbols',
};

export const CURRENCY_TYPES = {
  from: 'from',
  to: 'to',
};
