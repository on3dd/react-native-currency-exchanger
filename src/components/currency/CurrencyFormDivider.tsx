import React from 'react';
import { View, StyleSheet } from 'react-native';

import { COLORS } from '@utils/constants';

const CurrencyFormDivider: React.FC = () => (
  <View style={styles.divider} />
)

const styles = StyleSheet.create({
  divider: {
    borderBottomWidth: 0.25,
    borderBottomColor: COLORS.cloud,
    marginVertical: 20,
  }
})

export default CurrencyFormDivider;
