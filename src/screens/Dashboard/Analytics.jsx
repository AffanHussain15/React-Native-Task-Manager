import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, { useState } from 'react';
import DashboardWrapper from '../../components/DashboardWrapper';
import Header from '../../components/Header';
import Line from '../../components/Line';
import ToggleButton from '../../components/ToogleButton';
import Ionicons from 'react-native-vector-icons/Ionicons';
import DonutChart from '../../components/DonutChart';
import Chart from '../../components/Chart';
import COLOR from '../../utils/Color';
import { FONTS } from '../../utils/Fonts';

const Analytics = ({ navigation }) => {
  const [activeTab, setActiveTab] = useState('individual');
  const toggleOptions = [
    { label: 'Team Overview', value: 'individual' },
    { label: 'Individual Performance', value: 'team' },
  ];

  const data = {
    individual: [
      { id: '1', title: 'Total Tasks Assigned', value: '1,234', change: '+5%' },
      { id: '2', title: 'Completed', value: '890', change: '+10%' },
      {
        id: '3',
        title: 'Over Due Task',
        value: '344',
        change: '-2%',
        red: 'true',
      },
      { id: '4', title: 'High Priority Task', value: '95%', change: '+10%' },
    ],
    team: [
      { id: '1', title: 'Tasks Completed', value: '1,234', change: '+5%' },
      { id: '2', title: 'OverDue Tasks', value: '890', change: '+10%' },
      {
        id: '3',
        title: 'Productivity Rate',
        value: '344',
        change: '-2%',
        red: 'true',
      },
      { id: '4', title: 'avg. Completion', value: '2.5d', change: '+10%' },
    ],
  };

  const performanceData = [
    { id: 1, name: 'Olivia Martinez', tasks: 25, percent: 96 },
    { id: 2, name: 'Olivia Martinez', tasks: 25, percent: 96 },
    { id: 3, name: 'Olivia Martinez', tasks: 25, percent: 96 },
  ];

  const TaskCard = ({ item }) => (
    <View style={styles.performanceCard}>
      <Image
        source={require('../../assets/profileImg.png')}
        style={styles.profile}
      />
      <View style={styles.textContainer}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.tasks}>{item.tasks} Tasks Completed</Text>
      </View>
      <View style={styles.percentContainer}>
        <Ionicons name="trending-up" size={29} color="#0AB20A" />
        <Text style={styles.percent}>{item.percent}%</Text>
      </View>
    </View>
  );

  const renderItem = ({ item, index }) => {
     const height = [130, 100, 100, 130];
    const cardHeight = height[index];
    const margin = [10, 10, 10, -20];
    const marginTop = margin[index];
    return (
      <View style={[styles.card, { height: cardHeight , marginTop }]}>
        <Text style={styles.title3}>{item.title}</Text>
        <Text style={styles.value}>{item.value}</Text>
        {/* <Text style={[item.red ? styles.change2 : styles.change]}> */}
        <Text style={[styles.change]}>
          {item.change}
        </Text>
      </View>
    );
  };

  return (
    <DashboardWrapper>
      <Header
        icon={require('../../assets/notes.png')}
        navigation={navigation}
        title="Performance Dashboard"
      />
      <Line />
      <ScrollView showsVerticalScrollIndicator={false}>
        <ToggleButton
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          options={toggleOptions}
        />
        <FlatList
          data={data[activeTab]}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          numColumns={2}
          columnWrapperStyle={styles.row}
        />

        <View style={{ paddingHorizontal: 5 }}>
          <Text style={styles.title4}>Task Completion Rate</Text>
          <Chart />
        </View>

        <View style={styles.chartCon}>
          <Text style={styles.chartTitle}>Overdue Tasks by Assignee</Text>
          <Text style={styles.chartWeek}>This Week</Text>
          <DonutChart />

          <View style={{ flexDirection: 'row', alignSelf: 'center', gap: 10 }}>
            <View style={styles.designCon}>
              <View style={styles.designIcon} />
              <Text style={styles.design}>Design Team (6)</Text>
            </View>
            <View style={styles.engCon}>
              <View style={styles.engIcon} />
              <Text style={styles.eng}>Engineering (5)</Text>
            </View>
          </View>
          <View style={styles.markCon}>
            <View style={styles.markIcon} />
            <Text style={styles.mark}>Marketing (4)</Text>
          </View>
        </View>

        <Text style={styles.topText}>Top Performers This Week</Text>

        <FlatList
          data={performanceData}
          renderItem={({ item }) => <TaskCard item={item} />}
          keyExtractor={item => item.id.toString()}
          scrollEnabled={false}
          style={{ marginTop: 15, paddingBottom: 65 }}
        />
      </ScrollView>
    </DashboardWrapper>
  );
};

