import React, {useRef} from 'react';
import {Dimensions, Animated} from 'react-native';
import tw from 'twrnc';
import {
  BottomDrawerResponder,
  DrawerState,
} from '../../utils/Util_BottomDrawerResponder';

const {height} = Dimensions.get('window');
// BottomDrawer 구현
const BottomDrawer = ({
  children,
  margin = 0,
}: {
  children: React.ReactNode;
  margin?: number;
}) => {
  const y = useRef(new Animated.Value(DrawerState.Closed)).current;
  const bottomDrawerResponder = new BottomDrawerResponder();
  const panResponder = bottomDrawerResponder.createBottomDrawerResponder(y);

  return (
    <Animated.View
      {...panResponder.panHandlers}
      style={[
        tw`absolute w-full bg-white rounded-xl`,
        {
          height: height,
          bottom: -height + margin,
          transform: [{translateY: y}],
        },
      ]}>
      {children}
    </Animated.View>
  );
};

export default BottomDrawer;
