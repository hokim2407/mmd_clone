import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import tw from 'twrnc';
import {MainColor, LightGray} from '../../styles/color';

const CompFooter = () => {
  const infos = [
    {
      name: '이용약관',
      link: '',
    },
    {
      name: '개인정보취급방침',
      link: '',
    },
    {
      name: '위치기반서비스 이용약관',
      link: '',
    },
  ];
  return (
    <View style={tw`border-t border-black bg-[${LightGray}] p-4 mt-8`}>
      <Text style={tw`text-[${MainColor}] font-bold py-2`}>MoDooDoc Inc.</Text>
      <Text style={tw`text-xs`}>
        사업자 : 모두닥 주식회사 | 대표자: 안무혁 | 사업자등록번호 :
        561-81-00765|
        {'\n'}통신판매업신고 : 제2018-서울관악-0516호
        {'\n'}주소 : 서울 강남구 테헤란로2길 27 1204호
        {'\n'}메일 : info@modoodoc.com
        {'\n'}Copyright MoDooDoc Inc. All rights reserved
        {'\n'}자사의 사이트의 무단적인 수집을 엄격히 금합니다.
      </Text>
      <View style={tw`flex-row justify-between p-2`}>
        {infos.map((info, idx) => {
          return (
            <React.Fragment key={idx}>
              <TouchableOpacity style={tw`flex-row justify-between`}>
                <Text style={tw`text-xs text-center font-bold`}>
                  {info.name}
                </Text>
              </TouchableOpacity>
              {infos.length - 1 > idx && (
                <Text style={tw`text-xs text-center font-bold`}>|</Text>
              )}
            </React.Fragment>
          );
        })}
      </View>
    </View>
  );
};

export default CompFooter;
