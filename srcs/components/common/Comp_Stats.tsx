import React from 'react';
import {View, Text} from 'react-native';
import tw from 'twrnc';
const CompStats = ({
  data,
  inorder = true,
}: {
  data: Stats;
  inorder?: boolean;
}) => {
  return (
    <View style={tw`flex-1 flex-row${inorder ? '' : '-reverse'}`}>
      <View style={tw`flex-1`}>
        <Text>별점 평균</Text>
        <View style={tw`flex-row`}>
          <Text style={tw`font-bold`}>{data.avg}</Text>
          <Text>/10</Text>
        </View>
        <View style={tw`flex-row`}>
          <Text>{data.like}</Text>
          <Text>{data.hate}</Text>
        </View>
      </View>

      <View style={tw`flex-1`}>
        {data.stats.map((stat, idx) => {
          return (
            <View key={idx} style={tw`flex-row`}>
              <Text>{stat.name}</Text>
              <Text>{stat.star}</Text>
            </View>
          );
        })}
      </View>
    </View>
  );
};

export default CompStats;
