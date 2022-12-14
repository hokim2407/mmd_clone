import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {DarkGray, LightGray} from '../../styles/color';

import CompStarRate from './Comp_StarRate';
import tw from 'twrnc';
import {useAppDispatch} from '../../context/store';
import {setHospital} from '../../context/hospitalSlice';

const CompInfoCard = ({
  children = undefined,
  data,
  navigation,
  showRank = false,
  showTag = true,
  showImg = true,
  showReviewSum = true,
  showDist = true,
  border = 'a',
  round = true,
  startFullRate = 1,
}: {
  children?: React.ReactNode;
  data: Hospital | Doctor;
  showRank?: boolean;
  showTag?: boolean;
  showImg?: boolean;
  showReviewSum?: boolean;
  showDist?: boolean;
  navigation?: NavPropsNavigation;
  border?: 'b' | 't' | 'l' | 'r' | 'a' | null;
  round?: boolean;
  startFullRate?: number;
}) => {
  const dispatch = useAppDispatch();

  const onPress = () => {
    if ('addr' in data) {
      dispatch(setHospital(data));
      navigation?.push('Detail');
    }
  };
  let borderStyle = '';
  if (border) {
    borderStyle =
      border == 'a'
        ? `border border-[${LightGray}]`
        : `border-${border} border-[${LightGray}]`;
  }

  const Rank = () => {
    if (showRank) {
      return (
        <View>
          <Text
            style={tw`w-4 text-xs text-center border border-[${DarkGray}] m-1 mt-8 px-2`}>
            1
          </Text>
        </View>
      );
    }
  };

  const Tag = () => {
    if (showTag) {
      return data.tags.map((tag, idx) => (
        <Text
          key={idx}
          style={tw`mr-1 bg-[${LightGray}] text-xs rounded-lg px-2 `}>
          {tag}
        </Text>
      ));
    }
  };

  const Dist = () => {
    if (showDist && 'addr' in data) {
      return (
        <Text>
          {data.addr} | {data.dist}
        </Text>
      );
    }
  };

  const Img = () => {
    if (showImg) {
      return (
        <Image
          source={{uri: data.thumbnail}}
          resizeMode="cover"
          style={[tw`w-[20%] h-[20%] mb-3 aspect-square`]}
        />
      );
    }
  };

  const ReviewSum = () => {
    if (showReviewSum) {
      return data.cates.map((cate, idx) => (
        <Text key={idx} style={tw`mr-2 bg-[#eeeeee] text-xs p-1 rounded`}>
          {cate.name} ({cate.cnt})
        </Text>
      ));
    }
  };

  return (
    <TouchableOpacity
      style={tw`flex-row p-2  ${round ? 'rounded' : ''} ${borderStyle}`}
      onPress={onPress}>
      {Rank()}
      <View style={tw`flex-1`}>
        <View style={tw`flex-row  justify-between`}>
          {/* 세로 정보 */}
          <View style={tw` p-2 flex-2`}>
            <View style={tw`flex-row`}>{Tag()}</View>
            {/* 이름 */}
            <Text style={tw`font-bold text-base text-black`}>{data.name}</Text>
            {/* 별점|리뷰 */}
            <View style={tw`flex-row  justify-start items-center`}>
              <CompStarRate
                rate={data.starStats.avg}
                fullRate={startFullRate}
                showRate={true}
              />
              <Text style={tw`p-1`}>| 리뷰 {data.review}</Text>
            </View>
            {Dist()}
          </View>
          {Img()}
        </View>
        {/* 카테고리리뷰 */}
        <View style={tw`flex-row p-2 pt-0`}>{ReviewSum()}</View>
        {children}
      </View>
    </TouchableOpacity>
  );
};

export default CompInfoCard;
