import {useTheme} from '@shopify/restyle';
import React from 'react';
import {Image, Dimensions, ImageRequireSource, StyleSheet} from 'react-native';
import {Box, Text, Theme} from '../../constants/theme';
import Button from '../../components/Button';
import {useNavigation} from '@react-navigation/native';

interface SlideProps {
  item: {
    id: number;
    image: ImageRequireSource;
    title: string;
    description: string;
    button?: {label: string};
  };
  width: number;
}
const dimensions = Dimensions.get('window');
const Slide = ({item, width}: SlideProps) => {
  const {navigate} = useNavigation();
  const theme = useTheme<Theme>();
  return (
    <Box
      flex={1}
      width={width}
      flexDirection="column"
      alignItems="center"
      backgroundColor="mainBackground">
      <Box
        flex={3 / 5}
        alignItems="center"
        justifyContent="center"
        width="100%"
        pt="xl">
        <Image source={item.image} resizeMode="cover" style={styles.image} />
      </Box>
      <Box
        flex={2 / 5}
        flexDirection="column"
        alignContent="center"
        pb="l"
        px="l">
        <Text
          variant="hero"
          textAlign="center"
          mb="s"
          style={{
            color:
              item.id === 4
                ? theme.colors.primaryCardBackground
                : theme.colors.mainForeground,
          }}>
          {item.title}
        </Text>
        <Text variant="subTitle" textAlign="center" mb="m">
          {item.description}
        </Text>
        {item.button && (
          <Button label={item.button.label} onPress={() => navigate('Home')} />
        )}
      </Box>
    </Box>
  );
};

export default Slide;

const styles = StyleSheet.create({
  image: {width: dimensions.width, height: dimensions.width * 1.5},
});
