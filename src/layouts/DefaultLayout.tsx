import React, { useState, useRef } from 'react';
import { View, StyleSheet } from 'react-native';
import SideMenu from 'react-native-side-menu-updated';

import { colors } from '@utils/constants';
import { SideMenuProvider } from '@utils/contexts/SideMenuContext';

import SideDrawerMenu from '@components/base-ui/SideDrawerMenu'

type DefaultLayoutProps = {
  children: JSX.Element;
}

const DefaultLayout: React.FC<DefaultLayoutProps> = (
  { children }: DefaultLayoutProps,
) => {
  // TODO: set isVisible to false by default
  const [isVisible, isVisibleChange] = useState(true);

  const child = (
    <SideDrawerMenu />
  );

  // FIXME
  const toggle = () => {
    setTimeout(() => {
      isVisibleChange(!isVisible);
    }, 0);
  };

  return (
    <View style={styles.view}>
      <SideMenu
        menu={child}
        isOpen={isVisible}
        onChange={toggle}
        disableGestures={true}
      >
        <SideMenuProvider value={toggle}>
          {children}
        </SideMenuProvider>
      </SideMenu>
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: colors.gray,
  }
})

export default DefaultLayout;
