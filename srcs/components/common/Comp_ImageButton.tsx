import React from 'react';
import {
  Image,
  TouchableOpacity,
  StyleProp,
  ViewStyle,
  ImageSourcePropType,
} from 'react-native';
import tw from 'twrnc';
const CompInfoCard = ({
  style,
  onPress,
  src,
}: {
  children?: React.ReactNode;
  style: StyleProp<ViewStyle>;
  onPress: () => void;
  src: ImageSourcePropType;
}) => {
  return (
    <TouchableOpacity style={style} onPress={onPress}>
      <Image style={[tw`flex-1`, {resizeMode: 'contain'}]} source={src} />
    </TouchableOpacity>
  );
};

export default CompInfoCard;
