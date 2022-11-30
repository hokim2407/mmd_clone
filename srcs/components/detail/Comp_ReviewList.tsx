import React from 'react';
import {View, Text} from 'react-native';
import tw from 'twrnc';
import CompStats from '../common/Comp_Stats';

const CompReviewList = ({starStats}: {starStats: Stats}) => {
  return (
    <View style={tw`bg-white p-4 mt-2`}>
      <View style={tw`flex-row justify-between items-center`}>
        <Text style={tw`text-black pb-4`}>리뷰</Text>
        <Text style={tw`pb-4 text-xs`}>전체보기 &gt;</Text>
      </View>
      <CompStats data={starStats} />
    </View>
  );
};

export default CompReviewList;
