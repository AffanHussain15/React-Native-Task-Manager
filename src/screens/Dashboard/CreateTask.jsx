import {
  FlatList,
  Image,
  Keyboard,
  Modal,
  Pressable,
  ScrollView,
  StyleSheet,
  Switch,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useCallback, useEffect, useState } from 'react';
import DashboardWrapper from '../../components/DashboardWrapper';
import MyTextInput from '../../components/MyTextInput';
import Header from '../../components/Header';
import Line from '../../components/Line';
import { Dropdown } from 'react-native-element-dropdown';
import Entypo from 'react-native-vector-icons/Entypo';
import MyButton from '../../components/MyButton';
import CustomButton from '../../components/CustomButton';
import Ionicons from 'react-native-vector-icons/Ionicons';
import DateTimePicker from '@react-native-community/datetimepicker';
import { useFocusEffect } from '@react-navigation/native';
import COLOR from '../../utils/Color';
import { FONTS } from '../../utils/Fonts';

const CreateTask = ({ navigation }) => {
  const [value, setValue] = useState(null);
  const [projectValue, setProjectValue] = useState(null);
  const [activeTab, setActiveTab] = useState('Low');
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(prev => !prev);
  const [isChecked, setIsChecked] = useState(false);
  const toggleCheck = () => setIsChecked(!isChecked);

  const [date, setDate] = useState(new Date());
  const [showPicker, setShowPicker] = useState(false);

  useFocusEffect(
    useCallback(() => {
      navigation.getParent()?.setOptions({
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
          backgroundColor: COLOR.BLUE,
          elevation: 15,
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
    });

    return () => {
      keyboardDidShow.remove();
      keyboardDidHide.remove();
    };
  }, [navigation]);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShowPicker(Platform.OS === 'ios');
    setDate(currentDate);
  };

  const showDatepicker = () => {
    setShowPicker(true);
  };

  const data = [
    { label: 'All Categories', value: 'all' },
    { label: 'Design', value: 'design' },
    { label: 'Development', value: 'dev' },
    { label: 'Marketing', value: 'marketing' },
    { label: 'Sales', value: 'sales' },
  ];

  const options = [
    { label: 'Phoenix', value: 'Phoenix' },
    { label: 'Onspot', value: 'Onspot' },
    { label: 'Asgard', value: 'Asgard' },
    { label: 'Docker', value: 'Docker' },
  ];

  const renderItem = item => {
    return (
      <View style={styles.item}>
        <Text style={styles.itemText}>{item.label}</Text>
      </View>
    );
  };

  return (
    <DashboardWrapper>
      <ScrollView style={styles.scrollCon} showsVerticalScrollIndicator={false}>
        <Header title="Create Task" rightText="Save" navigation={navigation} />
        <Line />

        <View style={{ paddingHorizontal: 15 }}>
          <Text style={styles.text}>Task Name</Text>
          <MyTextInput
            placeholder="Enter task title"
            backgroundColor={COLOR.INPUTWHITE}
          />
          <Text style={styles.text}>Description</Text>
          <TextInput
            placeholder="Add a Description.."
            numberOfLines={4}
            style={styles.descInput}
            multiline
            maxLength={200}
            placeholderTextColor="#6F6F6FB8"
          />
          <Text style={styles.text2}>Select Category</Text>
          <Dropdown
            style={[styles.dropdown]}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            // inputSearchStyle={styles.inputSearchStyle}
            iconStyle={styles.iconStyle}
            data={data}
            // search
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder="Category"
            // searchPlaceholder="Search category..."
            value={value}
            onChange={item => {
              setValue(item.value);
            }}
            // renderLeftIcon={renderLeftIcon}
            renderItem={renderItem}
            renderCustomizedHeaderValue={selectedItem => (
              <Text style={styles.selectedTextStyle}>
                {selectedItem || 'Category'}
              </Text>
            )}
            iconComponent={
              <Entypo
                name={value ? 'chevron-up' : 'chevron-down'}
                size={20}
                color={COLOR.WHITE}
              />
            }
          />

          <Text style={styles.text2}>Select Project</Text>

          <Dropdown
            style={[
              styles.dropdown,
              projectValue && { borderColor: COLOR.WHITE },
            ]}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            iconStyle={styles.iconStyle}
            data={options}
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder="Select Project"
            value={projectValue}
            onChange={item => {
              setProjectValue(item.value);
            }}
            renderItem={renderItem}
            renderCustomizedHeaderValue={selectedItem => (
              <Text style={styles.selectedTextStyle}>
                {selectedItem || 'Category'}
              </Text>
            )}
            iconComponent={
              <Entypo
                name={projectValue ? 'chevron-up' : 'chevron-down'}
                size={20}
                color={COLOR.WHITE}
              />
            }
          />

          <View style={styles.dateCon}>
            <TouchableOpacity
              onPress={showDatepicker}
              style={styles.dateButton}
            >
              <Image
                style={styles.iconPlaceholder}
                source={require('../../assets/calendarIcon.png')}
              />
              <View style={styles.textContainer}>
                <Text style={styles.label}>Due Date</Text>
                {/* <Text style={styles.selectedDate}>
                  {date.toLocaleDateString()}
                </Text> */}
              </View>
              <Text style={styles.selectText}>
                {date ? date.toLocaleDateString() : 'Select Date'}
              </Text>
            </TouchableOpacity>

            {showPicker && (
              <DateTimePicker
                // testID="dateTimePicker"
                value={date}
                mode="date"
                is24Hour={true}
                display="default"
                onChange={onChange}
              />
            )}
          </View>

          <View style={styles.collaboratorsCon}>
            <View style={styles.collaboratorsHeader}>
              <View style={styles.collaboratorshed}>
                <Image
                  style={styles.profileadd}
                  source={require('../../assets/profile-add2.png')}
                />
                <Text style={styles.collaboratorsTitle}>Collaborators</Text>
              </View>
              <TouchableOpacity
                // onPress={() => navigation.navigate('CreateTask')}
                style={styles.plusIcon}
              >
                <Entypo name={'plus'} size={24} color={COLOR.WHITE} />
              </TouchableOpacity>
            </View>
            <Line />
            <View style={styles.phoneCon}>
              <Text style={styles.phoneTitle}>Phone Number</Text>
              <TextInput
                placeholder="Enter your Phone Number"
                placeholderTextColor={COLOR.BLACK}
                style={styles.PhoneInput}
              />
            </View>
            <View style={styles.avaContainer}>
              <View style={styles.avaCon}>
                <Image
                  style={styles.avaImg}
                  source={require('../../assets/Ava.png')}
                />
                <Text style={styles.avatitle}>Ava</Text>
                <TouchableOpacity>
                  <Entypo name={'cross'} style={{marginTop: -2}} size={18} color={COLOR.WHITE} />
                </TouchableOpacity>
              </View>
              <View style={styles.avaCon}>
                <Image
                  style={styles.avaImg}
                  source={require('../../assets/Noah.png')}
                />
                <Text style={styles.avatitle}>Naoh</Text>
                <TouchableOpacity>
                  <Entypo name={'cross'} style={{marginTop: -2}} size={18} color={COLOR.WHITE} />
                </TouchableOpacity>
              </View>
              <View style={{ marginLeft: 12 }}>
                <MyButton
                  btnTitle="Add"
                  color={COLOR.SECONDARY}
                  width={70}
                  textColor={COLOR.WHITE}
                  height={38}
                  radius={10}
                />
              </View>
            </View>
          </View>

          <Text style={styles.text}>Priority</Text>

          <View style={styles.tabContainer}>
            <TouchableOpacity
              style={[styles.tab, activeTab === 'Low' && styles.activeTab]}
              onPress={() => setActiveTab('Low')}
            >
              <Text
                style={[
                  styles.lowTabText,
                  activeTab === 'Low' && styles.activeTabText,
                ]}
              >
                Low
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.tab, activeTab === 'Medium' && styles.activeTab]}
              onPress={() => setActiveTab('Medium')}
            >
              <Text
                style={[
                  styles.mediumTabText,
                  activeTab === 'Medium' && styles.activeTabText,
                ]}
              >
                Medium
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.tab, activeTab === 'High' && styles.activeTab]}
              onPress={() => setActiveTab('High')}
            >
              <Text
                style={[
                  styles.highTabText,
                  activeTab === 'High' && styles.activeTabText,
                ]}
              >
                High
              </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.attachmentCon}>
            <View style={styles.attachmentsHeader}>
              <Image
                style={styles.linkIcon}
                source={require('../../assets/link.png')}
              />
              <Text style={styles.attachmentTitle}>Attachments</Text>
              <CustomButton
                imageSource={require('../../assets/uploadIcon.png')}
                title="Upload"
              />
              <CustomButton
                imageSource={require('../../assets/gallery.png')}
                title="Gallery"
              />
            </View>
            <Line />
            <View style={styles.pdfField}>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Image
                  style={styles.fileIcon}
                  source={require('../../assets/file.png')}
                />
                <Text style={styles.pdfTitle}>Requirements.pdf</Text>
              </View>
              <TouchableOpacity>
                <Entypo style={styles.crossIcon} name={'cross'} />
              </TouchableOpacity>
            </View>
            <View style={styles.pdfField}>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Image
                  style={styles.fileIcon2}
                  source={require('../../assets/gallery.png')}
                />
                <Text style={styles.pdfTitle}>Wireframe.png</Text>
              </View>
              <TouchableOpacity>
                <Entypo style={styles.crossIcon} name={'cross'} />
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.voiceCon}>
            <View style={styles.voiceHeader}>
              <View style={styles.voiceText}>
                <Ionicons
                  color={COLOR.SECONDARY}
                  size={20}
                  name={'mic-outline'}
                />
                <Text style={styles.voiceTitle}>Voice Note</Text>
              </View>
              <CustomButton
                iconStyle={{ width: 13, height: 17 }}
                imageSource={require('../../assets/mic.png')}
                title="Record"
              />
            </View>
            <Line />

            <View style={styles.pdfField}>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Image
                  style={styles.voiceIcon}
                  source={require('../../assets/voiceIcon.png')}
                />
                <Text style={styles.pdfTitle}>Note 1 . 00:36</Text>
              </View>
              <TouchableOpacity>
                {/* <Entypo style={styles.crossIcon} name={'cross'} /> */}
                <Image
                  style={styles.deleteIcon}
                  source={require('../../assets/delete.png')}
                />
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.notifyCon}>
            <View>
              <Text style={styles.notifyTitle}>Notify Users</Text>
              <Text style={styles.notifyDesc}>In-app + WhatsApp</Text>
            </View>
            <View style={styles.toggleCon}>
              <Switch
                trackColor={{ false: COLOR.WHITE, true: COLOR.WHITE }}
                thumbColor={isEnabled ? COLOR.SECONDARY : COLOR.SECONDARY}
                onValueChange={toggleSwitch}
                value={isEnabled}
                style={styles.toggle}
              />
            </View>
          </View>

          <View style={styles.tickCon}>
            <TouchableOpacity onPress={toggleCheck}>
              <View style={[styles.checkbox, isChecked && styles.checked]}>
                {/* {isChecked && <View style={styles.tick} />} */}
                {isChecked && (
                  <Ionicons
                    color={COLOR.SECONDARY}
                    name={'checkmark'}
                    size={18}
                  />
                )}
              </View>
            </TouchableOpacity>
            <Text style={styles.text}>Need Approval</Text>
          </View>
          <View style={{ paddingBottom: 75 }}>
            <MyButton
              btnTitle="Save Task"
              color={COLOR.SECONDARY}
              textColor={COLOR.WHITE}
              height={50}
              radius={10}
              onPress={() => navigation.navigate('TaskDetail')}
            />
          </View>
        </View>
      </ScrollView>
    </DashboardWrapper>
  );
};

