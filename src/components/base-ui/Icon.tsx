import React from 'react';
import { TouchableOpacity, View, StyleSheet } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

type IconProps = {
  icon: string;
  onPress?: (args?: any) => void;
  [key: string]: any;
}

const BaseIcon = ({ icon, onPress, ...props }: IconProps) => (
  <TouchableOpacity onPress={onPress}>
    <View style={container}>
      <FontAwesome5 name={icon} {...props} />
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    padding: 5,
  },
});

const { container } = styles;

export default BaseIcon;
