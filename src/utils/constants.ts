import { Platform, StatusBar } from 'react-native';
import CurrencyType from '@typesdir/CurrencyType';

export const STATUSBAR_HEIGHT =
  Platform.OS === 'ios' ? 20 : StatusBar.currentHeight;

export const COLORS = {
  gray: '#262c38',
  cloud: '#bdc3c7',
  white: '#fafafa',
};

export const THEMES = {
  light: {
    primaryColor: COLORS.white,
    secondaryColor: COLORS.gray,
  },
  dark: {
    primaryColor: COLORS.gray,
    secondaryColor: COLORS.white,
  },
};

export const API_BASE_URL = 'https://api.exchangerate.host';

type ConvertProps = {
  from: string;
  to: string;
  amount: number;
};

export const API_ENDPOINTS = {
  symbols: '/symbols',
  convert: ({ from, to, amount }: ConvertProps) => {
    return `/convert?from=${from}&to=${to}&amount=${amount}`;
  },
};

export const CURRENCY_TYPES = {
  from: 'from' as CurrencyType,
  to: 'to' as CurrencyType,
};
