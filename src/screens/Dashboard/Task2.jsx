import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import DashboardWrapper from '../../components/DashboardWrapper';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import { Dropdown } from 'react-native-element-dropdown';
import COLOR from '../../utils/Color';
import { FONTS } from '../../utils/Fonts';
import { Color } from 'react-native/types_generated/Libraries/Animated/AnimatedExports';

const Task2 = ({ navigation }) => {
  const [activeTab, setActiveTab] = useState('created');
  const [projectValue, setProjectValue] = useState(null);
  const [priorityValue, setPriorityValue] = useState(null);
  const [userValue, setUserValue] = useState(null);
  const [dueValue, setDueValue] = useState(null);
  const [categoryValue, setCategoryValue] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [filter, setFilter] = useState([]);
  const [activeFilter, setActiveFilter] = useState(null);
  const taskData = {
    created: [
      {
        id: 1,
        title: 'Design the new login screen',
        assignedBy: 'Jane Doe',
        dueDate: '2023-10-26',
        status: 'Completed',
        priority: 'High',
      },
      {
        id: 2,
        title: 'Design the new login screen',
        assignedBy: 'Jane Doe',
        dueDate: '2023-10-26',
        status: 'To Do',
        priority: 'Medium',
      },
      {
        id: 3,
        title: 'Design the new login screen',
        assignedBy: 'Jane Doe',
        dueDate: '2023-10-26',
        status: 'Completed',
        priority: 'Low',
      },
    ],
    assigned: [
      {
        id: 4,
        title: 'Design the new login screen',
        assignedBy: 'Jane Doe',
        dueDate: '2023-10-26',
        status: 'Completed',
        priority: 'High',
      },
      {
        id: 5,
        title: 'Design the new login screen',
        assignedBy: 'Jane Doe',
        dueDate: '2023-10-26',
        status: 'To Do',
        priority: 'Medium',
      },
      //   {
      //     id: 6,
      //     title: 'Design the new login screen',
      //     assignedBy: 'Jane Doe',
      //     dueDate: '2023-10-26',
      //     status: 'Completed',
      //     priority: 'Low',
      //   },
    ],
  };

  const data = [
    { label: 'Item 1', value: '1' },
    { label: 'Item 2', value: '2' },
    { label: 'Item 3', value: '3' },
    { label: 'Item 4', value: '4' },
    { label: 'Item 5', value: '5' },
  ];

  const handleSearch = text => {
    setSearchQuery(text);
    const trimmedText = text.trim();
    if (trimmedText) {
      const newData = taskData[activeTab].filter(item => {
        const titleData = item.title ? item.title.toLowerCase().trim() : '';
        const assignedData = item.assignedBy
          ? item.assignedBy.toLowerCase()
          : '';
        const textData = trimmedText.toLowerCase();
        return titleData.includes(textData) || assignedData.includes(textData);
      });
      setFilter(newData);
    } else {
      setFilter(taskData[activeTab]);
    }
  };

  const renderItem = ({ item: task }) => {
    return (
      <View style={styles.cardsContainer}>
        <View key={task.id} style={styles.card}>
          <View style={styles.cardHeader}>
            <Text style={styles.taskTitle}>{task.title}</Text>
            <View
              style={[
                styles.statusBadge,
                task.status === 'Completed'
                  ? styles.completedBadge
                  : styles.todoBadge,
              ]}
            >
              <Text style={styles.statusText}>
                {task.status === 'Completed' ? 'Completed' : 'To Do'}
              </Text>
            </View>
          </View>

          <Text style={styles.assignedText}>
            Assigned by: <Text style={styles.name}>{task.assignedBy}</Text>
          </Text>
          <Text style={styles.dueDateText}>
            Due: <Text style={styles.dueDate}>Oct 26, 2023 </Text>{' '}
          </Text>

          <View style={styles.actionButtons}>
            <TouchableOpacity style={styles.editBtn}>
              <Image
                style={styles.editIcon}
                source={require('../../assets/edit.png')}
              />
              <Text style={styles.editText}>Edit</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.deleteBtn}>
              <Image
                style={styles.deleteIcon}
                source={require('../../assets/delete.png')}
              />
              <Text style={styles.deleteText}>Delete</Text>
            </TouchableOpacity>
            {task.status === 'Completed' && (
              <TouchableOpacity style={styles.approvedBtn}>
                <Feather
                  name={'check'}
                  size={14}
                  style={{ marginRight: 5 }}
                  color={COLOR.WHITE}
                />
                <Text style={styles.approvedText}>Approved</Text>
              </TouchableOpacity>
            )}
          </View>
        </View>
      </View>
    );
  };

  useEffect(() => {
    setFilter(taskData[activeTab]);
    setSearchQuery('');
  }, [activeTab]);

  const renderFilter = item => {
    return (
      <View style={styles.item}>
        <Text style={styles.itemText}>{item.label}</Text>
      </View>
    );
  };

  return (
    <View>
      <Text style={styles.title}>My Tasks</Text>
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
      </View>
      {/* <ScrollView
        horizontal
        style={{ marginLeft: 5 }}
        showsHorizontalScrollIndicator={false}
      >
        <Dropdown
          style={[
            styles.dropdown,
            projectValue && {
              backgroundColor: COLOR.SECONDARY,
              borderColor: COLOR.SECONDARY,
            },
          ]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          iconStyle={styles.iconStyle}
          data={data}
          maxHeight={200}
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

        <Dropdown
          style={[
            styles.dropdown,
            priorityValue && {
              backgroundColor: COLOR.SECONDARY,
              borderColor: COLOR.SECONDARY,
            },
          ]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          iconStyle={styles.iconStyle}
          data={data}
          maxHeight={200}
          labelField="label"
          valueField="value"
          placeholder="Filter by Priority"
          value={priorityValue}
          onChange={item => {
            setPriorityValue(item.value);
          }}
          renderItem={renderFilter}
          renderCustomizedHeaderValue={selectedItem => (
            <Text style={styles.selectedTextStyle}>
              {selectedItem || 'Category'}
            </Text>
          )}
          // iconComponent={
          //   <Entypo
          //     name={priorityValue ? 'chevron-up' : 'chevron-down'}
          //     size={20}
          //     color="#FFFFFF"
          //   />
          // }
        />
        <Dropdown
          style={[
            styles.dropdown,
            userValue && {
              backgroundColor: COLOR.SECONDARY,
              borderColor: COLOR.SECONDARY,
            },
          ]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          iconStyle={styles.iconStyle}
          data={data}
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
            dueValue && {
              backgroundColor: COLOR.SECONDARY,
              borderColor: COLOR.SECONDARY,
            },
          ]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          iconStyle={styles.iconStyle}
          data={data}
          maxHeight={200}
          labelField="label"
          valueField="value"
          placeholder="Sort by Due Date"
          value={dueValue}
          onChange={item => {
            setDueValue(item.value);
          }}
          renderItem={renderFilter}
          renderCustomizedHeaderValue={selectedItem => (
            <Text style={styles.selectedTextStyle}>
              {selectedItem || 'Category'}
            </Text>
          )}
          iconComponent={
            <Entypo
              name={dueValue ? 'chevron-up' : 'chevron-down'}
              size={20}
              color={COLOR.WHITE}
            />
          }
        />
        <Dropdown
          style={[
            styles.dropdown,
            categoryValue && { backgroundColor: COLOR.SECONDARY },
          ]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          iconStyle={styles.iconStyle}
          data={data}
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
      </ScrollView> */}

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.filterContainer}
      >
        {[
          'Filter by Status',
          'Sort by Priority',
          'Sort by User',
          'Sort by Due Date',
        ].map(filter => (
          <TouchableOpacity
            key={filter}
            style={[
              styles.filterButton,
              activeFilter === filter && styles.activeFilter,
            ]}
            onPress={() =>
              setActiveFilter(activeFilter === filter ? null : filter)
            }
          >
            <Text
              style={[
                styles.filterText,
                activeFilter === filter && styles.activeFilterText,
              ]}
            >
              {filter}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <View style={styles.buttonCon}>
        <TouchableOpacity
          style={[
            styles.button,
            activeTab === 'created' && styles.activeButton,
          ]}
          onPress={() => setActiveTab('created')}
        >
          <Image
            style={styles.userImg}
            source={require('../../assets/profile-add.png')}
          />
          <Text style={styles.text}>Created To Me</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.button,
            activeTab === 'assigned' && styles.activeButton,
          ]}
          onPress={() => setActiveTab('assigned')}
        >
          <Image
            style={styles.userImg}
            source={require('../../assets/user-edit.png')}
          />
          <Text style={styles.text}>Assigned By Me</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={filter}
        renderItem={renderItem}
        keyExtractor={task => task.id}
        contentContainerStyle={{ marginBottom: 60 }}
      />
    </View>
  );
};

