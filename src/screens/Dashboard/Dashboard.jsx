import {
  FlatList,
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useCallback, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import DashboardWrapper from '../../components/DashboardWrapper';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MyButton from '../../components/MyButton';
import { useFocusEffect } from '@react-navigation/native';
import Chart from '../../components/Chart';
import PriorityTask from '../../components/PriorityTask';
import COLOR from '../../utils/Color';
import { FONTS } from '../../utils/Fonts';

const Dashboard = ({ navigation }) => {
  const [isAssigned, setIsAssigned] = useState(true);
  const [activeTab, setActiveTab] = useState('assigned');

  useFocusEffect(
    useCallback(() => {
      navigation.getParent().setOptions({
        tabBarStyle: {
          display: 'flex',
          height: 60,
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
          borderColor: '#101922',
          borderWidth: 1,
          overflow: 'hidden',
          position: 'absolute',
          bottom: 0,
          backgroundColor: '#1C2127',
          elevation: 15,
        },
      });
    }, []),
  );

  const COLORS = ['#CDC88A', '#D81313', '#007AFF', '#1C2127', '#FFAE00'];

  const data = {
    assigned: [
      { id: '1', title: 'Total Tasks Assign', value: '1,234', change: '+5%' },
      { id: '2', title: 'Completed', value: '890', change: '+10%' },
      { id: '3', title: 'Over Due Task', value: '344', change: '-2%' },
      { id: '4', title: 'high Priority Task', value: '95%', change: '+10%' },
      // { id: '5', title: 'Total Tasks Assign', value: '1,234', change: '+5%' },
    ],
    created: [
      { id: '1', title: 'Total Tasks Assign', value: '1,234', change: '+5%' },
      { id: '2', title: 'Completed', value: '890', change: '+10%' },
      { id: '3', title: 'Over Due Task', value: '344', change: '-2%' },
      { id: '4', title: 'high Priority Task', value: '95%', change: '+10%' },
      // { id: '5', title: 'Total Tasks Assign', value: '1,234', change: '+5%' },
    ],
  };

  const renderItem = ({ item, index }) => {
    // const color = COLORS[index % COLORS.length];
    const height = [130, 100, 100, 130];
    const cardHeight = height[index];
    // const marginTop = index % 2 === 0 ? 0 : -10;
    const margin = [10, 10, 10, -20];
    const marginTop = margin[index];
    return (
      <View style={[styles.card, { height: cardHeight, marginTop }]}>
        <Text style={styles.title3}>{item.title}</Text>
        <Text style={styles.value}>{item.value}</Text>
        <Text style={styles.change}>{item.change}</Text>
      </View>
    );
  };
  return (
    <DashboardWrapper>
      <ScrollView showsVerticalScrollIndicator={false} style={styles.scrollCon}>
        <View style={styles.header}>
          <View style={styles.logoCon}>
            <Image
              style={styles.logo}
              source={require('../../assets/logo.png')}
            />
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <TouchableOpacity
              onPress={() => navigation.navigate('Notifications')}
              style={styles.notificationIconCon}
            >
              <Image
                style={styles.notificationIcon}
                source={require('../../assets/notification.png')}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate('Profile')}
              style={styles.menuCon}
            >
              {/* <Entypo name={'menu'} size={28} color="#FFFFFF" /> */}
              <Image
                style={styles.profileImg}
                source={require('../../assets/profileImg.png')}
              />
            </TouchableOpacity>
          </View>
        </View>
        <Text style={styles.title}>Dashboard !</Text>
        <Text style={styles.title2}>Stay calm and productive today</Text>

        <View style={styles.buttonCon}>
          {/* <TouchableOpacity
            style={[
              styles.button,
              isAssigned ? styles.activeButton : styles.inactiveButton,
            ]}
            onPress={() => setIsAssigned(true)}
          >
            <Text style={styles.text}>Assigned To Me</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.button,
              !isAssigned ? styles.activeButton : styles.inactiveButton,
            ]}
            onPress={() => setIsAssigned(false)}
          >
            <Text style={styles.text}>Created By Me</Text>
          </TouchableOpacity> */}
          <TouchableOpacity
            style={[
              styles.button,
              activeTab === 'assigned' && styles.activeButton,
            ]}
            onPress={() => setActiveTab('assigned')}
          >
            <Text style={styles.text}>Assigned To Me</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.button,
              activeTab === 'created' && styles.activeButton,
            ]}
            onPress={() => setActiveTab('created')}
          >
            <Text style={styles.text}>Created By Me</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          data={data[activeTab]}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          numColumns={2}
          columnWrapperStyle={styles.row}
        />

        <View style={styles.cardContainer}>
          <View style={styles.textContainer}>
            <Text style={styles.manageTitle}>Manage Category</Text>
            <Text style={styles.description}>
              Organize your tasks with custom categories.
            </Text>
          </View>
          <View style={styles.manageBtn}>
            <MyButton
              btnTitle="View/Edit Category"
              textColor={COLOR.WHITE}
              color={COLOR.SECONDARY}
              width={125}
              height={40}
              radius={10}
              fontSize={11}
              onPress={() => navigation.navigate('ManageCategory')}
            />
          </View>
        </View>
        <View style={styles.cardContainer2}>
          <View style={styles.textContainer}>
            <Text style={styles.manageTitle}>Manage Status</Text>
            <Text style={styles.description}>
              Organize your tasks with custom categories.
            </Text>
          </View>
          <View style={styles.manageBtn}>
            <MyButton
              btnTitle="View/Edit Category"
              textColor={COLOR.WHITE}
              color={COLOR.SECONDARY}
              width={125}
              height={40}
              radius={10}
              fontSize={11}
              onPress={() => navigation.navigate('ManageStatus')}
            />
          </View>
        </View>

        <View>
          <Text style={styles.title4}>Task Completion Rate</Text>
          <Chart />
        </View>
        <View>
          <Text style={styles.title5}>PriorityTask</Text>
          <PriorityTask />
        </View>
      </ScrollView>
    </DashboardWrapper>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  scrollCon: {
    paddingHorizontal: 5,
    marginBottom: 60,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  logoCon: {
    width: 165,
    height: 60,
    // alignSelf: 'center',
    marginTop: 10,
    marginLeft: 10,
  },
  logo: {
    width: '100%',
    height: '100%',
  },
  notificationIconCon: {
    width: 38,
    height: 38,
    borderRadius: 50,
    backgroundColor: '#D9D9D991',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 21,
    marginRight: 10,
  },
  notificationIcon: {
    width: 16,
    height: 18,
    tintColor: '#6B7280',
  },
  menuCon: {
    marginRight: 10,
    marginTop: 21,
  },
  profileImg: {
    width: 38,
    height: 38,
  },
  title: {
    fontSize: 19,
    color: COLOR.BLUE,
    fontFamily: FONTS.SEMIBOLD,
    paddingLeft: 10,
    marginTop: 10,
  },
  title2: {
    fontSize: 15,
    color: COLOR.BLUE,
    fontFamily: FONTS.LIGHT,
    paddingLeft: 10,
  },
  buttonCon: {
    flexDirection: 'row',
    backgroundColor: COLOR.BLUE,
    padding: 5,
    borderRadius: 10,
    // borderWidth: 1,
    // borderColor: '#FFFFFF69',
    marginHorizontal: 8,
    marginTop: 10,
  },
  button: {
    flex: 1,
    paddingVertical: 6,
    alignItems: 'center',
  },
  activeButton: {
    backgroundColor: COLOR.SECONDARY,
    borderRadius: 8,
  },
  inactiveButton: {
    backgroundColor: '#18212D',
  },
  text: {
    color: COLOR.WHITE,
    fontFamily: FONTS.MEDIUM,
    fontSize: 13,
  },
  row: {
    justifyContent: 'space-between',
    paddingHorizontal: 5,
    // marginTop: 5,
    // gap: 0,
    // flex: 1,
    // height: 120 ,
    // backgroundColor: 'red',
    alignItems: 'flex-start',
  },
  card: {
    // flex: 1,
    margin: 5,
    // padding: 8,
    borderRadius: 5,
    justifyContent: 'center',
    // height: 100,
    // paddingLeft: 10,
    backgroundColor: COLOR.BLUE,
    width: '46.5%',
  },
  title3: {
    color: COLOR.WHITE,
    fontSize: 14,
    fontFamily: FONTS.MEDIUM,
    textAlign: 'center',
    // lineHeight: 17,
  },
  value: {
    color: COLOR.WHITE,
    fontSize: 28,
    fontFamily: FONTS.SEMIBOLD,
    textAlign: 'center',
    marginTop: -6
    // lineHeight: 33,
  },
  change: {
    color: COLOR.WHITE,
    fontSize: 14,
    fontFamily: FONTS.MEDIUM,
    textAlign: 'center',
  },
  cardContainer: {
    backgroundColor: '#1E293B',
    borderRadius: 7,
    height: 122,
    alignItems: 'center',
    margin: 10,
    borderWidth: 1,
    borderColor: '#FFFFFF4A',
    paddingHorizontal: 12,
    paddingVertical: 10,
    marginTop: 12,
  },
  cardContainer2: {
    backgroundColor: '#1E293B',
    borderRadius: 7,
    height: 122,
    // alignItems: 'center',
    margin: 10,
    borderWidth: 1,
    borderColor: '#FFFFFF4A',
    paddingHorizontal: 13,
    paddingVertical: 10,
    marginTop: 6,
  },
  textContainer: {
    flex: 1,
    alignSelf: 'flex-start',
  },
  manageTitle: {
    color: COLOR.WHITE,
    fontSize: 16,
    // marginBottom: 2,
    fontFamily: FONTS.SEMIBOLD,
  },
  description: {
    color: COLOR.WHITE,
    fontSize: 12,
    fontFamily: FONTS.LIGHT,
    width: 200,
    // backgroundColor: 'red'
  },
  rightText: {
    color: COLOR.WHITE,
    fontSize: 16,
    fontWeight: '500',
  },
  manageBtn: {
    alignSelf: 'flex-end',
    marginBottom: 2,
  },
  title4: {
    fontSize: 18,
    color: COLOR.BLUE,
    fontFamily: FONTS.SEMIBOLD,
    paddingLeft: 10,
    marginTop: 8,
    marginBottom: 6,
  },
  title5: {
    fontSize: 17,
    color: COLOR.BLUE,
    fontFamily: FONTS.SEMIBOLD,
    paddingLeft: 10,
    marginTop: 17,
    marginBottom: 7,
  },
});
