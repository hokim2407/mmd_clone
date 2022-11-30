import React from 'react';
import {View, Text} from 'react-native';
import tw from 'twrnc';
import {DarkGray, Gray, LightGray, MainColor} from '../../styles/color';
import CompImage from './Comp_Image';
import CompStarRate from './Comp_StarRate';
const CompStats = ({
  data,
  inorder = true,
}: {
  data: Stats;
  inorder?: boolean;
}) => {
  const images = {
    like: require('../../../static/images/imo_smile.png'),
    hate: require('../../../static/images/imo_hate.png'),
  };
  const imoView = (like: boolean, cnt: number) => {
    return (
      <View style={tw`flex-row flex-1 justify-center`}>
        <CompImage
          src={like ? images.like : images.hate}
          color={like ? MainColor : DarkGray}
          width={5}
          height={5}
        />
        <Text style={tw`text-[${like ? MainColor : DarkGray}] ml-1`}>
          {cnt}
        </Text>
      </View>
    );
  };

  return (
    <View style={tw`flex-1 flex-row${inorder ? '' : '-reverse'}`}>
      {/* 평균 */}
      <View style={tw`flex-1 bg-[${LightGray}] border border-[${Gray}]`}>
        <View style={tw`flex justify-center items-center`}>
          <Text style={tw`text-black text-xs pt-6`}>별점 평균</Text>
          <View style={tw`flex-row  p-6 items-end`}>
            <Text style={tw`font-bold font-bold text-3xl text-black `}>
              {data.avg}
            </Text>
            <Text style={tw`p-1 `}>/10</Text>
          </View>
        </View>
        <View style={tw`flex-row  p-3 border-t border-[${Gray}]`}>
          {imoView(true, data.like)}
          <Text>|</Text>
          {imoView(false, data.hate)}
        </View>
      </View>

      {/* 평균 끝 */}
      {/* 세부 평가*/}
      <View style={tw`flex-1 p-4  border border-[${Gray}] justify-center`}>
        {data.stats.map((stat, idx) => {
          return (
            <View
              key={idx}
              style={tw`p-1 flex-row justify-between border-b border-[${LightGray}] `}>
              <Text style={tw`text-black text-xs`}>{stat.name}</Text>
              <CompStarRate rate={stat.star / 2} fullRate={5} />
            </View>
          );
        })}
      </View>
      {/* 세부 평가 끝*/}
    </View>
  );
};

export default CompStats;
