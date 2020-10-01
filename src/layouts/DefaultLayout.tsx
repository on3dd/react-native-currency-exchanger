import React, { useState, useCallback } from 'react';
import { View, StyleSheet } from 'react-native';
import SideMenu from 'react-native-side-menu-updated';

import { COLORS, CURRENCY_TYPES } from '@utils/constants';
import { SideMenuProvider } from '@utils/contexts/SideMenuContext';

import CurrencyType from '@typesdir/CurrencyType';

import SideDrawerMenu from '@components/base-ui/SideDrawerMenu'
import SideMenuMenu from '@components/SideMenu';

type DefaultLayoutProps = {
  children: JSX.Element;
}

const DefaultLayout: React.FC<DefaultLayoutProps> = (
  { children }: DefaultLayoutProps,
) => {
  const [isVisible, isVisibleChange] = useState(false);
  const [currencyType, currencyTypeChange] = useState(CURRENCY_TYPES.from);

  const child = (
    <SideDrawerMenu>
      <SideMenuMenu type={currencyType} />
    </SideDrawerMenu>
  );

  const changeType = (type: CurrencyType) => {
    currencyTypeChange(type);
  }

  const toggleVisibility = useCallback(() => {
    setTimeout(() => isVisibleChange(!isVisible), 0)
  }, [isVisible]);

  return (
    <View style={styles.view}>
      <SideMenu
        menu={child}
        isOpen={isVisible}
        onChange={toggleVisibility}
        disableGestures={true}
      >
        <SideMenuProvider value={{ changeType, toggleVisibility }}>
          {children}
        </SideMenuProvider>
      </SideMenu>
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: COLORS.gray,
  }
})

export default DefaultLayout;
