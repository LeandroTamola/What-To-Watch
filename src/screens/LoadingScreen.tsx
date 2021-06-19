import {useTheme} from '@shopify/restyle';
import React from 'react';
import {ActivityIndicator} from 'react-native';
import {Box, Theme} from '../constants/theme';

const LoadingScreen = () => {
  const theme = useTheme<Theme>();
  return (
    <Box
      backgroundColor="mainBackground"
      flex={1}
      alignItems="center"
      justifyContent="center">
      <ActivityIndicator color={theme.colors.primaryCardBackground} />
    </Box>
  );
};

export default LoadingScreen;
