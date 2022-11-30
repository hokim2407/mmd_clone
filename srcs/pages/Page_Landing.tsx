import React, {useEffect} from 'react';
import {View, Text, StatusBar} from 'react-native';
import tw from 'twrnc';
import {CommonActions} from '@react-navigation/native';

import {MainColor} from '../styles/color';
const PageLanding = ({navigation}: NavProps) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.dispatch(
        CommonActions.reset({
          index: 1,
          routes: [
            {
              name: 'Main',
              params: {name: 'hokim'},
            },
          ],
        }),
      );
    }, 1000);
  }, []);

  return (
    <View style={tw`flex-1 bg-[${MainColor}] items-center justify-center`}>
      <StatusBar hidden />
      <Text style={tw`text-white font-bold text-[20]`}>ㅁㄷㄷ</Text>
    </View>
  );
};

export default PageLanding;
