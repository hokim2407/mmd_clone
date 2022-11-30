import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import tw from 'twrnc';
import {MainColor} from '../../styles/color';

const CompSearchBtn = (props: {
  keyword?: string;
  navigation: NavPropsNavigation;
}) => {
  const onPress = () => {
    props.navigation.push('Search', {
      keyword: props.keyword ? props.keyword : '',
    });
  };

  return (
    <View style={tw`flex-1 bg-white p-1 h-12`}>
      <TouchableOpacity
        style={tw`flex-row flex-1 border-2 border-[${MainColor}] items-center p-2 justify-between`}
        onPress={onPress}>
        <Text style={tw`flex-1`}>
          {props.keyword ? props.keyword : '지역, 진료과, 병원명'}
        </Text>
        <Image
          style={[tw`w-5`, {resizeMode: 'contain', tintColor: MainColor}]}
          source={require('../../../static/images/search.png')}
        />
      </TouchableOpacity>
    </View>
  );
};

export default CompSearchBtn;
