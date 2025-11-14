import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useState } from 'react';
import DashboardWrapper from '../../components/DashboardWrapper';
import ToggleButton from '../../components/ToogleButton';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Header from '../../components/Header';
import Line from '../../components/Line';
import { Dropdown } from 'react-native-element-dropdown';
import Entypo from 'react-native-vector-icons/Entypo';
import COLOR from '../../utils/Color';
import { FONTS } from '../../utils/Fonts';

const Approval = ({ navigation }) => {
  const [activeTab, setActiveTab] = useState('pending');
  const [userValue, setUserValue] = useState(null);
  const [categoryValue, setCategoryValue] = useState(null);
  const [dateValue, setDateValue] = useState(null);

  const toggleOptions = [
    { label: 'Pending Approval', value: 'pending' },
    { label: 'Archived', value: 'archived' },
  ];

  const data = {
    pending: [
      {
        id: '1',
        noteicon: require('../../assets/note.png'),
        title: 'Finalize Sprint Report',
        completion: 'Completed: Nov 05, 2025',
        userIcon: require('../../assets/userIcon.png'),
        assigned: 'Assigned: Noah corter  . D: TK-312',
        actions: true,
      },
      {
        id: '2',
        noteicon: require('../../assets/note.png'),
        title: 'Finalize Sprint Report ',
        completion: 'Completed: Nov 05, 2025',
        userIcon: require('../../assets/userIcon.png'),
        assigned: 'Assigned: Noah corter  . D: TK-312',
        actions: true,
      },
      {
        id: '3',
        noteicon: require('../../assets/note.png'),
        title: 'Finalize Sprint Report',
        completion: 'Completed: Nov 05, 2025',
        userIcon: require('../../assets/userIcon.png'),
        assigned: 'Assigned: Noah corter  . D: TK-312',
        actions: true,
      },
      {
        id: '4',
        noteicon: require('../../assets/note.png'),
        title: 'Finalize Sprint Report',
        completion: 'Completed: Nov 05, 2025',
        userIcon: require('../../assets/userIcon.png'),
        assigned: 'Assigned: Noah corter  . D: TK-312',
        actions: true,
      },
    ],
    archived: [
      {
        id: '5',
        title: 'Design System Tokens',
        completion: 'Completed: Nov 02, 2025',
        userIcon: require('../../assets/userIcon.png'),
        assigned: 'Assigned: Leo Park',
        completion2: 'Completed: Oct 14, 2025',
        actions: false,
      },
      {
        id: '6',
        title: 'Design System Tokens',
        completion: 'Completed: Nov 02, 2025',
        userIcon: require('../../assets/userIcon.png'),
        assigned: 'Assigned: Leo Park',
        completion2: 'Completed: Oct 14, 2025',
        actions: false,
      },
      {
        id: '7',
        title: 'Design System Tokens',
        completion: 'Completed: Nov 02, 2025',
        userIcon: require('../../assets/userIcon.png'),
        assigned: 'Assigned: Leo Park',
        completion2: 'Completed: Oct 14, 2025',
        actions: false,
      },
      {
        id: '8',
        title: 'Design System Tokens',
        completion: 'Completed: Nov 02, 2025',
        userIcon: require('../../assets/userIcon.png'),
        assigned: 'Assigned: Leo Park',
        completion2: 'Completed: Oct 14, 2025',
        actions: false,
      },
      {
        id: '9',
        title: 'Design System Tokens',
        completion: 'Completed: Nov 02, 2025',
        userIcon: require('../../assets/userIcon.png'),
        assigned: 'Assigned: Leo Park',
        completion2: 'Completed: Oct 14, 2025',
        actions: false,
      },
      {
        id: '10',
        title: 'Design System Tokens',
        completion: 'Completed: Nov 02, 2025',
        userIcon: require('../../assets/userIcon.png'),
        assigned: 'Assigned: Leo Park',
        completion2: 'Completed: Oct 14, 2025',
        actions: false,
      },
    ],
  };

  const dropDownData = [
    { label: 'Item 1', value: '1' },
    { label: 'Item 2', value: '2' },
    { label: 'Item 3', value: '3' },
    { label: 'Item 4', value: '4' },
    { label: 'Item 5', value: '5' },
  ];

  const renderFilter = item => {
    return (
      <View style={styles.item}>
        <Text style={styles.itemText}>{item.label}</Text>
      </View>
    );
  };

  const renderCard = ({ item }) => {
    return (
      <View style={styles.card}>
        {item.actions ? (
          <View>
            <Text style={styles.cardTitle}>Pending Approvals</Text>
            <View style={styles.finalize}>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Image style={styles.noteIcon} source={item.noteicon} />
                <Text style={styles.itemTitle}>{item.title}</Text>
              </View>
              <Text style={styles.completion}>{item.completion}</Text>
            </View>
            <View style={styles.userIconCon}>
              <Image style={styles.userIcon} source={item.userIcon} />
              <Text style={styles.assigned}>{item.assigned}</Text>
            </View>
            <View style={styles.actionButtons}>
              <TouchableOpacity style={styles.approveButton}>
                <Image
                  style={styles.approvalIcon}
                  source={require('../../assets/approval.png')}
                />
                <Text style={styles.approveText}>Approve</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.editButton}>
                <SimpleLineIcons
                  color={COLOR.WHITE}
                  name={'pencil'}
                  size={15}
                />
                <Text style={styles.editText}>Edit</Text>
              </TouchableOpacity>
            </View>
          </View>
        ) : (
          <View>
            <View style={styles.finalize}>
              <Text style={styles.itemTitle2}>{item.title}</Text>
              <Text style={styles.completion}>{item.completion}</Text>
            </View>
            <View style={styles.userIconCon2}>
              <View style={{ flexDirection: 'row' }}>
                <Image style={styles.userIcon} source={item.userIcon} />
                <Text style={styles.assigned}>{item.assigned}</Text>
              </View>
              <Text style={styles.completion2}>{item.completion2}</Text>
            </View>
          </View>
        )}
      </View>
    );
    // {
    //   item.actions && (

    //   );
    // }
  };
  return (
    <DashboardWrapper>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Header navigation={navigation} title="Approval" />
        {/* <View style={styles.line} /> */}
        <Line />
        <ToggleButton
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          options={toggleOptions}
        />

        {activeTab === 'archived' && (
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <Dropdown
              style={[
                styles.dropdown,
                userValue && { borderColor: COLOR.BLUE },
              ]}
              placeholderStyle={styles.placeholderStyle}
              selectedTextStyle={styles.selectedTextStyle}
              iconStyle={styles.iconStyle}
              data={dropDownData}
              maxHeight={200}
              labelField="label"
              valueField="value"
              placeholder="User"
              value={userValue}
              onChange={item => {
                setUserValue(item.value);
              }}
              renderItem={renderFilter}
              renderCustomizedHeaderValue={selectedItem => (
                <Text style={styles.selectedTextStyle}>
                  {selectedItem || 'Category'}
                </Text>
              )}
              iconComponent={
                <Entypo
                  name={userValue ? 'chevron-up' : 'chevron-down'}
                  size={20}
                  color={COLOR.WHITE}
                />
              }
            />
            <Dropdown
              style={[
                styles.dropdown,
                categoryValue && { borderColor: COLOR.BLUE },
              ]}
              placeholderStyle={styles.placeholderStyle}
              selectedTextStyle={styles.selectedTextStyle}
              iconStyle={styles.iconStyle}
              data={dropDownData}
              maxHeight={200}
              labelField="label"
              valueField="value"
              placeholder="Category"
              value={categoryValue}
              onChange={item => {
                setCategoryValue(item.value);
              }}
              renderItem={renderFilter}
              renderCustomizedHeaderValue={selectedItem => (
                <Text style={styles.selectedTextStyle}>
                  {selectedItem || 'Category'}
                </Text>
              )}
              iconComponent={
                <Entypo
                  name={categoryValue ? 'chevron-up' : 'chevron-down'}
                  size={20}
                  color={COLOR.WHITE}
                />
              }
            />

            <Dropdown
              style={[
                styles.dropdown,
                dateValue && { borderColor: COLOR.BLUE },
              ]}
              placeholderStyle={styles.placeholderStyle}
              selectedTextStyle={styles.selectedTextStyle}
              iconStyle={styles.iconStyle}
              data={dropDownData}
              maxHeight={200}
              labelField="label"
              valueField="value"
              placeholder="Date"
              value={dateValue}
              onChange={item => {
                setDateValue(item.value);
              }}
              renderItem={renderFilter}
              renderCustomizedHeaderValue={selectedItem => (
                <Text style={styles.selectedTextStyle}>
                  {selectedItem || 'Category'}
                </Text>
              )}
              iconComponent={
                <Entypo
                  name={dateValue ? 'chevron-up' : 'chevron-down'}
                  size={20}
                  color={COLOR.WHITE}
                />
              }
            />
          </ScrollView>
        )}

        <FlatList
          data={data[activeTab]}
          renderItem={renderCard}
          keyExtractor={item => item.id}
          contentContainerStyle={styles.listContent}
        />
      </ScrollView>
    </DashboardWrapper>
  );
};

