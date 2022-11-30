import React, {useEffect, useState} from 'react';
import {View, Dimensions, Text, TouchableOpacity} from 'react-native';
import tw from 'twrnc';
import {LightGray, DarkGray} from '../../styles/color';

import CompHScroll from './Comp_HScroll';
import CompImage from './Comp_Image';

const {width: SCREEN_WIDTH} = Dimensions.get('window');
const CompCardHScroll = ({
  children = undefined,
  title,
  chlidWidth,
}: {
  children?: React.ReactNode;
  title: string;
  chlidWidth: number;
}) => {
  return (
    <View style={tw`bg-white p-2`}>
      <View style={tw`flex-row justify-start p-2`}>
        <Text style={tw`font-bold text-black py-1`}>{title}</Text>
        <TouchableOpacity style={tw`p-1`}>
          <CompImage
            width={4}
            height={4}
            color={DarkGray}
            src={require('../../../static/images/info.png')}
          />
        </TouchableOpacity>
      </View>
      <CompHScroll chlidWidth={chlidWidth}>{children}</CompHScroll>
    </View>
  );
};

export default CompCardHScroll;
