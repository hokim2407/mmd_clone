import React from 'react';
import {
  View,
  TouchableOpacity,
  Image,
  Text,
  ImageSourcePropType,
} from 'react-native';
import tw from 'twrnc';
import {DarkGray, LightGray} from '../../styles/color';

const CompIconText = ({
  onPress,
  src,
  title,
  width,
  showBorder = true,
  iconSize = '100%',
}: {
  onPress?: () => void;
  src: ImageSourcePropType;
  title: string;
  width: string | number;
  showBorder?: boolean;
  iconSize?: string | number;
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        tw`py-2 justify-between items-center aspect-square ${
          showBorder ? `border border-[${LightGray}]` : ''
        }`,
        {flexBasis: `${width}`},
      ]}>
      <View style={tw`w-full flex-3 p-2 justify-center items-center `}>
        <Image
          style={[
            tw` w-[${iconSize}] h-[${iconSize}] `,
            {resizeMode: 'contain', tintColor: DarkGray},
          ]}
          source={src}
        />
      </View>
      <Text
        style={[
          tw`text-xs pb-2 justify-center items-center`,
          {textAlignVertical: 'center'},
        ]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CompIconText;
