import React, { createContext } from 'react';

type ContextValueProps = () => void | undefined;

const contextValue = (onPress?: ContextValueProps) => onPress;

const defaultValue = contextValue();

export const SideMenuContext = createContext(defaultValue);

type SideMenuProviderProps = {
  children: JSX.Element;
  value: () => void;
}

export const SideMenuProvider = ({ children, value }: SideMenuProviderProps) => {
  return (
    <SideMenuContext.Provider value={value || defaultValue}>
      {children}
    </SideMenuContext.Provider>
  )
};
