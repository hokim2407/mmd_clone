import React from 'react';
import {View, Text} from 'react-native';
import tw from 'twrnc';
import CompStats from '../common/Comp_Stats';
import {useAppSelector} from '../../context/store';
import {hospital as hosp} from '../../context/hospitalSlice';

const CompReviewList = () => {
  const hospital = useAppSelector(hosp);
  return (
    <View style={tw`bg-white p-4 mt-2`}>
      <View style={tw`flex-row justify-between items-center`}>
        <Text style={tw`text-black pb-4`}>리뷰</Text>
        <Text style={tw`pb-4 text-xs`}>전체보기 &gt;</Text>
      </View>
      {hospital && <CompStats data={hospital.starStats} />}
    </View>
  );
};

export default CompReviewList;
