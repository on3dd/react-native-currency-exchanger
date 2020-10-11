import React, { createContext, useMemo } from 'react';
import { THEMES } from '@utils/constants';

type ContextValueProps = {
  fontColor: string;
  backgroundColor: string;
}

const contextValue = (props: ContextValueProps) => ({
  style: {
    view: {
      backgroundColor: props.backgroundColor,
    },
    text: {
      color: props.fontColor,
    },
  }
});

const defaultValue = contextValue(THEMES.light);

export const AppContext = createContext(defaultValue);

type AppProviderProps = {
  theme: any, // TODO: change to return type of the contextValue()
  children: JSX.Element
}

export const AppProvider = (
  { children, theme = defaultValue }: AppProviderProps
) => {
  const value = useMemo(() => {
    return contextValue(theme);
  }, [theme])

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  )
};
