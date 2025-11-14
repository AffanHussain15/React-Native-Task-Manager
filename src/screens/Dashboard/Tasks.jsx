import {
  BackHandler,
  FlatList,
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
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Task1 from '../Dashboard/Task1';
import Task2 from '../Dashboard/Task2';
import { useFocusEffect } from '@react-navigation/native';
import COLOR from '../../utils/Color';
import { FONTS } from '../../utils/Fonts';

const Tasks = ({ navigation }) => {
  const [activeTab, setActiveTab] = useState('created');
  const [isLeft, setIsLeft] = useState(true);

  useFocusEffect(
    useCallback(() => {
      const onBackPress = () => {
        navigation.navigate('Dashboard');
        // BackHandler.exitApp();
        return true; // Back event consume karo
      };

      const subscription = BackHandler.addEventListener('hardwareBackPress', onBackPress);

      return () => subscription.remove();
    }, [navigation])
  );

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
          backgroundColor: '#1C2127',
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
  // const taskData = {
  //   created: [
  //     {
  //       id: 1,
  //       title: 'Design the new login screen',
  //       assignedBy: 'Jane Doe',
  //       dueDate: '2023-10-26',
  //       status: 'Completed',
  //       priority: 'High',
  //     },
  //     {
  //       id: 2,
  //       title: 'Design the new login screen',
  //       assignedBy: 'Jane Doe',
  //       dueDate: '2023-10-26',
  //       status: 'To Do',
  //       priority: 'Medium',
  //     },
  //     {
  //       id: 3,
  //       title: 'Design the new login screen',
  //       assignedBy: 'Jane Doe',
  //       dueDate: '2023-10-26',
  //       status: 'Completed',
  //       priority: 'Low',
  //     },
  //   ],
  //   assigned: [
  //     {
  //       id: 4,
  //       title: 'Design the new login screen',
  //       assignedBy: 'Jane Doe',
  //       dueDate: '2023-10-26',
  //       status: 'Completed',
  //       priority: 'High',
  //     },
  //     {
  //       id: 5,
  //       title: 'Design the new login screen',
  //       assignedBy: 'Jane Doe',
  //       dueDate: '2023-10-26',
  //       status: 'To Do',
  //       priority: 'Medium',
  //     },
  //     {
  //       id: 6,
  //       title: 'Design the new login screen',
  //       assignedBy: 'Jane Doe',
  //       dueDate: '2023-10-26',
  //       status: 'Completed',
  //       priority: 'Low',
  //     },
  //   ],
  // };
  // const [sortBy, setSortBy] = useState('Due Date');
  // const sortedTasks = [...taskData].sort((a, b) => {
  //   if (sortBy === 'Due Date') {
  //     return new Date(a.dueDate) - new Date(b.dueDate);
  //   }
  //   if (sortBy === 'Priority') {
  //     const priorityOrder = { High: 1, Medium: 2, Low: 3 };
  //     return priorityOrder[a.priority] - priorityOrder[b.priority];
  //   }
  //   if (sortBy === 'User') {
  //     return a.assignedBy.localeCompare(b.assignedBy);
  //   }
  //   if (sortBy === 'Status') {
  //     return a.status.localeCompare(b.status);
  //   }
  //   return 0;
  // });

  // const sortOptions = [
  //   'Filter by Status',
  //   'Sort by Priority',
  //   'Sort by User',
  //   'Sort by Due Date',
  // ];

  // const renderItem = ({ item:task }) => {
  //   return (
  //     <View style={styles.cardsContainer}>
  //       <View key={task.id} style={styles.card}>
  //         <View style={styles.cardHeader}>
  //           <Text style={styles.taskTitle}>{task.title}</Text>
  //           <View
  //             style={[
  //               styles.statusBadge,
  //               task.status === 'Completed'
  //                 ? styles.completedBadge
  //                 : styles.todoBadge,
  //             ]}
  //           >
  //             <Text style={styles.statusText}>
  //               {task.status === 'Completed' ? 'Completed' : 'To Do'}
  //             </Text>
  //           </View>
  //         </View>

  //         <Text style={styles.assignedText}>
  //           Assigned by: <Text style={styles.name}>{task.assignedBy}</Text>
  //         </Text>
  //         <Text style={styles.dueDateText}>
  //           Due: <Text style={styles.dueDate}>Oct 26, 2023 </Text>{' '}
  //         </Text>

  //         <View style={styles.actionButtons}>
  //           <TouchableOpacity style={styles.editBtn}>
  //             <Text style={styles.editText}>Edit</Text>
  //           </TouchableOpacity>
  //           <TouchableOpacity style={styles.deleteBtn}>
  //             <Text style={styles.deleteText}>Delete</Text>
  //           </TouchableOpacity>
  //           {task.status === 'Completed' && (
  //             <TouchableOpacity style={styles.approvedBtn}>
  //               <Text style={styles.approvedText}>Approved</Text>
  //             </TouchableOpacity>
  //           )}
  //         </View>
  //       </View>
  //     </View>
  //   );
  // };

  return (
    <DashboardWrapper>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <View style={styles.logoCon}>
            <Image
              style={styles.logo}
              source={require('../../assets/logo.png')}
            />
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate('CreateTask')}
            style={styles.plusIcon}
          >
            <Entypo name={'plus'} size={28} color={COLOR.WHITE} />
          </TouchableOpacity>
        </View>
        <View style={styles.toggleContainer}>
          <TouchableOpacity
            style={[
              styles.toggleButton,
              isLeft ? styles.toggleLeft : styles.toggleRight,
            ]}
            onPress={() => setIsLeft(!isLeft)}
          >
            <View
              style={[
                styles.toggleCircle,
                isLeft ? styles.circleLeft : styles.circleRight,
              ]}
            />
          </TouchableOpacity>
          {/* <View style={styles.toggleLabels}>
          <Text style={[styles.label, isLeft && styles.activeLabel]}>
            Screen 1
          </Text>
          <Text style={[styles.label, !isLeft && styles.activeLabel]}>
            Screen 2
          </Text>
        </View> */}
        </View>

        {isLeft ? <Task1 /> : <Task2 />}
        {/* <Text style={styles.title}>My Tasks</Text>
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
        />
      </View> */}

        {/* <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.sortContainer}
      >
        {sortOptions.map(option => (
          <TouchableOpacity
            key={option}
            style={[
              styles.sortBtn,
              sortBy.includes(option.split(' ')[2]) && styles.activeSortBtn,
            ]}
            onPress={() => setSortBy(option.split(' ').slice(2).join(' '))}
          >
            <Text
              style={[
                styles.sortText,
                sortBy.includes(option.split(' ')[2]) && styles.activeSortText,
              ]}
            >
              {option}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView> */}

        {/* <View style={styles.tabContainer}>
        <TouchableOpacity style={styles.activeTab}>
          <Text style={styles.activeTabText}>Created by me</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tab}>
          <Text style={styles.tabText}>Assigned to me</Text>
        </TouchableOpacity>
      </View> */}

        {/* <View style={styles.buttonCon}>
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
      </View> */}

        {/* <FlatList
        data={taskData[activeTab]}
        renderItem={renderItem}
        keyExtractor={task => task.id}
        // numColumns={1}
        // contentContainerStyle={styles.row}
      /> */}

        {/* <ScrollView style={styles.cardsContainer}>
        {sortedTasks.map(task => (
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
                <Text style={styles.editText}>Edit</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.deleteBtn}>
                <Text style={styles.deleteText}>Delete</Text>
              </TouchableOpacity>
              {task.status === 'Completed' && (
                <TouchableOpacity style={styles.approvedBtn}>
                  <Text style={styles.approvedText}>Approved</Text>
                </TouchableOpacity>
              )}
            </View>
          </View>
        ))}
      </ScrollView> */}
      </ScrollView>
    </DashboardWrapper>
  );
};

