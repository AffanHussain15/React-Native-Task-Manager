import {
  Dimensions,
  FlatList,
  Image,
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
import Ionicons from 'react-native-vector-icons/Ionicons';
import COLOR from '../../utils/Color';
import { FONTS } from '../../utils/Fonts';

const WindowWidth = Dimensions.get('window').width

const ManageCategory = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filter, setFilter] = useState([]);

  useFocusEffect(
    useCallback(() => {
      navigation.getParent().setOptions({
        tabBarStyle: {
          display: 'none',
        },
      });
    }, []),
  );
  const taskData = [
    {
      id: '1',
      title: 'Backlog',
      assigned: '12 tasks • Default for new items',
    },
    {
      id: '2',
      title: 'Backlog',
      assigned: '12 tasks • Default for new items',
    },
    {
      id: '3',
      title: 'Backlog',
      assigned: '12 tasks • Default for new items',
    },
    {
      id: '4',
      title: 'Backlog',
      assigned: '12 tasks • Default for new items',
    },
    {
      id: '5',
      title: 'Backlog',
      assigned: '12 tasks • Default for new items',
    },
    {
      id: '6',
      title: 'Backlog',
      assigned: '12 tasks • Default for new items',
    },
  ];

  const handleSearch = text => {
    setSearchQuery(text);
    const trimmedText = text.trim()
    if (trimmedText) {
      const newData = taskData.filter(item => {
        const itemData = item.title ? item.title.toLowerCase() : '';
        const assignedData = item.assigned ? item.assigned.toLowerCase() : ''
        const textData = trimmedText.toLowerCase()
        return itemData.includes(textData) || assignedData.includes(textData)
      });
      setFilter(newData);
    } else {
      setFilter(taskData);
    }
  };

  useEffect(() => {
    setFilter(taskData);
    setSearchQuery('')
  }, []);

  const renderTaskItem = ({ item }) => (
    <View style={styles.card}>
      {/* <View style={styles.content}> */}
        <View style={styles.placeholderImage}>
          <Image
            source={require('../../assets/backlog.png')}
            style={styles.backlogImg}
          />
        </View>
        <View style={{backgroundColor: '' , flex: 1 , justifyContent: 'space-between'}}>
          <View style={styles.textContainer}>
            <Text style={styles.title2}>{item.title}</Text>
            <View style={styles.btnContainer}>
              <TouchableOpacity style={styles.editButton}>
                <Image
                  style={styles.editIcon}
                  source={require('../../assets/edit.png')}
                />
                <Text style={styles.actionText}>Edit</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.deleteButton}>
                <Image
                  style={styles.deleteIcon}
                  source={require('../../assets/delete.png')}
                />
                <Text style={styles.actionText}>Delete</Text>
              </TouchableOpacity>
            </View>
          </View>

          <Text style={styles.assigned}>{item.assigned}</Text>
        </View>
      {/* </View> */}
    </View>
  );

  return (
    <DashboardWrapper>
      <Header navigation={navigation} title="Manage Category" />
      <Line />
      <ScrollView
        style={styles.scrollCon}
        showsHorizontalScrollIndicator={false}
      >
        <Text style={styles.title}>Category</Text>

        <View style={styles.searchIconCon}>
          <Ionicons
            style={styles.searchIcon}
            name={'search'}
            size={22}
            color="#6B7280"
          />
          <TextInput
            placeholderTextColor="#6B7280C2"
            style={styles.searchInput}
            placeholder="Search for a task"
            value={searchQuery}
            onChangeText={handleSearch}
          />
          <TouchableOpacity style={styles.editIconSearchCon}>
            <Image
              style={styles.editIconSearch}
              source={require('../../assets/editIcon.png')}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.categoryCon}>
          <TextInput
            style={styles.input}
            placeholderTextColor="#6B7280"
            placeholder="Add new category name"
            keyboardType="default"
          />
          <TouchableOpacity style={styles.addBtn}>
            <Text style={styles.plus}>+</Text>
            <Text style={styles.add}>Add</Text>
          </TouchableOpacity>
        </View>

        <FlatList
          data={filter}
          renderItem={renderTaskItem}
          keyExtractor={item => item.id}
          contentContainerStyle={styles.listContent}
        />
      </ScrollView>
    </DashboardWrapper>
  );
};

