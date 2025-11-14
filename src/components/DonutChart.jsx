import { StyleSheet, View, Text } from 'react-native';
import React from 'react';
import { PieChart } from 'react-native-gifted-charts';
import COLOR from '../utils/Color';

const DonutChart = () => {
  const pieData = [
    { value: 25, color: '#14B8A6' }, 
    { value: 15, color: COLOR.LIGHTBLUE }, 
    { value: 10, color: '#6366F1' }, 
    { value: 20, color: '#EC4899' }, 
    { value: 15, color: '#F59E0B' }, 
    { value: 15, color: '#FACC15' }, 
  ];

  return (
    <View style={styles.container}>
      <View style={styles.chartContainer}>
        <PieChart
          data={pieData}
          donut
          showText 
          showTextBackground={false}
          innerRadius={70} 
          radius={100} 
          focusOnPress={false} 
          width={200}
          height={200}
          borderWidth={1}
          borderColor={COLOR.WHITE}
          innerCircleBorderWidth={2}
          innerCircleBorderColor={COLOR.WHITE}
          // backgroundColor="#1C2127"
          strokeColor={COLOR.WHITE}
          strokeWidth={2}
          centerLabelComponent={() => {
            return (
              <View>
                <Text style={styles.innerText}>72</Text>
              </View>
            );
          }}
        />
      </View>
    </View>
  );
};

export default DonutChart;

const styles = StyleSheet.create({
  container: {
    // backgroundColor: 'red',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  chartContainer: {
    borderRadius: 8,
    padding: 20,
    backgroundColor: COLOR.INPUTWHITE,
  },
  innerText: {
    color: '#4530B2',
    fontSize: 24,
    fontWeight: 'bold',
  },
});
