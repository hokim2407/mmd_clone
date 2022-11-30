import React, {useEffect, useState} from 'react';
import {View, Dimensions, Text} from 'react-native';
import tw from 'twrnc';
import {LightGray} from '../../styles/color';

import CompHScroll from '../common/Comp_HScroll';
import CompInfoCard from '../common/Comp_InfoCard';
import {hospitals} from '../../../dump';

const {width: SCREEN_WIDTH} = Dimensions.get('window');
const CompNear = (props: {navigation: NavPropsNavigation}) => {
  const [hospitalList, setHospitals] = useState<Hospital[]>();
  useEffect(() => {
    setHospitals(hospitals);
  }, []);

  return (
    <View style={tw`bg-white p-2`}>
      <Text>지금 주변 다른 내과</Text>
      <CompHScroll chlidWidth={SCREEN_WIDTH - 60}>
        {hospitalList &&
          hospitalList.length > 0 &&
          hospitalList.map((hospital, idx) => {
            return (
              <View key={idx} style={tw`w-80`}>
                <CompInfoCard
                  data={hospital}
                  navigation={props.navigation}
                  showTag={false}
                  showImg={false}
                  showDist={false}>
                  <View style={tw`bg-[${LightGray}] p-2 m-2`}>
                    <Text>{hospital.reviewContent}</Text>
                  </View>
                </CompInfoCard>
              </View>
            );
          })}
      </CompHScroll>
    </View>
  );
};

export default CompNear;
