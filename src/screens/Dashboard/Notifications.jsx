import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useState } from 'react';
import DashboardWrapper from '../../components/DashboardWrapper';
import Header from '../../components/Header';
import Line from '../../components/Line';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import COLOR from '../../utils/Color';
import { FONTS } from '../../utils/Fonts';

const Notifications = ({navigation}) => {
  const [activeTab, setActiveTab] = useState('All');

  const cards = [
    {
      id: 1,
      type: 'Assignment',
      title:
        'New assignment • You were assigned to "Design onboarding illustrations".',
      time: '2m ago',
      action: 'Assignment',
    },
    {
      id: 2,
      type: 'Update',
      title: 'Status updated • "Homepage revamp" moved to In Review.',
      time: '18m ago',
      action: 'Update',
    },
    {
      id: 3,
      type: 'Assignment',
      title:
        'New assignment • You were assigned to "Design onboarding illustrations".',
      time: '2m ago',
      action: 'Assignment',
    },
    {
      id: 4,
      type: 'Update',
      title: 'Status updated • "Homepage revamp" moved to In Review.',
      time: '18m ago',
      action: 'Update',
    },
  ];

  const filteredCards =
    activeTab === 'All' ? cards : cards.filter(card => card.type === activeTab);
  return (
    <DashboardWrapper>
      <Header navigation={navigation} title="Notifications" />
      <Line />
      <View style={styles.tabContainer}>
        {['All', 'Assignment', 'Update', 'Messages'].map(tab => (
          <TouchableOpacity
            key={tab}
            style={[styles.tab, activeTab === tab && styles.activeTab]}
            onPress={() => setActiveTab(tab)}
          >
            <Text
              style={[
                styles.tabText,
                activeTab === tab && styles.activeTabText,
              ]}
            >
              {tab}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      <ScrollView style={styles.cardContainer}>
        {filteredCards.map(card => (
          <Pressable key={card.id} style={styles.card}>
            <View style={styles.cardIcon}>
              {/* <Text style={styles.icon}>
                {card.type === 'Assignment' ? '📝' : '🔄'}
              </Text> */}
              {card.type === 'Assignment' ? (
                <Image
                  source={require('../../assets/assignmentIcon.png')}
                  style={styles.customIcon}
                />
              ) : (
                <Image
                  source={require('../../assets/updateIcon.png')}
                  style={styles.customIcon2}
                />
              )}
              <Text style={styles.cardTitle}>{card.title}</Text>
              <View style={styles.rightArrowCon}>
                <MaterialIcons
                  style={styles.rightArrow}
                  name={'keyboard-arrow-right'}
                />
              </View>
            </View>
            <View style={styles.cardContent}>
              <Text style={styles.cardTime}>{card.time}</Text>
              <TouchableOpacity style={styles.cardButton}>
                <Text style={styles.cardButtonText}>{card.action}</Text>
              </TouchableOpacity>
            </View>
          </Pressable>
        ))}
      </ScrollView>
    </DashboardWrapper>
  );
};

export default Notifications;

const styles = StyleSheet.create({
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    backgroundColor: COLOR.WHITE,
    paddingHorizontal: 8,
  },
  tab: {
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  activeTab: {
    borderWidth: 1,
    borderColor: COLOR.BLACK,
    borderRadius: 5,
    paddingHorizontal: 14,
  },
  tabText: {
    color: COLOR.BLACK,
    fontSize: 12,
    fontFamily: FONTS.MEDIUM,
  },
  activeTabText: {
    color: COLOR.BLACK,
    fontFamily: FONTS.MEDIUM,
  },
  cardContainer: {
    flex: 1,
    padding: 10,
  },
  card: {
    // flexDirection: 'row',
    // alignItems: 'center',
    backgroundColor: COLOR.BLUE,
    paddingHorizontal: 12,
    paddingVertical: 10,
    marginBottom: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#FFFFFF4A',
  },
  cardIcon: {
    // marginRight: 10,
    flexDirection: 'row',
  },
  icon: {
    fontSize: 20,
    color: COLOR.WHITE,
  },
  cardContent: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginLeft: 35,
    marginTop: 5,
  },
  customIcon: {
    width: 24,
    height: 24,
    marginRight: 10,
    marginTop: 5,
  },
  customIcon2: {
    width: 25,
    height: 23,
    marginRight: 10,
    marginTop: 5,
  },
  cardTitle: {
    color: COLOR.WHITE,
    fontSize: 13,
    fontFamily: FONTS.MEDIUM,
    width: '80%',
    marginTop: 3
  },
  rightArrowCon:{
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: -18
  },
  rightArrow: {
    color: COLOR.WHITE,
    fontSize: 26,
    marginLeft: 11,
    marginTop: 10,
  },
  cardTime: {
    color: COLOR.WHITE,
    fontSize: 12,
    fontFamily: FONTS.LIGHT,
  },
  cardButton: {
    backgroundColor: '#F0F5FD',
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  cardButtonText: {
    color: COLOR.SECONDARY,
    fontSize: 11,
    fontFamily: FONTS.MEDIUM,
  },
});