export default Approval;

const styles = StyleSheet.create({
  // line:{
  //   backgroundColor: '#FFFFFF4A',
  //   height: 1,
  //   width: '100%',
  //   marginVertical: 8
  // },
  card: {
    backgroundColor: COLOR.BLUE,
    borderRadius: 10,
    padding: 10,
    marginVertical: 6,
    borderWidth: 1,
    borderColor: '#FFFFFF4A',
  },
  cardTitle: {
    color: COLOR.WHITE,
    fontSize: 15,
    fontFamily: FONTS.SEMIBOLD,
    marginBottom: 5,
  },
  finalize: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexShrink: 1,
  },
  noteIcon: {
    width: 12,
    height: 15,
    marginTop: -7,
  },
  itemTitle: {
    color: COLOR.WHITE,
    fontSize: 14,
    fontFamily: FONTS.MEDIUM,
    marginBottom: 5,
    marginLeft: 8,
  },
  itemTitle2: {
    color: COLOR.WHITE,
    fontSize: 14,
    fontFamily: FONTS.SEMIBOLD,
    marginBottom: 5,
  },
  completion: {
    color: COLOR.WHITE,
    fontSize: 9,
    fontFamily: FONTS.LIGHT,
    marginBottom: 5,
    // marginLeft: 5
  },
  completion2: {
    color: COLOR.WHITE,
    fontSize: 11,
    fontFamily: FONTS.LIGHT,
    marginBottom: 5,
    marginLeft: 14,
  },
  userIconCon: {
    flexDirection: 'row',
    marginTop: 5,
  },
  userIconCon2: {
    flexDirection: 'row',
    marginTop: 5,
  },
  userIcon: {
    width: 10,
    height: 13,
    marginRight: 10,
  },
  assigned: {
    color: COLOR.WHITE,
    fontSize: 11,
    fontFamily: FONTS.LIGHT,
    marginBottom: 10,
  },
  actionButtons: {
    flexDirection: 'row',
    gap: 15,
    marginBottom: 10,
  },
  approveButton: {
    backgroundColor: COLOR.SECONDARY,
    paddingVertical: 5,
    paddingHorizontal: 12,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  approvalIcon: {
    width: 15,
    height: 15,
  },
  approveText: {
    color: COLOR.WHITE,
    fontSize: 12,
    fontFamily: FONTS.MEDIUM,
    marginLeft: 10,
  },
  editButton: {
    backgroundColor: COLOR.SECONDARY,
    paddingVertical: 5,
    paddingHorizontal: 24,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  editText: {
    color: COLOR.WHITE,
    fontSize: 12,
    fontFamily: FONTS.MEDIUM,
    marginLeft: 10,
  },
  listContent: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginBottom: 60,
  },
  // for dropdown

  dropdown: {
    height: 28,
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 8,
    width: 80,
    // marginTop: 5,
    borderWidth: 1,
    borderColor: COLOR.BLUE,
    marginLeft: 14,
    marginTop: 10,
  },
  item: {
    padding: 9,
    marginTop: 1,
    backgroundColor: '#1C2127',
    // borderRadius: 5,
  },
  itemText: {
    color: COLOR.WHITE,
    fontSize: 12,
    fontFamily: FONTS.MEDIUM,
  },
  placeholderStyle: {
    fontSize: 9,
    color: COLOR.BLACK,
    fontFamily: FONTS.MEDIUM,
    marginLeft: 5,
  },
  selectedTextStyle: {
    fontSize: 10,
    color: COLOR.BLACK,
    marginLeft: 6,
    fontFamily: FONTS.MEDIUM,
  },
  iconStyle: {
    width: 15,
    height: 15,
  },
  selectedValue: {
    color: COLOR.WHITE,
    marginTop: 10,
    fontSize: 14,
  },
});
