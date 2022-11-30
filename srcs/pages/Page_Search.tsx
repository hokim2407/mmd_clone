import React, {useState} from 'react';
import {
  View,
  ScrollView,
  Text,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import tw from 'twrnc';
import {MainColor, LightGray} from '../styles/color';
import CompSearch from '../components/common/Comp_Search';
import {CommonActions} from '@react-navigation/native';
import {coords} from '../../dump';

const PageSearch = ({route, navigation}: NavProps) => {
  const [keyword, setKeyword] = useState<string>(
    route.params?.keyword ? route.params.keyword : '',
  );

  const onSearch = (key: string) => {
    setKeyword(key);
  };

  const onPress = (item: {
    keword: string;
    longitude: number;
    latitude: number;
  }) => {
    return () => {
      let routes = navigation.getState()?.routes;
      routes.pop();
      if (routes.length > 1 && routes[routes.length - 1].name === 'Map')
        routes.pop();

      routes.push({
        name: 'Map',
        params: {
          keyword: item.keword,
          location: {latitude: item.latitude, longitude: item.longitude},
        },
      });

      navigation.dispatch(
        CommonActions.reset({
          index: routes.length,
          routes,
        }),
      );
    };
  };

  return (
    <View style={tw`flex-1 bg-[#dfdfdf]`}>
      <StatusBar hidden={false} backgroundColor={MainColor} />
      {/* 검색창 */}
      <View style={tw`h-[15]`}>
        <CompSearch keyword={keyword} onSearch={onSearch} />
      </View>

      {/* 검색결과 */}
      <ScrollView
        style={tw`bg-white flex-1 grow`}
        contentContainerStyle={tw` justify-center`}>
        {coords.map((item, idx) => (
          <TouchableOpacity
            key={idx}
            onPress={onPress(item)}
            style={tw`h-[15] justify-center border border-[${LightGray}] mx-2`}>
            <Text>{item.keword}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default PageSearch;