export default Analytics;

const styles = StyleSheet.create({
  card: {
    // flex: 1,
    margin: 5,
    // padding: 8,
    borderRadius: 5,
    justifyContent: 'center',
    height: 100,
    // paddingLeft: 10,
    backgroundColor: COLOR.BLUE,
    width: '46.5%'
  },
  title3: {
    color: COLOR.WHITE,
    fontSize: 14,
    fontFamily: FONTS.MEDIUM,
    textAlign: 'center',
    // lineHeight: 15,
    marginTop: 5
  },
  value: {
    color: COLOR.WHITE,
    fontSize: 22,
    fontFamily: FONTS.SEMIBOLD,
    textAlign: 'center',
    // lineHeight: 33
  },
  change: {
    color: COLOR.WHITE,
    fontSize: 14,
    fontFamily: FONTS.MEDIUM,
    textAlign: 'center',
  },
  change2: {
    color: COLOR.WHITE,
    fontSize: 14,
    fontFamily: FONTS.MEDIUM,
    textAlign: 'center',
  },
  row: {
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    marginTop: 3,
    gap: 1,
    flex: 1,
  },
  performanceCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLOR.INPUTWHITE,
    borderRadius: 10,
    padding: 12,
    marginBottom: 10,
    marginHorizontal: 15,
  },
  profile: {
    width: 45,
    height: 45,
    borderRadius: 25,
  },
  textContainer: {
    flex: 1,
    marginLeft: 10,
  },
  name: {
    color: COLOR.BLACK,
    fontSize: 15,
    fontFamily: FONTS.SEMIBOLD,
  },
  tasks: {
    color: COLOR.BLACK,
    fontSize: 13,
    fontFamily: FONTS.MEDIUM,
  },
  percentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  percent: {
    color: COLOR.SECONDARY,
    fontSize: 13,
    marginLeft: 4,
    fontFamily: FONTS.SEMIBOLD,
  },
  chartCon: {
    backgroundColor: COLOR.INPUTWHITE,
    borderRadius: 10,
    paddingHorizontal: 15,
    width: '90%',
    alignSelf: 'center',
    marginTop: 20,
    paddingVertical: 15,
  },
  chartTitle: {
    color: COLOR.SECONDARY,
    fontSize: 14,
    fontFamily: FONTS.MEDIUM,
    // marginTop: 15,
  },
  chartWeek: {
    fontSize: 13,
    color: COLOR.SECONDARY,
    fontFamily: FONTS.MEDIUM,
  },
  designCon: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  designIcon: {
    width: 14,
    height: 14,
    borderRadius: 7,
    backgroundColor: '#F59E0B',
  },
  design: {
    fontSize: 14,
    color: '#F59E0B',
    fontFamily: FONTS.MEDIUM,
    marginTop: 2,
    marginLeft: 3,
  },
  engCon: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  engIcon: {
    width: 14,
    height: 14,
    borderRadius: 7,
    backgroundColor: COLOR.LIGHTBLUE,
  },
  eng: {
    fontSize: 14,
    color: COLOR.LIGHTBLUE,
    fontFamily: FONTS.MEDIUM,
    marginTop: 2,
    marginLeft: 3,
  },
  markCon: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 5,
  },
  markIcon: {
    width: 14,
    height: 14,
    borderRadius: 9,
    backgroundColor: '#14B8A6',
  },
  mark: {
    fontSize: 14,
    color: '#14B8A6',
    fontFamily: FONTS.MEDIUM,
    marginTop: 2,
    marginLeft: 3,
  },
  title4: {
    fontSize: 18,
    color: COLOR.BLUE,
    fontFamily: FONTS.SEMIBOLD,
    paddingLeft: 10,
    marginTop: 12,
    marginBottom: 7,
  },
  topText: {
    fontFamily: FONTS.SEMIBOLD,
    color: COLOR.BLACK,
    fontSize: 15,
    marginLeft: 60,
    marginTop: 15,
  },
});
