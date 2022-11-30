import React from 'react';
import {View, Text} from 'react-native';
import tw from 'twrnc';
import {DarkGray} from '../../styles/color';

const CompHospitalTime = ({title, time}: {title: string; time: string}) => {
  return (
    <View style={tw`flex-9 flex-row items-center justify-between py-1`}>
      <View style={tw`w-3 h-3 rounded-full border border-[${DarkGray}] mr-1`} />
      <Text style={tw`flex-1`}>{title}</Text>
      <Text style={tw`flex-3`}>{time}</Text>
    </View>
  );
};

export default CompHospitalTime;
