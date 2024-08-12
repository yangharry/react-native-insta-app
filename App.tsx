/* eslint-disable react/no-unstable-nested-components */
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {useEffect} from 'react';
import Home from './src/screen/Home';
import Search from './src/screen/Search';
import Activity from './src/screen/Activity';
import Profile from './src/screen/Profile';
import {NavigationContainer} from '@react-navigation/native';
import Status from './src/screen/Status';
import FriendProfile from './src/screen/FriendProfile';
import EditProfile from './src/screen/EditProfile';
import Ionic from 'react-native-vector-icons/Ionicons';
import notifee, {AuthorizationStatus} from '@notifee/react-native';

const App = () => {
  const Tab = createBottomTabNavigator();
  const Stack = createNativeStackNavigator();

  //안드로이드 권한 요청
  useEffect(() => {
    // 알림 권한 요청 및 초기화
    async function initialize() {
      const settings = await notifee.requestPermission();

      if (settings.authorizationStatus >= AuthorizationStatus.AUTHORIZED) {
        console.log('Notification permission granted.');
      } else {
        console.log('Notification permission denied.');
      }
    }

    initialize();
  }, []);

  const BottomTabScreen = () => {
    return (
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarHideOnKeyboard: true,
          tabBarShowLabel: false,
          headerShown: false,
          tabBarStyle: {
            height: 70,
          },
          tabBarIcon: ({focused, size, color}) => {
            let iconName = '';
            if (route.name === 'Home') {
              iconName = focused ? 'home-sharp' : 'home-outline';
            } else if (route.name === 'Search') {
              iconName = focused ? 'search' : 'search-outline';
            } else if (route.name === 'Activity') {
              iconName = focused ? 'heart' : 'heart-outline';
            } else if (route.name === 'Profile') {
              iconName = focused ? 'person-circle' : 'person-outline';
            }
            return <Ionic name={iconName} size={size} color={color} />;
          },
        })}>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Search" component={Search} />
        <Tab.Screen name="Activity" component={Activity} />
        <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>
    );
  };
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Bottom" component={BottomTabScreen} />
        <Stack.Screen name="Status" component={Status} />
        <Stack.Screen name="FriendProfile" component={FriendProfile} />
        <Stack.Screen name="EditProfile" component={EditProfile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
