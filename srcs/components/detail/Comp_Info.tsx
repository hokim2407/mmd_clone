import React from 'react';
import {View, Text, TouchableOpacity, StyleProp, ViewStyle} from 'react-native';
import tw from 'twrnc';
import {DarkGray} from '../../styles/color';
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
    <View style={[tw`bg-white p-2 `, style]}>
      {showBorder && <View style={tw`mb-2 border-t border-[${DarkGray}]`} />}
      <View style={tw`flex-row justify-between`}>
        <Text>{title}</Text>
        <TouchableOpacity
          style={tw`border border-[${DarkGray}] p-2`}
          onPress={button.onClick}>
          <Text>{button.content}</Text>
        </TouchableOpacity>
      </View>
      {children}
    </View>
  );
};

export default CompInfo;
