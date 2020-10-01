import React, { createContext } from 'react';
import CurrencyType from '@typesdir/CurrencyType';

type ContextValueProps = {
  changeType: (type: CurrencyType) => void,
  toggleVisibility: () => void,
};

const contextValue = (val?: ContextValueProps) => val;

const defaultValue = contextValue();

export const SideMenuContext = createContext(defaultValue);

type SideMenuProviderProps = {
  children: JSX.Element;
  value: {
    changeType: (type: CurrencyType) => void,
    toggleVisibility: () => void,
  };
}

export const SideMenuProvider = ({ children, value }: SideMenuProviderProps) => {
  return (
    <SideMenuContext.Provider value={value || defaultValue}>
      {children}
    </SideMenuContext.Provider>
  )
};
