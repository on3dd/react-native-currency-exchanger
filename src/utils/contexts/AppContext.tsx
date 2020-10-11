import React, { createContext, useMemo } from 'react';
import { THEMES } from '@utils/constants';

type ContextValueProps = {
  fontColor: string;
  backgroundColor: string;
}

const contextValue = (props: ContextValueProps) => ({
  view: {
    backgroundColor: props.backgroundColor,
  },
  text: {
    color: props.fontColor,
  },
});

const defaultValue = contextValue(THEMES.light);

export const AppContext = createContext({
  theme: defaultValue,
  toggleTheme: () => { },
});

type AppProviderProps = {
  value: {
    theme: ContextValueProps,
    toggleTheme: () => void,
  },
  children: JSX.Element
}

export const AppProvider = (
  { children,
    value: { theme = THEMES.light, toggleTheme }
  }: AppProviderProps
) => {
  const value = useMemo(() => {
    return { theme: contextValue(theme), toggleTheme };
  }, [theme])

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  )
};
