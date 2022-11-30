import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import tw from 'twrnc';
import {LightGray, DarkGray} from '../../styles/color';
import MapView, {Marker} from 'react-native-maps';
import CompInfo from './Comp_Info';
const CompHospital = ({hospital}: {hospital: Hospital}) => {
  const tabs = ['병원 정보', '의사', '리뷰'];

  return (
    <View style={tw`flex-1 bg-[#dfdfdf]`}>
      <Image
        source={{uri: hospital.thumbnail}}
        resizeMode="cover"
        style={[tw`h-50 w-full`]}
      />
      {/* 정보 */}
      <View style={tw`bg-white p-2`}>
        <Text style={tw`font-bold text-xl`}>{hospital.name}</Text>
        <View style={tw`flex-row`}>
          <Text>별점 {hospital.starStats.avg}</Text>
          <Text> | </Text>
          <Text>리뷰 {hospital.review}</Text>
        </View>
        <Text>{hospital.addr}</Text>

        <View
          style={tw`flex-row h-20 bg-white items-center border-t-2 border-[${LightGray}]`}>
          <Text style={tw`flex-1 text-center`}>전화하기</Text>
          <Text style={tw`flex-1 text-center`}>홈페이지</Text>
          <Text style={tw`flex-1 text-center`}>찜하기</Text>
          <Text style={tw`flex-1 text-center`}>리뷰작성</Text>
        </View>
      </View>

      {/* 리뷰 요약 */}
      <View style={tw`flex-row h-20 bg-[#cbb1dd] items-center mt-2`}>
        {hospital.cates.map((cate, idx) => {
          return (
            <View style={tw`p-2 m-2 bg-white rounded flex-row`} key={idx}>
              <Text style={tw`mr-2`}>{cate.name}</Text>
              <Text style={tw`font-bold`}>{cate.cnt}</Text>
            </View>
          );
        })}
      </View>

      {/* 탭 */}
      <View
        style={tw`flex-row h-20 bg-white items-center justify-center mt-2  border-b border-[${DarkGray}]`}>
        {tabs.map((tab, idx) => (
          <TouchableOpacity key={idx} style={tw`flex-1 `}>
            <Text style={tw`text-center`}>{tab}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* 시간 */}
      <CompInfo
        showBorder={false}
        title={'진료시간'}
        button={{content: '수정요청'}}>
        <View style={tw`flex-row items-center justify-between`}>
          <Text style={tw`flex-1`}>월</Text>
          <Text style={tw`flex-3`}>09:00 ~ 18:00</Text>
          <TouchableOpacity style={tw`flex-1`}>
            <Text style={tw`text-center`}>v</Text>
          </TouchableOpacity>
        </View>
        <View style={tw`flex-row items-center justify-between`}>
          <Text style={tw`flex-1`}>점심</Text>
          <Text style={tw`flex-4`}>-</Text>
        </View>
        <View style={tw`bg-[${LightGray}] rounded p-2`}>
          {hospital.times.map((time, idx) => (
            <View key={idx} style={tw`flex-row items-center justify-between`}>
              <Text style={tw`flex-1`}>{time.day}</Text>
              <Text style={tw`flex-4`}>
                {time.open}-{time.close}
              </Text>
            </View>
          ))}
        </View>
        <Text style={tw`text-[${DarkGray}]`}>
          * 방문 전 진료시간을 확인하세요
        </Text>
      </CompInfo>

      {/* 위치 */}

      <CompInfo title={'위치'} button={{content: '수정요청'}}>
        <Text>{hospital.addr}</Text>
        <View style={tw`h-30 bg-[${DarkGray}]`}>
          <MapView
            initialRegion={{
              ...hospital.coord,
              latitudeDelta: 0.015,
              longitudeDelta: 0.015,
            }}
            style={tw`flex-1`}>
            <Marker coordinate={hospital.coord} />
          </MapView>
        </View>
      </CompInfo>

      {/* 시설정보 */}
      <CompInfo title={'시설정보'} button={{content: '알려주기'}}>
        <Text>아직 등록된 정보가 없어요</Text>
      </CompInfo>
    </View>
  );
};

export default CompHospital;
