import {View, Text} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';

import WelcomeScreen from './src/screen/Welcome';
import LoginScreen from './src/screen/Login';
import RegisterScreen from './src/screen/Register';
import DasboardScreen from './src/screen/Dashboard';
import SearchbarScreen from './src/screen/searchbar';

const Stack = createStackNavigator();

const Tab = createBottomTabNavigator();

const RootHome = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarActiveTintColor: '#FDCB5A',
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#fff',
        },
      }}>
      <Tab.Screen
        name="Dashboard"
        component={DasboardScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <Fontisto name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="search"
        component={SearchbarScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <Fontisto name="search" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="comment"
        component={SearchbarScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="comment" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="notification"
        component={SearchbarScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="bell" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="profile"
        component={SearchbarScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="account" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="DashboardScreen" component={RootHome} />
        <Stack.Screen name="searchbar" component={SearchbarScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
