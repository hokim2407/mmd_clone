import React from 'react';
import {View, Text, TouchableOpacity, StyleProp, ViewStyle} from 'react-native';
import tw from 'twrnc';
import {Gray} from '../../styles/color';
const CompInfo = ({
  children,
  title,
  button,
  style,
  showBorder = true,
}: {
  showBorder?: boolean;
  children: React.ReactNode;
  title: string;
  style?: StyleProp<ViewStyle>;
  button: {content: string; onClick?: () => void};
}) => {
  return (
    <View style={[tw`bg-white p-4 `, style]}>
      {showBorder && <View style={tw`mb-2 border-t border-[${Gray}]`} />}
      <View style={tw`flex-row justify-between items-center mb-2`}>
        <Text style={tw`text-black`}>{title}</Text>
        <TouchableOpacity
          style={tw`text-xs border border-[${Gray}] rounded p-2`}
          onPress={button.onClick}>
          <Text style={tw`text-xs `}>{button.content}</Text>
        </TouchableOpacity>
      </View>
      {children}
    </View>
  );
};

export default CompInfo;
