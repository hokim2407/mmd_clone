import React, {useEffect, useState} from 'react';
import {View, Dimensions, Text, TouchableOpacity} from 'react-native';
import tw from 'twrnc';
import {LightGray, MainColor} from '../../styles/color';

import {hospitals} from '../../../dump';
import CompCardHScroll from '../common/Comp_CardHScroll';
import CompStarRate from '../common/Comp_StarRate';

import {useAppDispatch} from '../../context/store';
import {setHospital} from '../../context/hospitalSlice';

const {width: SCREEN_WIDTH} = Dimensions.get('window');
const CompReview = (props: {navigation: NavPropsNavigation}) => {
  const [hospitalList, setHospitals] = useState<Hospital[]>();
  const dispatch = useAppDispatch();
  useEffect(() => {
    setHospitals(hospitals);
  }, []);

  const onPress = (hospital: Hospital) => {
    const showDetails = () => {
      dispatch(setHospital(hospital));
      props.navigation?.push('Detail');
    };
    return showDetails;
  };
  return (
    <CompCardHScroll chlidWidth={SCREEN_WIDTH - 48} title={'최근 리뷰'}>
      {hospitalList &&
        hospitalList.length > 0 &&
        hospitalList.map((hospital, idx) => {
          return (
            <TouchableOpacity
              onPress={onPress(hospital)}
              key={idx}
              style={[
                tw`bg-[${LightGray}] mr-2 p-4 rounded`,
                {width: SCREEN_WIDTH - 48},
              ]}>
              <View style={tw`flex-row justify-between`}>
                <Text style={tw`font-bold text-base text-black`}>
                  {hospital.name}
                </Text>
                <CompStarRate
                  rate={hospital.starStats.avg}
                  fullRate={1}
                  showRate={true}
                />
              </View>

              <Text style={tw`mt-2 h-[30]`}>{hospital.reviewContent}</Text>
              <View style={tw`flex-row justify-end`}>
                <Text style={tw`text-[${MainColor}]`}>
                  리뷰 {hospital.review}개 더보기
                </Text>
              </View>
            </TouchableOpacity>
          );
        })}
    </CompCardHScroll>
  );
};

export default CompReview;
