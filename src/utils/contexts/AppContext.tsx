import React, { createContext, useMemo } from 'react';
import { THEMES } from '@utils/constants';
import ThemeType from '@typesdir/ThemeType';

const contextValue = (props: ThemeType) => ({
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
    theme: ThemeType,
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
