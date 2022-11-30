import React, {useState, useEffect} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import tw from 'twrnc';
import {LightGray, DarkGray, MainColor, Gray} from '../../styles/color';
import MapView, {Marker} from 'react-native-maps';
import CompInfo from './Comp_Info';
import CompStarRate from '../common/Comp_StarRate';
import IconText from '../common/Comp_IconText';
import CompHospitalTime from './Comp_HospitalTime';
import CompImage from '../common/Comp_Image';

const CompHospital = ({hospital}: {hospital: Hospital}) => {
  const [curTab, setCurTab] = useState(0);
  const [curHsptTime, setCurHsptTime] = useState<HospitalTimeInfo>();
  const [showTime, setShowTime] = useState(false);
  const btns = ['전화하기', '홈페이지', '찜하기', '리뷰작성'];
  const tabs = ['병원 정보', '의사', '리뷰'];

  useEffect(() => {
    const week = ['일', '월', '화', '수', '목', '금', '토'];
    const todayWeek = week[new Date().getDay()];
    setCurHsptTime(hospital.times.filter(time => time.day == todayWeek)[0]);
  }, []);

  return (
    <View style={tw`flex-1 bg-[${Gray}]`}>
      <Image
        source={{uri: hospital.thumbnail}}
        resizeMode="cover"
        style={[tw`h-50 w-full`]}
      />
      {/* 정보 */}
      <View style={tw`bg-white p-2`}>
        <Text style={tw`font-bold text-lg text-black`}>{hospital.name}</Text>
        <View style={tw`flex-row items-center`}>
          <CompStarRate
            rate={hospital.starStats.avg}
            fullRate={5}
            showRate={true}
          />
          <Text> | </Text>
          <Text style={tw`text-[${MainColor}]`}>리뷰 {hospital.review}</Text>
        </View>
        <Text>{hospital.addr}</Text>

        <View
          style={tw`flex-row mt-4 bg-white justify-between items-center border-t-2 border-[${LightGray}]`}>
          {btns.map((btn, idx) => (
            <IconText
              key={idx}
              showBorder={false}
              iconSize={'100%'}
              onPress={() => {}}
              title={btn}
              src={require('../../../static/images/heart_full.png')}
              width={'20%'}
            />
          ))}
        </View>
      </View>

      {/* 리뷰 요약 */}
      <View style={tw`flex-row p-4  bg-[#dcd0e6] items-center mt-2`}>
        {hospital.cates.map((cate, idx) => {
          return (
            <View
              style={tw`py-1 px-2 text-xs mr-2 bg-white rounded-full flex-row shadow`}
              key={idx}>
              <Text style={tw`mr-2`}>{cate.name}</Text>
              <Text style={tw`font-bold`}>{cate.cnt}</Text>
            </View>
          );
        })}
      </View>

      {/* 탭 */}
      <View
        style={tw`flex-row h-15 bg-white items-center justify-center mt-2  border-b border-[${Gray}]`}>
        {tabs.map((tab, idx) => (
          <TouchableOpacity
            key={idx}
            style={tw`flex-1 `}
            onPress={() => {
              setCurTab(idx);
            }}>
            <Text
              style={[
                tw`text-center h-full ${
                  idx == curTab
                    ? `font-bold text-[${MainColor}] border-b-2 border-[${MainColor}]`
                    : ''
                }`,
                {textAlignVertical: 'center'},
              ]}>
              {tab}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* 시간 */}
      <CompInfo
        showBorder={false}
        title={'진료시간'}
        button={{content: '수정요청'}}>
        {curHsptTime && (
          <>
            <View style={tw`flex-row items-center justify-between`}>
              <CompHospitalTime
                title={curHsptTime.day}
                time={`${curHsptTime.open} ~ ${curHsptTime.close}`}
              />
              <TouchableOpacity
                style={tw`flex-1`}
                onPress={() => {
                  setShowTime(prev => !prev);
                }}>
                <Text
                  style={[
                    tw`text-center`,
                    {rotate: showTime ? '180deg' : '0'},
                  ]}>
                  v
                </Text>
              </TouchableOpacity>
            </View>
            <CompHospitalTime title={'점심시간'} time={curHsptTime.lunch} />
          </>
        )}
        <View
          style={tw`bg-[${LightGray}] rounded p-3 my-2 ${
            showTime ? '' : 'hidden'
          }`}>
          {hospital.times.map((time, idx) => (
            <View
              key={idx}
              style={tw`flex-row items-center justify-between p-1`}>
              <Text style={tw`text-xs text-black flex-1`}>{time.day}</Text>
              <Text style={tw`text-xs text-black flex-4`}>
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
        <View style={tw`flex-row items-center justify-start pb-2`}>
          <CompImage
            width={4}
            height={4}
            color={DarkGray}
            src={require('../../../static/images/location-pointer.png')}
          />
          <Text style={tw`ml-1`}>{hospital.addr}</Text>
        </View>
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
