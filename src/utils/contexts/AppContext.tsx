import React, { createContext } from 'react';
import { COLORS } from '@utils/constants';

type ContextValueProps = {
  primaryColor: string;
  secondaryColor: string;
}

const contextValue = (props: ContextValueProps) => ({
  style: {
    view: {
      backgroundColor: props.secondaryColor,
    },
    primaryText: {
      color: props.primaryColor,
    },
    secondaryText: {
      color: props.secondaryColor,
    },
    form: {
      backgroundColor: props.primaryColor,
    },
  }
});

const defaultValue = contextValue({
  primaryColor: COLORS.white,
  secondaryColor: COLORS.gray,
});

export const AppContext = createContext(defaultValue);

type AppProviderProps = {
  children: JSX.Element
}

export const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <AppContext.Provider value={defaultValue}>
      { children }
    </AppContext.Provider>
  )
};
