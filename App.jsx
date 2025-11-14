import { NewAppScreen } from '@react-native/new-app-screen';
import { CommonActions, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image, StatusBar, StyleSheet, View } from 'react-native';
import Signup from './src/screens/Auth/Signup';
import Login from './src/screens/Auth/Login';
import Dashboard from './src/screens/Dashboard/Dashboard';
import Tasks from './src/screens/Dashboard/Tasks';
import Approval from './src/screens/Dashboard/Approval';
import Notifications from './src/screens/Dashboard/Notifications';
import Analytics from './src/screens/Dashboard/Analytics';
import CreateTask from './src/screens/Dashboard/CreateTask';
import Profile from './src/screens/Dashboard/Profile';
import ManageStatus from './src/screens/Dashboard/ManageStatus';
import ManageCategory from './src/screens/Dashboard/ManageCategory';
import TaskDetail from './src/screens/Dashboard/TaskDetail';
import FONTS from './src/utils/Fonts';
import COLOR from './src/utils/Color';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Signup"
          component={Signup}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Main"
          component={BottomNavigation}
          options={{ headerShown: false }}
        />
        {/* <Stack.Screen
          name="Chart"
          component={Chart}
          options={{ headerShown: false }}
        /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const BottomNavigation = () => {
  return (
    <Tab.Navigator
      initialRouteName="Dashboard"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          let image;
          if (route.name === 'Dashboard') {
            image = require('./src/assets/dashboard.png');
          } else if (route.name === 'Tasks') {
            image = require('./src/assets/tasks.png');
          } else if (route.name === 'Approval') {
            image = require('./src/assets/approval.png');
          } else if (route.name === 'Notifications') {
            image = require('./src/assets/project.png');
          } else if (route.name === 'Analytics') {
            image = require('./src/assets/analytics.png');
          }

          return (
            <View style={[styles.iconWrap, focused && styles.activeWrap]}>
              <Image
                source={image}
                style={[styles.iconImg, focused && styles.activeImg]}
                resizeMode="contain"
              />
            </View>
          );
        },
        tabBarStyle: styles.tabBar,
        tabBarShowLabel: true,
        tabBarLabelStyle: styles.tabLabel,
        tabBarActiveTintColor: COLOR.SECONDARY,
        tabBarInactiveTintColor: '#9CA3AF',
        headerShown: false,
      })}
    >
      <Tab.Screen
        name="Dashboard"
        component={DashboardScreens}
        options={{
          tabBarLabel: 'Dashboard',
          unmountOnBlur: true,
        }}
      />
      <Tab.Screen
        name="Tasks"
        component={TaskScreens}
        options={{
          tabBarLabel: 'Tasks',
          unmountOnBlur: true,
        }}
        listeners={({ navigation }) => ({
          tabPress: e => {
            e.preventDefault();
            // navigation.navigate('Tasks', { screen: 'Tasks' });
            navigation.dispatch(
              CommonActions.reset({
                index: 0,
                routes: [
                  { name: 'Tasks', state: { routes: [{ name: 'Tasks' }] } },
                ],
              }),
            );
          },
        })}
      />
      <Tab.Screen
        name="Approval"
        component={Approval}
        options={{
          tabBarLabel: 'Approval',
          unmountOnBlur: true,
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={Notifications}
        options={{
          tabBarLabel: 'Project',
        }}
      />
      <Tab.Screen
        name="Analytics"
        component={Analytics}
        options={{
          tabBarLabel: 'Analytics',
        }}
      />
    </Tab.Navigator>
  );
};

const DashboardScreens = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator initialRouteName="Dashboard">
      <Stack.Screen
        name="Dashboard"
        component={Dashboard}
        options={{ headerShown: false, tabBarStyle: { display: 'none' } }}
      />
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{ headerShown: false, tabBarStyle: { display: 'none' } }}
      />
      <Stack.Screen
        name="ManageStatus"
        component={ManageStatus}
        options={{ headerShown: false, tabBarStyle: { display: 'none' } }}
      />
      <Stack.Screen
        name="ManageCategory"
        component={ManageCategory}
        options={{ headerShown: false, tabBarStyle: { display: 'none' } }}
      />
    </Stack.Navigator>
  );
};

const TaskScreens = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator initialRouteName="Tasks">
      <Stack.Screen
        name="Tasks"
        component={Tasks}
        options={{ headerShown: false, tabBarStyle: { display: 'none' } }}
      />
      <Stack.Screen
        name="CreateTask"
        component={CreateTask}
        options={{ headerShown: false, tabBarStyle: { display: 'none' } }}
      />
      <Stack.Screen
        name="TaskDetail"
        component={TaskDetail}
        options={{ headerShown: false, tabBarStyle: { display: 'none' } }}
      />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    height: 60,
    width: '100%',
    // paddingVertical: 8,
    backgroundColor: COLOR.BLUE,
    elevation: 15,
    shadowColor: COLOR.BLACK,
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderColor: '#101922',
    borderWidth: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
  },
  tabLabel: {
    fontSize: 10,
    marginTop: 3,
    // fontFamily: FONTS.REGULAR
  },
  iconWrap: {
    width: 45,
    height: 45,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  activeWrap: {
    transform: [{ scale: 1.1 }],
    // marginBottom: 10,
    // borderWidth: 3,
    // borderColor: '#FFFFFF',
  },
  iconImg: {
    width: 18,
    height: 18,
    tintColor: COLOR.WHITE,
  },
  activeImg: {
    tintColor: COLOR.SECONDARY,
  },
});

export default App;
