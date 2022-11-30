import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import tw from 'twrnc';
import {LightGray, DarkGray} from '../../styles/color';
import {mainCategories} from '../../../dump';
import CompIconText from '../common/Comp_IconText';
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
          <CompIconText
            key={i}
            title={cate}
            onPress={onPress(cate)}
            src={require('../../../static/images/hospital.png')}
            width={'25%'}
          />
        ))}
    </View>
  );
};

export default CompCategory;
