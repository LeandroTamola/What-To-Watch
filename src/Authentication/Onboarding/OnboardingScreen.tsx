import React from 'react';
import {ScrollView, Dimensions} from 'react-native';
import Data from './onboardingData';
import Slide from './Slide';

const {width} = Dimensions.get('window');
const OnboardingScreen = () => {
  return (
    <ScrollView
      horizontal
      snapToInterval={width}
      decelerationRate="fast"
      showsHorizontalScrollIndicator={false}>
      {Data.map(item => (
        <Slide key={item.id} item={item} {...{width}} />
      ))}
    </ScrollView>
  );
};

export default OnboardingScreen;
