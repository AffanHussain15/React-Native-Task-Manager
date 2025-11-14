import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { BarChart } from 'react-native-gifted-charts';
import COLOR from '../utils/Color';

const Chart = () => {
  //     const barData = [
  //     {value: 40, label: 'Jan', borderColor: '#FFFFFF' , frontColor: '#007AFF', gradientColor: '#007AFF3D'},
  //     {value: 75, label: 'Feb', frontColor: '#4A90E2', gradientColor: '#50E3C2'},
  //     {value: 50, label: 'Mar', frontColor: '#4A90E2', gradientColor: '#50E3C2'},
  //     {value: 85, label: 'Apr', frontColor: '#4A90E2', gradientColor: '#50E3C2'},
  //     {value: 95, label: 'May', frontColor: '#4A90E2', gradientColor: '#50E3C2'},
  //     {value: 60, label: 'Jun', frontColor: '#4A90E2', gradientColor: '#50E3C2'},
  //     {value: 30, label: 'Jul', frontColor: '#4A90E2', gradientColor: '#50E3C2'},
  //     {value: 45, label: 'Aug', frontColor: '#4A90E2', gradientColor: '#FFFFFF'},
  //     {value: 50, label: 'Sep', frontColor: '#4A90E2', gradientColor: '#50E3C2'},
  //     {value: 40, label: 'Oct', frontColor: '#4A90E2', gradientColor: '#50E3C2'},
  //     {value: 35, label: 'Nov', frontColor: '#4A90E2', gradientColor: '#50E3C2'},
  //     {value: 70, label: 'Dec', frontColor: '#4A90E2', gradientColor: '#50E3C2'},
  //   ];

  const stackData = [
    {
      stacks: [
        { value: 20, color: COLOR.SECONDARY },
        {
          value: 20,
          color: COLOR.DARKGREEN,
          //   marginBottom: 1,
          borderColor: COLOR.WHITE,
          borderWidth: 1,
          backgroundColor: 'transparent',
        },
      ],
      label: 'Jan',
    },
    {
      stacks: [
        { value: 50, color: COLOR.SECONDARY },
        {
          value: 25,
          color: COLOR.DARKGREEN,
          //   marginBottom: 2,
          borderColor: COLOR.WHITE,
          borderWidth: 1,
        },
      ],
      label: 'Feb',
    },
    {
      stacks: [
        { value: 25, color: COLOR.SECONDARY },
        {
          value: 25,
          color: COLOR.DARKGREEN,
          //   marginBottom: 2,
          borderColor: COLOR.WHITE,
          borderWidth: 1,
        },
      ],
      label: 'Mar',
    },
    {
      stacks: [
        { value: 60, color: COLOR.SECONDARY },
        {
          value: 25,
          color: COLOR.DARKGREEN,
          //   marginBottom: 2,
          borderColor: COLOR.WHITE,
          borderWidth: 1,
        },
      ],
      label: 'Apr',
    },
    {
      stacks: [
        { value: 70, color: COLOR.SECONDARY },
        {
          value: 25,
          color: COLOR.DARKGREEN,
          //   marginBottom: 2,
          borderColor: COLOR.WHITE,
          borderWidth: 1,
        },
      ],
      label: 'May',
    },
    {
      stacks: [
        { value: 35, color: COLOR.SECONDARY },
        {
          value: 25,
          color: COLOR.DARKGREEN,
          //   marginBottom: 2,
          borderColor: COLOR.WHITE,
          borderWidth: 1,
        },
      ],
      label: 'Jun',
    },
    {
      stacks: [
        { value: 10, color: COLOR.SECONDARY },
        {
          value: 20,
          color: COLOR.DARKGREEN,
          //   marginBottom: 2,
          borderColor: COLOR.WHITE,
          borderWidth: 1,
        },
      ],
      label: 'Jul',
    },
    {
      stacks: [
        { value: 20, color: COLOR.SECONDARY },
        {
          value: 25,
          color: COLOR.WHITE,
          //   marginBottom: 2,
          borderColor: COLOR.WHITE,
          borderWidth: 1,
        },
      ],
      label: 'Aug',
    },
    {
      stacks: [
        { value: 25, color: COLOR.SECONDARY },
        {
          value: 25,
          color: COLOR.DARKGREEN,
          //   marginBottom: 2,
          borderColor: COLOR.WHITE,
          borderWidth: 1,
        },
      ],
      label: 'Sep',
    },
    {
      stacks: [
        { value: 15, color: COLOR.SECONDARY },
        {
          value: 25,
          color: COLOR.DARKGREEN,
          //   marginBottom: 2,
          borderColor: COLOR.WHITE,
          borderWidth: 1,
        },
      ],
      label: 'Oct',
    },
    {
      stacks: [
        { value: 10, color: COLOR.SECONDARY },
        {
          value: 25,
          color: COLOR.DARKGREEN,
          //   marginBottom: 2,
          borderColor: COLOR.WHITE,
          borderWidth: 1,
        },
      ],
      label: 'Nov',
    },
    {
      stacks: [
        { value: 45, color: COLOR.SECONDARY },
        {
          value: 25,
          color: COLOR.DARKGREEN,
          //   marginBottom: 2,
          borderColor: COLOR.WHITE,
          borderWidth: 1,
        },
      ],
      label: 'Dec',
    },
  ];
  return (
    <View
      style={{
        // backgroundColor: '#0B1221',
        // flex: 1,
        // alignItems: 'center',
        paddingHorizontal: 10,
        justifyContent: 'center',
      }}
    >
      <View
        style={{
          borderWidth: 1,
          borderColor: COLOR.WHITE,
          borderRadius: 10,
          paddingVertical: 20,
          paddingLeft: 4,
          overflow: 'hidden',
          backgroundColor: COLOR.BLUE,
        }}
      >
        <BarChart
          //   data={stackData}
          stackData={stackData}
          barWidth={15}
          spacing={7}
          //   roundedTop
          disablePress
          showGradient={false}
          yAxisThickness={1}
          yAxisColor={COLOR.WHITE}
          xAxisThickness={1}
          xAxisColor={COLOR.WHITE}
          xAxisLabelTextStyle={{
            color: COLOR.WHITE,
            fontSize: 10,
            textDecorationLine: 'line-through',
            textDecorationColor: COLOR.WHITE,
          }}
          yAxisTextStyle={{
            color: COLOR.WHITE,
            fontSize: 10,
            textDecorationLine: 'line-through',
            textDecorationColor: COLOR.WHITE,
          }}
          hideRules={true}
          //   rulesColor={''}
          noOfSections={4}
          maxValue={100}
          yAxisLabelTexts={['0%', '25%', '50%', '75%', '100%']}
          stepValue={25}
          height={160}
          width={300}
          // stackedBar={true}
          barBorderWidth={1}
          barBorderColor={COLOR.WHITE}
          rulesThickness={1}
        />
      </View>
    </View>
  );
};

export default Chart;

const styles = StyleSheet.create({});
