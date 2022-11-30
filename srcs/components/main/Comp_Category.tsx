import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import tw from 'twrnc';
import {LightGray, DarkGray} from '../../styles/color';
import {mainCategories} from '../../../dump';

const CompCategory = (props: {navigation: NavPropsNavigation}) => {
  const [cateList, setCateList] = useState<string[]>();

  useEffect(() => {
    setCateList(mainCategories);
  }, []);

  const onPress = (keyword: string) => {
    return () => {
      props.navigation.push('Map', {keyword});
    };
  };

  return (
    <View style={tw`flex-1 flex-row bg-white p-2 flex-wrap`}>
      {cateList &&
        cateList.length > 0 &&
        cateList.map((cate, i) => (
          <TouchableOpacity
            key={i}
            onPress={onPress(cate)}
            style={[
              tw`p-2  shrink-0 grow justify-center items-center border border-[${LightGray}] aspect-square`,
              {flexBasis: '25%'},
            ]}>
            <Image
              style={[
                tw`w-[70%] h-[70%]`,
                {resizeMode: 'contain', tintColor: DarkGray},
              ]}
              source={require('../../../static/images/hospital.png')}
            />
            <Text
              style={[
                tw` h-[30%] flex-1 shrink-0 flex-wrap text-xs`,
                {textAlignVertical: 'center'},
              ]}>
              {cate}
            </Text>
          </TouchableOpacity>
        ))}
    </View>
  );
};

export default CompCategory;
