import React from 'react';
import {View, ScrollView, StatusBar} from 'react-native';
import tw from 'twrnc';
import {MainColor} from '../styles/color';
import CompSearchBtn from '../components/common/Comp_SearchBtn';
import CompBanner from '../components/common/Comp_Banner';
import CompAD from '../components/common/Comp_AD';
import CompFooter from '../components/common/Comp_Footer';
import CompCategory from '../components/main/Comp_Category';
import CompPapular from '../components/main/Comp_PapularScroll';
import CompReview from '../components/main/Comp_ReviewScroll';

const PageMain = ({_, navigation}: NavProps) => {
  return (
    <View style={tw`flex-1 bg-[#fff]`}>
      <StatusBar hidden={false} backgroundColor={MainColor} />
      <ScrollView contentContainerStyle={tw`grow`}>
        {/* 배너 */}
        <View style={tw`h-[60]`}>
          <CompBanner />
        </View>

        {/* 카테고리 */}
        <View style={tw`pt-[35]`}>
          <CompCategory navigation={navigation} />
        </View>

        {/* 검색 */}
        <View style={tw`p-2 absolute w-full top-[52]`}>
          <CompSearchBtn keyword="" navigation={navigation} />
        </View>

        {/* 인기 */}
        <View style={tw`pt-[35]`}>
          <CompPapular navigation={navigation} />
        </View>

        {/* 리뷰 */}
        <View>
          <CompReview navigation={navigation} />
        </View>

        {/* 광고 */}
        <View style={tw`py-8`}>
          <CompAD />
        </View>

        {/* 푸터 */}
        <View>
          <CompFooter />
        </View>
      </ScrollView>
    </View>
  );
};

export default PageMain;