export default CreateTask;

const styles = StyleSheet.create({
  scrollCon: {
    // paddingHorizontal: 15,
  },
  text: {
    color: COLOR.BLACK,
    fontSize: 16,
    fontFamily: FONTS.MEDIUM,
    marginVertical: 3,
    marginTop: 7,
  },
  text2: {
    color: COLOR.BLACK,
    fontSize: 16,
    fontFamily: FONTS.MEDIUM,
    marginVertical: 5,
    marginTop: 15,
  },
  descInput: {
    backgroundColor: COLOR.INPUTWHITE,
    height: 140,
    borderWidth: 1,
    borderColor: COLOR.WHITE,
    borderRadius: 10,
    textAlignVertical: 'top',
    fontFamily: FONTS.MEDIUM,
    fontSize: 15,
    paddingLeft: 10,
    color: '#6F6F6FB8',
  },
  selectedValueContainer: {
    padding: 10,
    backgroundColor: COLOR.EDITBTNCOLOR,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  // selectedValue: {
  //   color: '#fff',
  //   fontSize: 16,
  // },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#1a1a1a',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 5,
    maxHeight: 200,
  },
  option: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#333',
  },
  // selectedOption: {
  //   backgroundColor: COLOR.EDITBTNCOLOR,
  // },
  optionText: {
    color: COLOR.WHITE,
    fontSize: 16,
  },
  dropdown: {
    height: 50,
    borderRadius: 8,
    paddingHorizontal: 12,
    backgroundColor: COLOR.INPUTWHITE,
    // marginTop: 5,
  },
  icon: {
    marginRight: 8,
  },
  item: {
    padding: 12,
    // marginTop: 1,
    backgroundColor: COLOR.INPUTWHITE,
    // borderRadius: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#E6E6E6',
  },
  itemText: {
    color: COLOR.BLACK,
    fontSize: 16,
    fontFamily: FONTS.MEDIUM,
  },
  placeholderStyle: {
    fontSize: 15,
    color: COLOR.BLACK,
    fontFamily: FONTS.MEDIUM,
  },
  selectedTextStyle: {
    fontSize: 16,
    color: COLOR.BLACK,
    marginLeft: 3,
    fontFamily: FONTS.MEDIUM,
  },
  // inputSearchStyle: {
  //   height: 40,
  //   fontSize: 16,
  //   borderBottomWidth: 1,
  //   borderBottomColor: '#CCCCCC',
  //   color: '#FFFFFF',
  //   backgroundColor: '#1a1a1a',
  // },
  iconStyle: {
    width: 20,
    height: 20,
  },
  selectedValue: {
    color: COLOR.WHITE,
    marginTop: 10,
    fontSize: 14,
  },

  dateCon: {
    marginTop: 15,
  },
  dateButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLOR.INPUTWHITE,
    padding: 15,
    borderRadius: 6,
  },
  iconPlaceholder: {
    width: 24,
    height: 25,
    marginRight: 12,
    justifyContent: 'center',
    alignItems: 'center',
    tintColor: COLOR.BLACK,
  },
  textContainer: {
    flex: 1,
  },
  label: {
    fontSize: 14,
    color: COLOR.BLACK,
    marginLeft: 4,
    fontFamily: FONTS.MEDIUM,
  },
  selectedDate: {
    fontSize: 16,
    color: COLOR.BLACK,
    fontWeight: '500',
  },
  selectText: {
    fontSize: 15,
    color: COLOR.BLACK,
    marginLeft: 10,
    fontFamily: FONTS.REGULAR,
  },
  collaboratorsCon: {
    width: '100%',
    height: 190,
    backgroundColor: COLOR.INPUTWHITE,
    borderRadius: 6,
    marginVertical: 20,
  },
  collaboratorsHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
  },
  collaboratorshed: {
    flexDirection: 'row',
    gap: 5,
    marginTop: 8,
  },
  profileadd: {
    width: 18,
    height: 16,
    marginTop: 3,
    tintColor: COLOR.BLACK,
  },
  collaboratorsTitle: {
    fontSize: 16,
    fontFamily: FONTS.SEMIBOLD,
    color: COLOR.BLACK,
  },
  plusIcon: {
    width: 34,
    height: 34,
    backgroundColor: COLOR.SECONDARY,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 7,
  },
  phoneCon: {
    paddingHorizontal: 15,
  },
  phoneTitle: {
    fontSize: 14,
    color: COLOR.BLACK,
    fontFamily: FONTS.MEDIUM,
    marginVertical: 5,
    marginLeft: 5,
  },
  PhoneInput: {
    backgroundColor: COLOR.WHITE,
    padding: 7,
    fontFamily: FONTS.MEDIUM,
  },
  avaContainer: {
    flexDirection: 'row',
    paddingHorizontal: 15,
    gap: 5,
    marginTop: 9,
  },
  avaCon: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLOR.BLUE,
    borderWidth: 2,
    borderColor: '#F0DCD6',
    borderRadius: 20,
    paddingHorizontal: 8,
    gap: 4,
  },
  avaImg: {
    width: 24,
    height: 24,
  },
  avatitle: {
    fontSize: 14,
    color: COLOR.WHITE,
    fontFamily: FONTS.MEDIUM,
  },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: COLOR.INPUTWHITE,
    paddingVertical: 6,
    marginTop: 5,
    borderRadius: 10,
    marginBottom: 15,
  },
  tab: {
    paddingHorizontal: 25,
    paddingVertical: 6,
  },
  activeTab: {
    backgroundColor: COLOR.SECONDARY,
    borderRadius: 10,
  },
  lowTabText: {
    color: COLOR.LIGHTGREEN,
    fontSize: 14,
    fontFamily: FONTS.MEDIUM,
  },
  mediumTabText: {
    color: COLOR.EDITBTNCOLOR,
    fontSize: 14,
    fontFamily: FONTS.MEDIUM,
  },
  highTabText: {
    color: '#FF0404',
    fontSize: 14,
    fontFamily: FONTS.MEDIUM,
  },
  activeTabText: {
    color: COLOR.WHITE,
    fontFamily: FONTS.MEDIUM,
  },
  attachmentCon: {
    backgroundColor: COLOR.INPUTWHITE,
    width: '100%',
    height: 180,
    borderRadius: 10,
    marginBottom: 15,
  },
  attachmentsHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginTop: 5,
  },
  attachmentTitle: {
    color: COLOR.BLACK,
    fontFamily: FONTS.SEMIBOLD,
    fontSize: 14,
  },
  linkIcon: {
    width: 14,
    height: 15,
    tintColor: COLOR.SECONDARY,
  },
  pdfField: {
    backgroundColor: COLOR.BLUE,
    borderWidth: 2,
    borderColor: '#F0DCD6',
    flexDirection: 'row',
    marginHorizontal: 10,
    borderRadius: 25,
    alignItems: 'center',
    paddingVertical: 5,
    paddingHorizontal: 15,
    justifyContent: 'space-between',
    marginBottom: 7,
    marginTop: 5,
  },
  fileIcon: {
    width: 13,
    height: 16,
    tintColor: COLOR.WHITE,
  },
  fileIcon2: {
    width: 16,
    height: 16,
    tintColor: COLOR.WHITE,
  },
  pdfTitle: {
    fontSize: 14,
    color: COLOR.WHITE,
    fontFamily: FONTS.MEDIUM,
    marginLeft: 7,
    marginTop: 1,
  },
  deleteIcon: {
    width: 11,
    height: 14,
    tintColor: COLOR.INPUTWHITE,
    marginRight: 2
  },
  crossIcon: {
    fontSize: 18,
    color: COLOR.WHITE,
  },
  micIcon: {
    width: 11,
    height: 13,
  },
  voiceCon: {
    backgroundColor: COLOR.INPUTWHITE,
    width: '100%',
    height: 120,
    borderRadius: 10,
    marginBottom: 15,
  },
  voiceHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingTop: 10,
    justifyContent: 'space-between',
  },
  voiceText: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  voiceTitle: {
    fontSize: 15,
    color: COLOR.BLACK,
    fontFamily: FONTS.SEMIBOLD,
    marginTop: 5,
  },
  voiceIcon: {
    width: 16,
    height: 16,
    tintColor: COLOR.WHITE,
  },
  notifyCon: {
    backgroundColor: COLOR.INPUTWHITE,
    width: '100%',
    height: 75,
    flexDirection: 'row',
    marginBottom: 15,
    borderRadius: 10,
    justifyContent: 'space-between',
    padding: 13,
  },
  notifyTitle: {
    fontSize: 15,
    color: COLOR.BLACK,
    fontFamily: FONTS.SEMIBOLD,
  },
  notifyDesc: {
    fontSize: 14,
    color: COLOR.BLACK,
    fontFamily: FONTS.REGULAR,
    marginTop: 5,
  },
  toggleCon: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    height: 30,
    backgroundColor: COLOR.WHITE,
    width: 57,
    borderRadius: 50,
    marginTop: 10,
  },
  toggle: {
    transform: [{ scaleX: 1.3 }, { scaleY: 1.3 }],
  },
  tickCon: {
    flexDirection: 'row',
    alignItems: 'center',
    // backgroundColor: '#1a1a1a',
    padding: 10,
    borderRadius: 5,
    marginBottom: 5,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: COLOR.SECONDARY,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  checked: {
    // backgroundColor: '#fff',
  },
  tick: {
    width: 10,
    height: 10,
    backgroundColor: '#1a1a1a',
  },
});
