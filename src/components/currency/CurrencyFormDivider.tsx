import React from 'react';
import { View, StyleSheet } from 'react-native';

import { colors } from '@utils/constants';

const CurrencyFormDivider: React.FC = () => (
  <View style={styles.divider} />
)

const styles = StyleSheet.create({
  divider: {
    borderBottomWidth: 0.25,
    borderBottomColor: colors.cloud,
    marginVertical: 20,
  }
})

export default CurrencyFormDivider;
