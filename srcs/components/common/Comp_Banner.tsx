import React, {useState, useRef} from 'react';
import {
  View,
  ScrollView,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';
import tw from 'twrnc';

import {banners} from '../../../dump';

const {width: SCREEN_WIDTH} = Dimensions.get('window');
const CompBanner = () => {
  const [banIdx, setBanIdx] = useState(0);
  const [itemWidth, setItemWidth] = useState(0);
  const scrollRef = useRef<ScrollView | null>(null);

  const onScroll = (event: OnScrollEvent) => {
    setItemWidth(event.nativeEvent.layoutMeasurement.width);
    const width = event.nativeEvent.layoutMeasurement.width;
    setBanIdx(Math.round(event.nativeEvent.contentOffset.x / width));
  };
  const startAnimation = (idx: number) => {
    return () => {
      setBanIdx(idx);
      scrollRef?.current?.scrollTo({
        x: Math.round(itemWidth * idx),
        y: 0,
        animated: true,
      });
    };
  };

  return (
    <View style={tw`flex-1`}>
      <ScrollView
        ref={scrollRef}
        onMomentumScrollEnd={onScroll}
        contentContainerStyle={tw`grow`}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}>
        {banners &&
          banners.length > 0 &&
          banners.map((banner, idx) => (
            <Image
              key={idx}
              source={{uri: banner.thumbnail}}
              resizeMode="cover"
              style={[tw`flex-1`, {width: SCREEN_WIDTH}]}
            />
          ))}
      </ScrollView>
      <View
        style={[
          tw`absolute flex-row justify-center w-full bottom-[10]`,
          {width: SCREEN_WIDTH},
        ]}>
        {banners &&
          banners.length > 0 &&
          banners.map((_, idx) => (
            <TouchableOpacity key={idx} onPress={startAnimation(idx)}>
              <View
                style={tw`w-[3] h-[3] rounded-[1.5] mr-1 bg-${
                  banIdx === idx ? 'white' : '[#ffffffa0]'
                }`}
              />
            </TouchableOpacity>
          ))}
      </View>
    </View>
  );
};

export default CompBanner;
