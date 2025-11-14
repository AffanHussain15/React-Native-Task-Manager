import {
  Image,
  Keyboard,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useCallback, useEffect, useState } from 'react';
import DashboardWrapper from '../../components/DashboardWrapper';
import Header from '../../components/Header';
import Line from '../../components/Line';
import { useFocusEffect } from '@react-navigation/native';
import { Dropdown } from 'react-native-element-dropdown';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import COLOR from '../../utils/Color';
import { FONTS } from '../../utils/Fonts';

const TaskDetail = ({ navigation }) => {
  const [descValue, setDescValue] = useState(null);
  const [projectValue, setProjectValue] = useState(null);
  useFocusEffect(
    useCallback(() => {
      navigation.getParent()?.setOptions({
        tabBarStyle: {
          display: 'none',
        },
      });
    }, []),
  );

  useEffect(() => {
    const keyboardDidShow = Keyboard.addListener('keyboardDidShow', () => {
      navigation.getParent()?.setOptions({
        tabBarStyle: {
          display: 'none',
        },
      });
    });
    const keyboardDidHide = Keyboard.addListener('keyboardDidHide', () => {
      navigation.getParent()?.setOptions({
        tabBarStyle: {
          display: 'none',
        },
      });
    });

    return () => {
      keyboardDidShow.remove();
      keyboardDidHide.remove();
    };
  }, [navigation]);

  const renderFilter = item => {
    return (
      <View style={styles.item}>
        <Text style={styles.itemText}>{item.label}</Text>
      </View>
    );
  };

  const dropDownData = [
    { label: 'Item 1', value: '1' },
    { label: 'Item 2', value: '2' },
    { label: 'Item 3', value: '3' },
    { label: 'Item 4', value: '4' },
    { label: 'Item 5', value: '5' },
  ];

  return (
    <DashboardWrapper>
      <Header
        title="Task Detail"
        icon={require('../../assets/threeDot.png')}
        iconStyle={{ height: 18, width: 4 }}
        navigation={navigation}
      />
      <Line />
      <ScrollView style={styles.scrollCon} showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>Design the new homepage</Text>
        <View style={styles.inprogressCon}>
          {/* <View style={styles.inprogress}>
            <Text style={styles.title2}>In Progress</Text>
          </View> */}
          <Dropdown
            style={[
              styles.dropdown2,
              projectValue && {
                backgroundColor: COLOR.SECONDARY,
                borderColor: COLOR.SECONDARY,
              },
            ]}
            placeholderStyle={styles.placeholderStyle2}
            selectedTextStyle={styles.selectedTextStyle2}
            iconStyle={styles.iconStyle2}
            data={dropDownData}
            maxHeight={220}
            labelField="label"
            valueField="value"
            placeholder="Filter by Status"
            value={projectValue}
            onChange={item => {
              setProjectValue(item.value);
            }}
            renderItem={renderFilter}
            renderCustomizedHeaderValue={selectedItem => (
              <Text style={styles.selectedTextStyle}>
                {selectedItem || 'Category'}
              </Text>
            )}
            iconComponent={<View />}
            // iconComponent={
            //   <Entypo
            //     name={projectValue ? 'chevron-up' : 'chevron-down'}
            //     size={20}
            //     color="#FFFFFF"
            //   />
            // }
          />
          <View style={styles.imgCon}>
            <TouchableOpacity style={styles.menuCon}>
              <Image
                style={styles.profileImg}
                source={require('../../assets/profileImg.png')}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuCon}>
              <Image
                style={styles.profileImg}
                source={require('../../assets/profileImg.png')}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuCon}>
              <Image
                style={styles.profileImg}
                source={require('../../assets/profileImg.png')}
              />
            </TouchableOpacity>
          </View>
        </View>

        <TouchableOpacity style={styles.projectCon}>
          <View style={styles.bulbCon}>
            <Image
              style={styles.bulb}
              source={require('../../assets/bulb.png')}
            />
          </View>
          <Text style={styles.projectTitle}>Project Phoenix</Text>
          <Image
            style={styles.arrow}
            source={require('../../assets/rightArrow.png')}
          />
        </TouchableOpacity>

        <View style={styles.dueCon}>
          <View style={styles.dueDateCon}>
            <View style={styles.calendarCon}>
              <Image
                style={styles.calendarIcon}
                source={require('../../assets/calendarIcon2.png')}
              />
            </View>
            <View style={styles.dateCon}>
              <Text style={styles.dueTitle}>Due Date</Text>
              <Text style={styles.date}>Dec 25, 2023</Text>
            </View>
          </View>

          <View style={styles.dueDateCon2}>
            <View style={styles.alertCon}>
              <Image
                style={styles.alertIcon}
                source={require('../../assets/alert.png')}
              />
            </View>
            <View style={styles.priorityCon}>
              <Text style={styles.alertTitle}>Priority</Text>
              <Text style={styles.high}>High</Text>
            </View>
          </View>
        </View>

        <Dropdown
          style={[styles.dropdown]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          iconStyle={styles.iconStyle}
          data={dropDownData}
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder="Description"
          value={descValue}
          onChange={item => {
            setDescValue(item.value);
          }}
          renderItem={renderFilter}
          renderCustomizedHeaderValue={selectedItem => (
            <Text style={styles.selectedTextStyle}>
              {selectedItem || 'Description'}
            </Text>
          )}
          iconComponent={
            <Entypo
              name={descValue ? 'chevron-up' : 'chevron-down'}
              size={28}
              color={COLOR.WHITE}
            />
          }
        />

        <Text style={styles.title3}>Attachments</Text>
        <View style={styles.attachmentCon}>
          <Image
            style={styles.attachment1}
            source={require('../../assets/attachment1.png')}
          />
          <Image
            style={styles.attachment1}
            source={require('../../assets/attachment2.png')}
          />
          <Image
            style={styles.attachment1}
            source={require('../../assets/attachment3.png')}
          />
        </View>
        <Text style={styles.title4}>Activity</Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingBottom: 60,
          }}
        >
          <TouchableOpacity style={styles.activityImgCon}>
            <Image
              style={styles.activityProfileImg}
              source={require('../../assets/profileImg.png')}
            />
          </TouchableOpacity>
          <View style={styles.messageCon}>
            <View style={styles.messageHeader}>
              <Text style={styles.messageSenderName}>Mike P.</Text>
              <Text style={styles.messagetime}>2 hours ago</Text>
            </View>
            <Text style={styles.messageContent}>
              Here's the first draft of the wireframes. Let me know your
              thoughts!
            </Text>
          </View>
        </View>
      </ScrollView>
      <View style={styles.lineCon}>
        <View style={styles.line} />
      </View>
      <View style={styles.inputCon}>
        <View style={styles.textInputCon}>
          <TextInput
            style={styles.textInput}
            placeholderTextColor={COLOR.BLACK}
            placeholder="Enter Message"
            multiline
            numberOfLines={2}
          />
          <TouchableOpacity>
            <Image
              style={styles.linkIcon}
              source={require('../../assets/link2.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            {/* <Image
              style={styles.micIcon}
              source={require('../../assets/mic.png')}
            /> */}
            <Feather name={'mic'} size={20} color={COLOR.SECONDARY} />
          </TouchableOpacity>
        </View>
        <TouchableOpacity>
          <Image
            style={styles.sendIcon}
            source={require('../../assets/send.png')}
          />
        </TouchableOpacity>
      </View>
    </DashboardWrapper>
  );
};