export default Tasks;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  logoCon: {
    width: 168,
    height: 60,
    // alignSelf: 'center',
    marginTop: 10,
    marginLeft: 15,
  },
  logo: {
    width: '100%',
    height: '100%',
  },
  title: {
    fontSize: 25,
    color: COLOR.WHITE,
    fontFamily: FONTS.SEMIBOLD,
    paddingLeft: 15,
  },
  plusIcon: {
    width: 38,
    height: 38,
    backgroundColor: COLOR.SECONDARY,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 12,
    marginRight: 15,
  },
  searchIconCon: {
    width: '95%',
    height: 45,
    borderRadius: 30,
    backgroundColor: '#1E293B',
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
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
    flex: 1,
  },
  statusBadge: {
    // paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 20,
    width: 70,
    alignItems: 'center',
  },
  completedBadge: {
    backgroundColor: COLOR.LIGHTGREEN,
    // borderWidth: 1,
    // borderColor: '#FFFFFF4A',
    // marginLeft: 3
  },
  todoBadge: {
    backgroundColor: '#FFAE00',
  },
  statusText: {
    color: COLOR.BLACK,
    fontSize: 10,
    fontFamily: FONTS.MEDIUM,
  },
  assignedText: {
    color: COLOR.WHITE,
    fontSize: 12,
    fontFamily: FONTS.BOLD,
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
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 6,
  },
  editText: {
    color: COLOR.WHITE,
    fontSize: 11,
    fontFamily: FONTS.MEDIUM,
  },
  deleteBtn: {
    backgroundColor: COLOR.RED,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 6,
  },
  deleteText: {
    color: COLOR.WHITE,
    fontSize: 11,
    fontFamily: FONTS.MEDIUM,
  },
  approvedBtn: {
    backgroundColor: '#0AB20A',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 6,
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
    // borderWidth: 1,
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

  // for toggle
  toggleContainer: {
    alignItems: 'center',
    marginBottom: 20,
    position: 'absolute',
    top: 39,
    left: '60%',
  },
  toggleButton: {
    width: 60,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#2A3A4A',
    justifyContent: 'center',
    padding: 2,
  },
  toggleLeft: {
    backgroundColor: COLOR.SECONDARY,
  },
  toggleRight: {
    backgroundColor: COLOR.SECONDARY,
  },
  toggleCircle: {
    width: 26,
    height: 26,
    borderRadius: 13,
    backgroundColor: COLOR.WHITE,
    position: 'absolute',
  },
  circleLeft: {
    left: 2,
  },
  circleRight: {
    right: 2,
  },
  toggleLabels: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 120,
    marginTop: 5,
  },
  label: {
    color: '#A9B4C2',
    fontSize: 16,
  },
  activeLabel: {
    color: COLOR.WHITE,
    fontFamily: FONTS.SEMIBOLD,
  },
});
