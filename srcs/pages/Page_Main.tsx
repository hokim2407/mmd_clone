import React from 'react';
import {View, Text, StatusBar} from 'react-native';
import tw from 'twrnc';

const PageMain = ({route}: Props) => {
  const {name} = route.params;

  return (
    <View style={tw`flex-1 bg-[#dfdfdf] items-center justify-center`}>
      <StatusBar hidden={false} />
      <Text style={tw`text-[#245f29] font-bold text-[20]`}>{name}</Text>
    </View>
  );
};

export default PageMain;
