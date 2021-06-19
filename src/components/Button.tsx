import React from 'react';
import {RectButton} from 'react-native-gesture-handler';
import {Box, Text, Theme} from '../constants/theme';

interface ButtonProps {
  label: string;
  onPress: () => void;
  color?: keyof Theme['colors'];
}

const Button = ({label, onPress, color}: ButtonProps) => {
  return (
    <RectButton activeOpacity={0} {...{onPress}}>
      <Box alignSelf="center" p="m" borderRadius="m" backgroundColor={color}>
        <Text variant="body" color="primaryCardText">
          {label.toUpperCase()}
        </Text>
      </Box>
    </RectButton>
  );
};

export default Button;

const defaultProps = {
  color: 'primaryCardBackground',
};
Button.defaultProps = defaultProps;
