import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import OnboardingScreen from './Onboarding';
import {AuthenticationStackType} from '../types/NavigationTypes';

const Authentication = createStackNavigator<AuthenticationStackType>();

const AuthenticationStack = () => {
  return (
    <Authentication.Navigator initialRouteName="Onboarding" headerMode="none">
      <Authentication.Screen name="Onboarding" component={OnboardingScreen} />
    </Authentication.Navigator>
  );
};

export default AuthenticationStack;