export default TaskDetail;

const styles = StyleSheet.create({
  scrollCon: {
    paddingHorizontal: 15,
  },
  title: {
    fontSize: 28,
    color: COLOR.BLACK,
    fontFamily: FONTS.SEMIBOLD,
  },
  title2: {
    fontSize: 14,
    color: COLOR.WHITE,
    fontFamily: FONTS.MEDIUM,
    paddingLeft: 10,
  },
  inprogressCon: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  // dropdown
  dropdown2: {
    height: 35,
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 8,
    backgroundColor: COLOR.LIGHTGREEN,
    borderWidth: 1,
    borderColor: COLOR.LIGHTGREEN,
    // marginLeft: 8,
    marginTop: 10,
    width: 130,
    elevation: 3,
    marginBottom: 5,
    textAlign: 'center',
  },
  item: {
    padding: 9,
    marginTop: 1,
    backgroundColor: COLOR.LIGHTGREEN,
    minWidth: 60,
    // borderRadius: 5,
  },
  itemText: {
    color: COLOR.WHITE,
    fontSize: 12,
    fontFamily: FONTS.MEDIUM,
  },
  placeholderStyle2: {
    fontSize: 12,
    color: COLOR.WHITE,
    fontFamily: FONTS.MEDIUM,
    textAlign: 'center',
  },
  selectedTextStyle2: {
    fontSize: 11,
    color: COLOR.WHITE,
    marginLeft: 2,
    fontFamily: FONTS.MEDIUM,
    paddingHorizontal: 5,
  },
  iconStyle2: {
    width: 20,
    height: 20,
    tintColor: COLOR.WHITE,
  },
  selectedValue: {
    color: COLOR.WHITE,
    marginTop: 10,
    fontSize: 14,
  },
  inprogress: {
    backgroundColor: COLOR.LIGHTGREEN,
    borderRadius: 5,
    paddingHorizontal: 5,
  },
  imgCon: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 20,
  },
  menuCon: {
    marginLeft: -15,
  },
  profileImg: {
    width: 38,
    height: 38,
  },
  projectCon: {
    backgroundColor: COLOR.INPUTWHITE,
    paddingVertical: 8,
    paddingHorizontal: 10,
    borderRadius: 6,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  bulbCon: {
    width: 40,
    height: 40,
    backgroundColor: COLOR.SECONDARY,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bulb: {
    width: 26,
    height: 26,
  },
  projectTitle: {
    fontSize: 15,
    color: COLOR.BLACK,
    fontFamily: FONTS.MEDIUM,
    marginLeft: 20,
  },
  arrow: {
    width: 10,
    height: 14,
    marginLeft: 110,
    tintColor: COLOR.BLACK,
  },
  dueCon: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 15,
    marginBottom: 10,
  },
  dueDateCon: {
    backgroundColor: '#EB7600',
    flexDirection: 'row',
    paddingVertical: 20,
    paddingHorizontal: 5,
    borderRadius: 10,
    width: '48%',
  },
  dueDateCon2: {
    backgroundColor: '#FF0404',
    flexDirection: 'row',
    paddingVertical: 20,
    paddingHorizontal: 5,
    borderRadius: 10,
    width: '48%',
    height: 103,
    alignItems: 'center',
  },
  calendarCon: {
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 6,
    marginLeft: 5,
    height: 45,
    marginTop: 9,
  },
  calendarIcon: {
    width: 25,
    height: 24,
    tintColor: COLOR.WHITE,
  },
  dateCon: {
    marginLeft: 10,
  },
  dueTitle: {
    color: COLOR.WHITE,
    fontFamily: FONTS.MEDIUM,
    fontSize: 12,
    marginBottom: -5,
  },
  date: {
    fontSize: 18,
    color: COLOR.WHITE,
    fontFamily: FONTS.MEDIUM,
    width: '80%',
    lineHeight: 23,
  },

  // dueDateCon: {
  //   backgroundColor: '#1E293B',
  //   flexDirection: 'row',
  //   paddingVertical: 20,
  //   paddingHorizontal: 5,
  //   borderRadius: 10,
  //   width: '48%',
  //   height: 95,
  // },
  alertCon: {
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 6,
    marginLeft: 5,
    height: 45,
  },
  alertIcon: {
    width: 28,
    height: 24,
    tintColor: COLOR.WHITE,
  },
  priorityCon: {
    marginLeft: 7,
    marginTop: 7,
    // alignItems: 'center'
  },
  alertTitle: {
    color: COLOR.WHITE,
    fontFamily: FONTS.MEDIUM,
    fontSize: 12,
    marginBottom: -5,
  },
  high: {
    fontSize: 19,
    color: COLOR.WHITE,
    fontFamily: FONTS.MEDIUM,
    // width: '80%',
  },
  dropdown: {
    height: 55,
    borderRadius: 8,
    paddingHorizontal: 8,
    backgroundColor: COLOR.INPUTWHITE,
    width: '100%',
    marginTop: 10,
  },
  item: {
    padding: 9,
    marginTop: 1,
    backgroundColor: COLOR.INPUTWHITE,
    // borderRadius: 5,
  },
  itemText: {
    color: COLOR.BLACK,
    fontSize: 14,
    fontFamily: FONTS.MEDIUM,
  },
  placeholderStyle: {
    fontSize: 15,
    color: COLOR.BLACK,
    fontFamily: FONTS.MEDIUM,
  },
  selectedTextStyle: {
    fontSize: 15,
    color: COLOR.BLACK,
    marginLeft: 9,
    fontFamily: FONTS.MEDIUM,
  },
  iconStyle: {
    width: 28,
    height: 28,
    tintColor: COLOR.BLACK,
  },
  selectedValue: {
    color: COLOR.WHITE,
    marginTop: 10,
    fontSize: 14,
  },
  title3: {
    fontSize: 18,
    color: COLOR.BLACK,
    fontFamily: FONTS.SEMIBOLD,
    marginBottom: 8,
    marginTop: 20,
  },
  title4: {
    fontSize: 18,
    color: COLOR.BLACK,
    fontFamily: FONTS.SEMIBOLD,
    marginBottom: 8,
    marginTop: 20,
  },
  attachmentCon: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  attachment1: {
    width: '31%',
    height: 100,
    borderRadius: 6,
  },
  activityImgCon: {
    // marginLeft: -15,
  },
  activityProfileImg: {
    width: 44,
    height: 44,
  },
  messageCon: {
    backgroundColor: COLOR.SECONDARY,
    borderRadius: 6,
    paddingHorizontal: 15,
    width: '83%',
    paddingVertical: 9,
    marginBottom: 30,
  },
  messageHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  messageSenderName: {
    fontSize: 15,
    color: COLOR.WHITE,
    fontFamily: FONTS.MEDIUM,
  },
  messagetime: {
    fontSize: 13,
    color: COLOR.WHITE,
    fontFamily: FONTS.MEDIUM,
  },
  messageContent: {
    fontSize: 13,
    color: COLOR.WHITE,
    fontFamily: FONTS.MEDIUM,
  },
  inputCon: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 0,
    left: '1%',
    backgroundColor: COLOR.WHITE,
    flex: 1,
    paddingHorizontal: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 7,
  },
  lineCon: {
    backgroundColor: COLOR.WHITE,
    paddingVertical: 8,
    position: 'absolute',
    bottom: 59,
    height: 30,
    width: '100%',
    // marginBottom: 15
  },
  line: {
    width: '100%',
    height: 1,
    backgroundColor: COLOR.SECONDARY,
    marginBottom: 5,
    // position: 'absolute',
    // bottom: 60,
    // flex: 1,
  },
  textInputCon: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: COLOR.SECONDARY,
    justifyContent: 'space-evenly',
    borderRadius: 7,
  },
  textInput: {
    // borderWidth: 1,
    // borderColor: COLOR.SECONDARY,
    // borderRadius: 17,
    width: '79%',
    paddingLeft: 0,
    fontFamily: FONTS.MEDIUM,
    fontSize: 13,
    color: COLOR.BLACK,
    // backgroundColor: 'red'
  },
  linkIcon: {
    width: 12.5,
    height: 21.5,
    tintColor: COLOR.SECONDARY,
    // marginLeft: 7,
  },
  micIcon: {
    width: 20,
    height: 27,
    tintColor: COLOR.SECONDARY,
    // marginLeft: 7,
  },
  sendIcon: {
    width: 25,
    height: 25,
    tintColor: COLOR.SECONDARY,
    marginLeft: 5,
  },
});
