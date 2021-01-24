import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  SplashScreen,
  WelcomeScreen,
  LoginPage,
  HomePage,
  KasPage,
  ProfilePage,
  AddAttendancePage,
} from '../pages';
import { BottomNavigator } from '../components';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MainApp = () => {
  return (
    <Tab.Navigator tabBar={props => <BottomNavigator {...props} />}>
      <Tab.Screen name="Home" component={HomePage} />
      <Tab.Screen name="Kas" component={KasPage} />
      <Tab.Screen name="Profile" component={ProfilePage} />
    </Tab.Navigator>
  )
}

const Routes = () => {
  return (
    <Stack.Navigator initialRouteName='SplashScreen'>
      <Stack.Screen
        name='SplashScreen'
        component={SplashScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='WelcomeScreen'
        component={WelcomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='LoginPage'
        component={LoginPage}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='MainApp'
        component={MainApp}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='AddAttendancePage'
        component={AddAttendancePage}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  )
}

export default Routes;
