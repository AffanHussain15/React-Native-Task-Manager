import { useFocusEffect } from '@react-navigation/native';
import React, { useCallback, useEffect, useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  FlatList,
  Image,
  Keyboard,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import COLOR from '../../utils/Color';
import { FONTS } from '../../utils/Fonts';

const Task1 = ({ navigation }) => {
  const [activeFilter, setActiveFilter] = useState(null);
  const [activeTab, setActiveTab] = useState('Created by me');
  const [filter, setFilter] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  const tasks = {
    'Created by me': [
      {
        id: 1,
        title: 'Design the new login screen',
        assignedBy: 'Assigned by: jane doe',
        dueDate: 'Due: Oct 28, 2023',
        status: 'In Progress',
        actions: ['Edit', 'Delete', 'Approve'],
      },
      {
        id: 2,
        title: 'Design the new login screen',
        assignedBy: 'Assigned by: jane doe',
        dueDate: 'Due: Oct 28, 2023',
        status: 'To Do',
        actions: ['Edit', 'Delete'],
      },
      {
        id: 3,
        title: 'Design the new login screen',
        assignedBy: 'Assigned by: jane doe',
        dueDate: 'Due: Oct 28 2023',
        status: 'Done',
        actions: ['Edit', 'Delete', 'Approve'],
      },
    ],
    'Assigned to me': [
      {
        id: 4,
        title: 'Design the new login screen',
        assignedBy: 'Assigned by: jane doe',
        dueDate: 'Due: Oct 28, 2023',
        status: 'In Progress',
        actions: ['Edit', 'Delete', 'Approve'],
      },
    ],
  };

  const handleSearch = text => {
    setSearchQuery(text);
    const trimmedText = text.trim();
    if (trimmedText) {
      const newData = tasks[activeTab].filter((item) => {
        const titleData = item.title ? item.title.toLowerCase().trim() : '';
        const assignedData = item.assignedBy
          ? item.assignedBy.toLowerCase().trim()
          : '';
        const textData = trimmedText.toLowerCase();
        return titleData.includes(textData) || assignedData.includes(textData);
      });
      setFilter(newData);
    } else {
      setFilter(tasks[activeTab]);
    }
  };

  useEffect(() => {
    setFilter(tasks[activeTab])
    setSearchQuery('')
  },[activeTab])

  const renderItem = ({ item: task }) => {
    return (
      <View style={styles.cardsContainer}>
        <View key={task.id} style={styles.card}>
          <View style={styles.cardHeader}>
            <Text style={styles.taskTitle}>{task.title}</Text>
            <View
              style={[
                styles.statusBadge,
                task.status === 'In Progress'
                  ? styles.completedBadge
                  : styles.todoBadge,

                task.status === 'To Do' && styles.todosBadge,
              ]}
            >
              <Text style={styles.statusText}>
                {task.status}
                {/* {task.status === 'Completed' ? 'Completed' : 'To Do'} */}
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
            {/* {task.status === 'Completed' && ( */}
            <TouchableOpacity style={styles.approvedBtn}>
              <Text style={styles.approvedText}>Approved</Text>
            </TouchableOpacity>
            {/* //   )} */}
          </View>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>My Tasks</Text>
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
      {/* <TextInput
        style={styles.searchBar}
        placeholder="Search for a task"
        placeholderTextColor="#A9B4C2"
      /> */}
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
            <Text style={styles.filterText}>{filter}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
      <View style={styles.tabContainer}>
        {['Created by me', 'Assigned to me'].map(tab => (
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

      <FlatList
        data={filter}
        renderItem={renderItem}
        keyExtractor={task => task.id.toString()}
        contentContainerStyle={{ marginBottom: 60 }}
      />

      {/* <View style={styles.taskList}>
        {tasks[activeTab].map((task, index) => (
          <View key={index} style={styles.taskItem}>
            <View>
              <Text style={styles.taskTitle}>{task.title}</Text>
              <Text style={styles.taskDetails}>{task.assignedBy}</Text>
              <Text style={styles.taskDetails}>{task.dueDate}</Text>
            </View>
            <View style={styles.statusContainer}>
              <Text style={styles.status}>{task.status}</Text>
              <View style={styles.actionButtons}>
                {task.actions.map((action, idx) => (
                  <Text key={idx} style={styles.actionButton}>
                    {action}
                  </Text>
                ))}
              </View>
            </View>
          </View>
        ))}
      </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR.WHITE,
    paddingTop: 20,
  },
  header: {
    color: COLOR.BLACK,
    fontSize: 24,
    paddingHorizontal: 15,
    marginBottom: 10,
    fontFamil: FONTS.MEDIUM,
  },
  searchIconCon: {
    width: '92%',
    height: 45,
    borderRadius: 5,
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 10,
    borderColor: COLOR.BLUE,
    borderWidth: 1,
  },
  searchIcon: {
    paddingLeft: 20,
  },
  searchInput: {
    fontSize: 14,
    color: '#00000061',
    fontFamily: FONTS.MEDIUM,
    paddingLeft: 10,
    flex: 1,
    paddingBottom: 8,
  },
  searchBar: {
    backgroundColor: '#1E293B',
    color: COLOR.WHITE,
    borderRadius: 5,
    padding: 10,
    marginHorizontal: 15,
    marginBottom: 10,
    fontSize: 16,
  },
  filterContainer: {
    flexDirection: 'row',
    // justifyContent: 'space-around',
    marginBottom: 10,
    gap: 5,
    marginLeft: 10,
  },
  filterButton: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 18,
    backgroundColor: COLOR.SECONDARY,
    marginLeft: 5,
    borderWidth: 1,
    borderColor: COLOR.WHITE,
  },
  activeFilter: {
    backgroundColor: COLOR.SECONDARY,
    borderColor: COLOR.SECONDARY,
  },
  filterText: {
    color: COLOR.WHITE,
    fontSize: 14,
    fontFamily: FONTS.LIGHT,
  },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10,
    marginTop: 10,
    paddingHorizontal: 10,
  },
  tab: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    // gap: 5,
    backgroundColor: COLOR.BLUE,
    borderRadius: 5,
  },
  activeTab: {
    backgroundColor: COLOR.SECONDARY,
  },
  tabText: {
    color: COLOR.WHITE,
    fontSize: 15,
    fontFamily: FONTS.MEDIUM,
  },
  activeTabText: {
    color: COLOR.WHITE,
    fontFamily: FONTS.MEDIUM,
  },
  taskList: {
    paddingHorizontal: 15,
  },
  taskItem: {
    backgroundColor: '#101922',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '',
  },
  taskTitle: {
    color: COLOR.WHITE,
    fontSize: 16,
    fontFamily: FONTS.MEDIUM,
    marginBottom: 5,
  },
  taskDetails: {
    color: '#A9B4C2',
    fontSize: 14,
  },
  statusContainer: {
    alignItems: 'flex-end',
  },
  status: {
    color: COLOR.WHITE,
    fontSize: 14,
    marginBottom: 5,
    padding: 5,
    backgroundColor: '#4CAF50',
    borderRadius: 3,
  },
  actionButtons: {
    flexDirection: 'row',
    gap: 5,
  },
  actionButton: {
    color: '#A9B4C2',
    fontSize: 12,
  },

  //   for flatlist
  cardsContainer: {
    flex: 1,
    paddingHorizontal: 16,
  },
  card: {
    backgroundColor: '#1E293B',
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
    fontSize: 15,
    fontFamily: FONTS.SEMIBOLD,
  },
  statusBadge: {
    paddingVertical: 4,
    borderRadius: 20,
    width: 70,
    alignItems: 'center',
    borderWidth: 1,
  },
  completedBadge: {
    backgroundColor: '#e4e800c2',
  },
  todoBadge: {
    backgroundColor: COLOR.LIGHTGREEN,
  },
  todosBadge: {
    backgroundColor: '#1E293B',
    borderWidth: 1,
    borderColor: COLOR.WHITE,
  },
  statusText: {
    color: COLOR.WHITE,
    fontSize: 11,
    fontFamily: FONTS.MEDIUM,
  },
  assignedText: {
    color: COLOR.WHITE,
    fontSize: 12,
    fontFamily: FONTS.LIGHT,
  },
  name: {
    color: COLOR.WHITE,
    fontFamily: FONTS.LIGHT,
  },
  dueDateText: {
    color: COLOR.WHITE,
    fontSize: 12,
    marginBottom: 12,
    fontFamily: FONTS.LIGHT,
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
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: COLOR.WHITE,
    flexDirection: 'row',
  },
  editIcon: {
    width: 14,
    height: 14,
    marginRight: 3,
  },
  editText: {
    color: COLOR.WHITE,
    fontSize: 11,
    fontFamily: FONTS.MEDIUM,
  },
  deleteBtn: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: COLOR.WHITE,
    flexDirection: 'row',
  },
  deleteIcon: {
    width: 12,
    height: 15,
    marginRight: 3,
  },
  deleteText: {
    color: COLOR.WHITE,
    fontSize: 11,
    fontFamily: FONTS.MEDIUM,
  },
  approvedBtn: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: COLOR.WHITE,
  },
  approvedText: {
    color: COLOR.WHITE,
    fontSize: 11,
    fontFamily: FONTS.MEDIUM,
  },

  buttonCon: {
    flexDirection: 'row',
    backgroundColor: '#18212D',
    borderRadius: 7,
    borderColor: '#FFFFFF69',
    marginHorizontal: 15,
    marginVertical: 10,
  },
  button: {
    flex: 1,
    paddingVertical: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
  },
  activeButton: {
    backgroundColor: COLOR.EDITBTNCOLOR,
    borderRadius: 5,
    overflow: 'hidden',
  },
  inactiveButton: {
    backgroundColor: '#18212D',
  },
  userImg: {
    width: 20,
    height: 20,
  },
  text: {
    color: COLOR.WHITE,
    fontFamily: FONTS.MEDIUM,
    fontSize: 14,
  },
});

export default Task1;
