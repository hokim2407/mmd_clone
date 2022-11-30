import React from 'react';
import {View, Text, Image, Button} from 'react-native';
import tw from 'twrnc';
import {LightGray, MainColor} from '../../styles/color';
import {AD} from '../../../dump';
const CompAD = () => {
  return (
    <View style={tw`flex-1 bg-white m-2 border border-[${LightGray}] rounded`}>
      <Image
        source={{uri: AD.thumbnail}}
        resizeMode="cover"
        style={tw`flex-1 h-[40]`}
      />
      <View style={tw` p-2 `}>
        <Text>거리</Text>
        <Text style={tw`font-bold text-xl text-black`}>{AD.title}</Text>
        <Text style={tw`pb-1`}>{AD.desc}</Text>
        <View style={tw`flex-row justify-between`}>
          <Text style={tw`text-black`}>{AD.price}원</Text>
          <Button title="신청하기" color={MainColor} />
        </View>
      </View>
    </View>
  );
};

export default CompAD;
