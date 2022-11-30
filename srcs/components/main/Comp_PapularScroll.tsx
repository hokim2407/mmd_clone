import React, {useEffect, useState} from 'react';
import {View, Dimensions, Text} from 'react-native';
import tw from 'twrnc';
import {LightGray} from '../../styles/color';
import CompInfoCard from '../common/Comp_InfoCard';
import CompCardHScroll from '../common/Comp_CardHScroll';
import {hospitals} from '../../../dump';

const {width: SCREEN_WIDTH} = Dimensions.get('window');

const CompPapular = (props: {navigation: NavPropsNavigation}) => {
  const [hospitalList, setHospitals] = useState<Hospital[]>();
  useEffect(() => {
    setHospitals(hospitals);
  }, []);

  return (
    <CompCardHScroll
      chlidWidth={SCREEN_WIDTH - 48}
      title={'지금 많이 찾는 병원💎'}>
      {hospitalList &&
        hospitalList.length > 0 &&
        hospitalList.map((hospital, idx) => {
          return (
            <View key={idx} style={tw`w-[${SCREEN_WIDTH - 48}px] mr-[8px]`}>
              <CompInfoCard
                data={hospital}
                navigation={props.navigation}
                showReviewSum={false}
                showTag={false}
                showDist={false}>
                <View style={tw`bg-[${LightGray}] rounded p-4`}>
                  <Text style={tw`h-[18]`}>{hospital.reviewContent}</Text>
                </View>
              </CompInfoCard>
            </View>
          );
        })}
    </CompCardHScroll>
  );
};

export default CompPapular;
