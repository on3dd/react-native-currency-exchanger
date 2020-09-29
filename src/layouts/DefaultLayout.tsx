import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import SideMenu from 'react-native-side-menu-updated';

import { colors } from '@utils/constants';
import SideDrawerMenu from '@components/base-ui/SideDrawerMenu'

type DefaultLayoutProps = {
  children: JSX.Element;
}

const DefaultLayout: React.FC<DefaultLayoutProps> = (
  { children }: DefaultLayoutProps,
) => {
  const [isVisible, isVisibleChange] = useState(true);

  const child = (
    <SideDrawerMenu />
  );

  const toggle = () => isVisibleChange(!isVisible);

  return (
    <View style={styles.view}>
      <SideMenu
        menu={child}
        isOpen={isVisible}
        onChange={toggle}
        disableGestures={true}
      >
        {children}
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
