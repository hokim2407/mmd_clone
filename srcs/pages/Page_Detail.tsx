import React from 'react';
import {View, StatusBar, ScrollView} from 'react-native';
import tw from 'twrnc';
import {MainColor} from '../styles/color';
import CompHospital from '../components/detail/Comp_Hospital';
import CompDoctor from '../components/detail/Comp_Doctor';
import CompReviewList from '../components/detail/Comp_ReviewList';

import CompNear from '../components/detail/Comp_Near';
const PageDetail = ({route, navigation}: NavProps) => {
  const hospital: Hospital = route.params.hospital;

  return (
    <View style={tw`flex-1 bg-[#dfdfdf]`}>
      <StatusBar hidden={false} backgroundColor={MainColor} />
      <ScrollView contentContainerStyle={tw`grow`}>
        <CompHospital hospital={hospital} />
        <CompDoctor hospital={hospital} />
        <CompNear navigation={navigation} />
        <CompReviewList starStats={hospital.starStats} />
      </ScrollView>
    </View>
  );
};

export default PageDetail;
