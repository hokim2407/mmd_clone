import React from 'react';
import {View, TextInput, Button} from 'react-native';
import tw from 'twrnc';
import {MainColor} from '../../styles/color';

const CompSearch = (props: {
  keyword?: string;
  onSearch: (keyword: string) => void;
}) => {
  const onSearch = () => {
    if (props.keyword) {
      props.onSearch(props.keyword);
    }
  };

  return (
    <View style={tw`flex-1 bg-white p-2 `}>
      <View
        style={tw`flex-row flex-1 border-2 border-[${MainColor}] items-center  `}>
        <TextInput style={tw`p-2 flex-3 `}>
          {props.keyword ? props.keyword : ''}
        </TextInput>
        <View style={tw`flex-1 mr-2`}>
          <Button title={'검색'} color={MainColor} onPress={onSearch} />
        </View>
      </View>
    </View>
  );
};

export default CompSearch;
