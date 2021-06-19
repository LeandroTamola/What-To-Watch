import {useTheme} from '@shopify/restyle';
import React from 'react';
import VectorImage from 'react-native-vector-image';
import {Theme} from '../constants/theme';

const tabBarIcon = (name: any, focused: boolean) => {
  const theme = useTheme<Theme>();
  const activeColor = theme.colors.primaryCardBackground;
  const notActiveColor = theme.colors.mainForeground;

  return (
    <VectorImage
      resizeMode="contain"
      style={{tintColor: focused ? activeColor : notActiveColor}}
      source={name}
    />
  );
};

export default tabBarIcon;
