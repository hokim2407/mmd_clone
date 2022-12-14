import React, {useEffect} from 'react';
import {View, StatusBar, ScrollView} from 'react-native';
import tw from 'twrnc';
import {MainColor} from '../styles/color';
import CompHospital from '../components/detail/Comp_Hospital';
import CompDoctor from '../components/detail/Comp_Doctor';
import CompReviewList from '../components/detail/Comp_ReviewList';

import {useAppSelector} from '../context/store';
import {hospital as hosp} from '../context/hospitalSlice';

import CompNear from '../components/detail/Comp_Near';
const PageDetail = ({_, navigation}: NavProps) => {
  const hospital = useAppSelector(hosp);

  useEffect(() => {
    console.log(navigation.getState());
    navigation.setOptions({
      title: hospital?.name,
      headerStyle: tw`bg-[#4c1192]`,
      headerTintColor: '#fff',
      headerTitleAlign: 'center',
      headerTitleStyle: tw`w-full text-white font-bold`,
    });
  }, []);

  return (
    <View style={tw`flex-1 bg-[#dfdfdf]`}>
      <StatusBar hidden={false} backgroundColor={MainColor} />
      {hospital && (
        <ScrollView contentContainerStyle={tw`grow`}>
          <CompHospital />
          <CompDoctor />
          <CompNear navigation={navigation} />
          <CompReviewList starStats={hospital.starStats} />
        </ScrollView>
      )}
    </View>
  );
};

export default PageDetail;
