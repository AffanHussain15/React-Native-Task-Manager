import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { BarChart } from 'react-native-gifted-charts';
import COLOR from '../utils/Color';

const PriorityTask = () => {
  const barData = [
    {
      value: 56635,
      frontColor: COLOR.LIGHTGREEN,
      barWidth: 20,
      topLabelComponent: () => <Text style={styles.topLabel}>{'56,635'}</Text>,
    },
    {
      value: 74779,
      frontColor: COLOR.EDITBTNCOLOR,
      barWidth: 20,
      topLabelComponent: () => <Text style={styles.topLabel}>{'74,779'}</Text>,
    },
    {
      value: 19027,
      frontColor: '#FF0404',
      barWidth: 20,
      topLabelComponent: () => <Text style={styles.topLabel}>{'19 ,027'}</Text>,
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.chartContainer}>
        <BarChart
          data={barData}
          barWidth={13}
          spacing={20}
          horizontal
          showGradient={false}
          yAxisThickness={0}
          //   yAxisColor={'#2C3345'}
          disablePress
          xAxisThickness={1}
          xAxisColor={COLOR.WHITE}
          xAxisLabelTextStyle={{
            color: COLOR.WHITE,
            fontSize: 9,
            // marginRight: 5,
            marginLeft: -13,
            marginTop: 1,
            textAlign: 'center',
            transform: [{rotate: '315deg'}]
          }}
          xAxisLabelTexts={['LOW', 'MEDIUM', 'HIGH']}
          yAxisTextStyle={{ color: COLOR.WHITE, fontSize: 10 }}
          hideRules={false}
          rulesColor={COLOR.WHITE}
          rulesType="solid"
          rulesThickness={1}
          noOfSections={4}
          maxValue={80000}
          stepValue={20000}
          yAxisLabelTexts={['0', '20K', '40K', '60K', '80K']}
          height={110}
          width={220}
        />
      </View>
    </View>
  );
};

export default PriorityTask;

const styles = StyleSheet.create({
  container: {
    // backgroundColor: 'red',
    // flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
    paddingHorizontal: 10,
    paddingBottom: 20,
  },
  chartContainer: {
    borderWidth: 1,
    borderColor: COLOR.WHITE,
    borderRadius: 10,
    // paddingVertical: 10,
    // paddingHorizontal: 10,
    // overflow: 'hidden',
    backgroundColor: COLOR.BLUE,
    height: 220,
    flex: 1,
  },
  topLabel: {
    color: COLOR.WHITE,
    fontSize: 12,
    marginLeft: -65,
    // flex: 1,
    // marginRight: -19
  },
});
