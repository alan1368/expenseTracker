import {View, Text, Dimensions, StyleSheet} from 'react-native';
import React, {useEffect} from 'react';
import {VictoryPie, VictoryLabel} from 'victory-native';
import Data from '../data';

const Chart = ({result, total}) => {
  return (
    <View style={styles.chartContainer}>
      <VictoryPie
        height={250}
        innerRadius={50}
        colorScale={[
          'blueviolet',
          'mediumvioletred',
          'limegreen',
          'darkorange',
          'midnightblue',
          'lightseagreen',
          'teal',
        ]}
        data={result.map(res => ({
          x: res.category,
          y: res.total,
          label: `${Math.floor((res.total / total) * 100)}%  ${res.category}`,
        }))}
        style={{
          labels: {
            fontSize: 14,
            fill: 'snow',
          },
        }}
      />
      <VictoryLabel
        textAnchor="middle"
        verticalAnchor="middle"
        x={200}
        y={200}
        style={{fontSize: 30, tintColor: 'whtite'}}
        text="Label"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  chartContainer: {marginTop: -30},
});

export default Chart;
