import React from 'react';
import {ScrollView, Dimensions} from 'react-native';
import tw from 'twrnc';

const {width: SCREEN_WIDTH} = Dimensions.get('window');
const CompHScroll = ({
  children,
  chlidWidth,
}: {
  children: React.ReactNode;
  chlidWidth?: number;
}) => {
  return (
    <ScrollView
      contentContainerStyle={tw`grow`}
      horizontal
      snapToInterval={chlidWidth ? chlidWidth : SCREEN_WIDTH}>
      {children}
    </ScrollView>
  );
};

export default CompHScroll;
