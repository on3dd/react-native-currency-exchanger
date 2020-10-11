import React, { createContext } from 'react';
import CurrencyType from '@typesdir/CurrencyType';

type ContextValueProps = {
  changeType: (type: CurrencyType) => void,
  toggleVisibility: () => void,
};

const contextValue = (val: ContextValueProps) => val;

const defaultValue = contextValue({
  changeType: () => { },
  toggleVisibility: () => { },
});

export const SideMenuContext = createContext(defaultValue);

type SideMenuProviderProps = {
  value: {
    changeType: (type: CurrencyType) => void,
    toggleVisibility: () => void,
  };
  children: JSX.Element;
}

export const SideMenuProvider = (
  { children, value = defaultValue }: SideMenuProviderProps
) => {
  return (
    <SideMenuContext.Provider value={value}>
      {children}
    </SideMenuContext.Provider>
  )
};
