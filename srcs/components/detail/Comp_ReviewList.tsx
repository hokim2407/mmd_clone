import React from 'react';
import {View, Text} from 'react-native';
import tw from 'twrnc';
import CompStats from '../common/Comp_Stats';

const CompReviewList = ({starStats}: {starStats: Stats}) => {
  return (
    <View style={tw`bg-white p-2`}>
      <Text>리뷰</Text>
      <CompStats data={starStats} />
    </View>
  );
};

export default CompReviewList;