export default Task2;

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    color: COLOR.BLACK,
    fontFamily: FONTS.SEMIBOLD,
    paddingLeft: 15,
    marginTop: 15,
  },
  searchIconCon: {
    width: '95%',
    height: 50,
    borderRadius: 30,
    // backgroundColor: '#1E293B',
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
    borderColor: COLOR.BLUE,
    borderWidth: 1,
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
  sortContainer: {
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  sortBtn: {
    // backgroundColor: '#1E293B',
    paddingHorizontal: 8,
    paddingVertical: 8,
    borderRadius: 20,
    marginRight: 5,
    borderWidth: 0.9,
    borderColor: COLOR.WHITE,
    height: 30,
  },
  activeSortBtn: {
    backgroundColor: COLOR.EDITBTNCOLOR,
    borderColor: COLOR.EDITBTNCOLOR,
  },
  sortText: {
    color: COLOR.WHITE,
    fontSize: 9,
    fontFamily: FONTS.MEDIUM,
  },
  activeSortText: {
    color: COLOR.WHITE,
  },
  tabContainer: {
    flexDirection: 'row',
    backgroundColor: '#1E293B',
    marginHorizontal: 16,
    borderRadius: 8,
    overflow: 'hidden',
    marginBottom: 16,
    marginTop: 10,
  },
  tab: {
    flex: 1,
    paddingVertical: 12,
    alignItems: 'center',
  },
  activeTab: {
    flex: 1,
    paddingVertical: 12,
    alignItems: 'center',
    backgroundColor: COLOR.LIGHTBLUE,
  },
  tabText: {
    color: '#94A3B8',
    fontSize: 13,
    fontFamily: FONTS.MEDIUM,
  },
  activeTabText: {
    color: COLOR.WHITE,
    fontSize: 13,
    fontFamily: FONTS.MEDIUM,
  },
  row: {
    justifyContent: 'space-between',
    paddingHorizontal: 5,
    marginTop: 4,
    gap: 3,
    flex: 1,
  },
  cardsContainer: {
    flex: 1,
    paddingHorizontal: 16,
  },
  card: {
    backgroundColor: COLOR.BLUE,
    padding: 16,
    paddingHorizontal: 12,
    borderRadius: 12,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#334155',
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  taskTitle: {
    color: COLOR.WHITE,
    fontSize: 14,
    fontFamily: FONTS.SEMIBOLD,
    flex: 1,
  },
  statusBadge: {
    paddingVertical: 4,
    borderRadius: 20,
    width: 75,
    alignItems: 'center',
  },
  completedBadge: {
    backgroundColor: COLOR.SECONDARY,
    // paddingHorizontal: 8,
    // borderWidth: 1,
    // borderColor: '#FFFFFF4A',
    // marginLeft: 3
  },
  todoBadge: {
    backgroundColor: '#FFAE00',
  },
  statusText: {
    color: COLOR.WHITE,
    fontSize: 10,
    fontFamily: FONTS.MEDIUM,
  },
  assignedText: {
    color: COLOR.WHITE,
    fontSize: 12,
    fontFamily: FONTS.BOLD,
    marginTop: -6
  },
  name: {
    color: COLOR.WHITE,
    fontFamily: FONTS.LIGHT,
  },
  dueDateText: {
    color: COLOR.WHITE,
    fontSize: 12,
    marginBottom: 12,
    fontFamily: FONTS.BOLD,
  },
  dueDate: {
    color: COLOR.WHITE,
    fontFamily: FONTS.LIGHT,
  },
  actionButtons: {
    flexDirection: 'row',
    gap: 10,
  },

  editBtn: {
    backgroundColor: COLOR.EDITBTNCOLOR,
    paddingHorizontal: 14,
    paddingVertical: 4,
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  editIcon: {
    width: 12,
    height: 12,
    marginRight: 5,
  },
  editText: {
    color: COLOR.WHITE,
    fontSize: 9,
    fontFamily: FONTS.MEDIUM,
  },
  deleteBtn: {
    backgroundColor: COLOR.RED,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    flexDirection: 'row',
  },
  deleteIcon: {
    width: 12,
    height: 15,
    marginRight: 5,
  },
  deleteText: {
    color: COLOR.WHITE,
    fontSize: 9,
    fontFamily: FONTS.MEDIUM,
  },
  approvedBtn: {
    backgroundColor: COLOR.SECONDARY,
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  approvedText: {
    color: COLOR.WHITE,
    fontSize: 9,
    fontFamily: FONTS.MEDIUM,
  },

  buttonCon: {
    flexDirection: 'row',
    backgroundColor: COLOR.BLUE,
    borderRadius: 7,
    marginHorizontal: 15,
    marginVertical: 10,
    overflow: 'hidden',
    marginTop: 7,
  },
  button: {
    flex: 1,
    paddingVertical: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
    // overflow: 'hidden'
  },
  activeButton: {
    backgroundColor: COLOR.SECONDARY,
    // borderRadius: 5,
    // overflow: 'hidden',
  },
  inactiveButton: {
    backgroundColor: COLOR.BLUE,
  },
  userImg: {
    width: 20,
    height: 20,
    tintColor: COLOR.WHITE,
  },
  text: {
    color: COLOR.WHITE,
    fontFamily: FONTS.MEDIUM,
    fontSize: 14,
  },

  // for dropdown
  dropdown: {
    height: 35,
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 8,
    backgroundColor: COLOR.WHITE,
    borderWidth: 1,
    borderColor: COLOR.WHITE,
    marginLeft: 8,
    marginTop: 10,
    minWidth: 55,
    elevation: 3,
    marginBottom: 5,
    textAlign: 'center',
  },
  item: {
    padding: 9,
    marginTop: 1,
    backgroundColor: COLOR.BLUE,
    minWidth: 60,
    // borderRadius: 5,
  },
  itemText: {
    color: COLOR.WHITE,
    fontSize: 12,
    fontFamily: FONTS.MEDIUM,
  },
  placeholderStyle: {
    fontSize: 9,
    color: COLOR.SECONDARY,
    fontFamily: FONTS.MEDIUM,
    textAlign: 'center',
  },
  selectedTextStyle: {
    fontSize: 11,
    color: COLOR.WHITE,
    marginLeft: 2,
    fontFamily: FONTS.MEDIUM,
    paddingHorizontal: 5,
  },
  iconStyle: {
    width: 0,
    height: 0,
  },
  selectedValue: {
    color: COLOR.WHITE,
    marginTop: 10,
    fontSize: 14,
  },
  filterContainer: {
    flexDirection: 'row',
    // justifyContent: 'space-around',
    // marginBottom: 10,
    gap: 5,
    marginLeft: 10,
    marginTop: 12,
  },
  filterButton: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 18,
    backgroundColor: COLOR.WHITE,
    marginLeft: 5,
    borderWidth: 1,
    borderColor: COLOR.WHITE,
    elevation: 3,
    marginBottom: 10,
  },
  activeFilter: {
    backgroundColor: COLOR.SECONDARY,
    borderColor: COLOR.SECONDARY,
    color: COLOR.WHITE,
  },
  filterText: {
    color: COLOR.SECONDARY,
    fontSize: 9,
    fontFamily: FONTS.REGULAR,
  },
  activeFilterText: {
    color: COLOR.WHITE,
  },
});
