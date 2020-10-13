import React from 'react';
import { View, StyleSheet } from 'react-native';

import Chart from '@components/base-ui/Chart';

type CurrencyChartProps = {
  data: number[];
}

const CurrencyChart: React.FC<CurrencyChartProps> = (
  { data }: CurrencyChartProps
) => {
  return (
    <View style={styles.container}>
      <Chart data={data} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})

export default CurrencyChart;
