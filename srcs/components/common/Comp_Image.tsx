import React from 'react';
import {Image, ImageSourcePropType, View} from 'react-native';
import tw from 'twrnc';
const CompImage = ({
  width,
  height,
  color,
  src,
}: {
  width: string | number;
  height: string | number;
  color?: string;
  src: ImageSourcePropType;
}) => {
  return (
    <View style={tw`w-[${width}] h-[${height}] `}>
      <Image
        style={[
          tw`w-[${width}] h-[${height}] flex-1`,
          {resizeMode: 'cover', tintColor: color},
        ]}
        source={src}
      />
    </View>
  );
};

export default CompImage;
