import React, {useEffect} from 'react';
import {View, Text, StatusBar} from 'react-native';
import tw from 'twrnc';
import {CommonActions} from '@react-navigation/native';

const PageLanding = ({navigation}: Props) => {
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
    <View style={tw`flex-1 bg-[#dfdfdf] items-center justify-center`}>
      <StatusBar hidden />
      <Text style={tw`text-[#51245f] font-bold text-[20]`}>Hello</Text>
    </View>
  );
};

export default PageLanding;
