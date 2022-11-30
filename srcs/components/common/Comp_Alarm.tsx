import React from 'react';
import {View} from 'react-native';
import CompImage from './Comp_Image';
import tw from 'twrnc';
import {DarkGray, StarYellow} from '../../styles/color';

const CompAlarm = ({mode = 'light'}: {mode?: 'light' | 'dark'}) => {
  return (
    <View style={tw`flex-row p-1`}>
      <CompImage
        width={6}
        height={6}
        color={mode === 'light' ? '#fff' : DarkGray}
        src={require('../../../static/images/noti.png')}
      />
      <View
        style={tw`absolute right-0 bg-[${StarYellow}] rounded-full w-2 h-2`}
      />
    </View>
  );
};

export default CompAlarm;
