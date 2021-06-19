import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import HomeScreen from './HomeScreen';
import tabBarIcon from './utils';
import {useTheme} from '@shopify/restyle';
import {Theme} from '../constants/theme';
import LibraryScreen from './HomeScreen/LibraryScreen';
import SearchScreen from './HomeScreen/SearchScreen';

const homeIcon = require('../assets/svgs/home.svg');
const menuIcon = require('../assets/svgs/menu.svg');
const searchIcon = require('../assets/svgs/search.svg');

const Tab = createBottomTabNavigator();

const HomeTab = () => {
  const theme = useTheme<Theme>();
  const activeColor = theme.colors.primaryCardBackground;
  const notActiveColor = theme.colors.mainForeground;
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: activeColor,
        inactiveTintColor: notActiveColor,
      }}>
      <Tab.Screen
        name="Home"
        options={{
          tabBarIcon: ({focused}) => tabBarIcon(homeIcon, focused),
        }}
        component={HomeScreen}
      />
      <Tab.Screen
        name="Library"
        options={{
          tabBarIcon: ({focused}) => tabBarIcon(menuIcon, focused),
        }}
        component={LibraryScreen}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          tabBarIcon: ({focused}) => tabBarIcon(searchIcon, focused),
        }}
      />
    </Tab.Navigator>
  );
};

export default HomeTab;