export default ManageCategory;

const styles = StyleSheet.create({
  scrollCon: {
    paddingHorizontal: 15,
    // marginBottom: 60,
  },
  title: {
    fontSize: 19,
    color: COLOR.BLACK,
    fontFamily: FONTS.SEMIBOLD,
    marginTop: 10,
  },
  listContent: {
    paddingVertical: 10,
    // backgroundColor: '#1A252F',
  },

  searchIconCon: {
    height: 47,
    borderRadius: 30,
    backgroundColor: COLOR.INPUTWHITE,
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 7,
    marginBottom: 17,
  },
  searchIcon: {
    paddingLeft: 20,
  },
  searchInput: {
    fontSize: 14,
    color: '#6B7280C2',
    fontFamily: FONTS.MEDIUM,
    paddingLeft: 10,
    flex: 1,
  },
  editIconSearchCon: {
    backgroundColor: COLOR.SECONDARY,
    borderWidth: 1.7,
    borderColor: '#F0DCD6',
    width: 50,
    height: 50,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  editIconSearch: {
    width: 19,
    height: 19,
  },

  categoryCon: {
    backgroundColor: COLOR.INPUTWHITE,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 5,
    borderRadius: 10,
    paddingHorizontal: 15,
    justifyContent: 'space-between',
  },
  input: {
    flex: 1,
    color: '#6B7280',
    fontFamily: FONTS.REGULAR,
  },
  addBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLOR.SECONDARY,
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 5,
  },
  plus: {
    color: COLOR.WHITE,
    fontSize: 20,
    marginTop: -5,
    marginRight: 5,
  },
  add: {
    color: COLOR.WHITE,
    fontSize: 14,
    fontFamily: FONTS.MEDIUM,
  },
  card: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: COLOR.BLUE,
    paddingVertical: 15,
    borderRadius: 8,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'red'
  },
  placeholderImage: {
    width: 50,
    height: 50,
    backgroundColor: COLOR.WHITE,
    borderRadius: 25,
    marginRight: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 8
  },
  backlogImg: {
    width: 23,
    height: 19,
    tintColor: COLOR.SECONDARY,
  },
  textContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    // backgroundColor: 'red',
    // width: '87%',
    // overflow: 'hidden',
    // paddingRight: WindowWidth * 0.53
  },
  title2: {
    color: COLOR.WHITE,
    fontSize: 16,
    marginTop: 2,
    fontFamily: FONTS.SEMIBOLD,
  },
  assigned: {
    color: COLOR.WHITE,
    fontSize: 12,
    fontFamily: FONTS.REGULAR,
    width: '55%',
  },
  btnContainer: {
    flexDirection: 'row',
    gap: 5,
    // justifyContent: 'flex-end',
    marginBottom: 2,
    // marginLeft: 54,
    // alignSelf: 'flex-end',
    // position: 'absolute',
    // top: '5%',
    // right: '2%'
    // right: WindowWidth * 0.02
  },
  editButton: {
    backgroundColor: COLOR.SECONDARY,
    paddingVertical: 2,
    paddingHorizontal: 12,
    borderRadius: 15,
    height: 26,
    flexDirection: 'row',
    alignItems: 'center',
  },
  editIcon: {
    width: 10,
    height: 10,
    marginRight: 3,
    marginTop: -1,
  },
  deleteIcon: {
    width: 10,
    height: 13,
    marginRight: 3,
  },
  actionText: {
    color: COLOR.WHITE,
    fontSize: 9,
    fontFamily: FONTS.MEDIUM,
  },
  deleteButton: {
    backgroundColor: COLOR.RED,
    paddingVertical: 4,
    paddingHorizontal: 15,
    borderRadius: 15,
    height: 26,
    flexDirection: 'row',
    alignItems: 'center',
  },
});
