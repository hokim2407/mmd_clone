import React from 'react';
import {View, Text} from 'react-native';
import {StarYellow} from '../../styles/color';

import tw from 'twrnc';
import CompImage from './Comp_Image';
const CompStarRate = ({
  rate,
  fullRate = 5,
  showRate = false,
}: {
  rate: number;
  fullRate?: number;
  showRate?: boolean;
}) => {
  enum StarStatus {
    FULL = require(`../../../static/images/star/star_full.png`),
    HALF = require(`../../../static/images/star/star_half.png`),
    EMPTY = require(`../../../static/images/star/star_empty.png`),
  }
  return (
    <View style={tw`flex-row`}>
      {[...Array(fullRate).keys()].map(idx => {
        const status =
          rate / 2 >= idx + 1
            ? StarStatus.FULL
            : idx + 1 - rate / 2 < 1
            ? StarStatus.HALF
            : StarStatus.EMPTY;
        return (
          <View key={idx} style={tw`flex-row  items-center`}>
            <CompImage
              key={idx}
              width={4}
              height={4}
              color={StarYellow}
              src={status}
            />
          </View>
        );
      })}
      {showRate && <Text style={tw`p-1 font-bold text-black`}>{rate}</Text>}
    </View>
  );
};

export default CompStarRate;
