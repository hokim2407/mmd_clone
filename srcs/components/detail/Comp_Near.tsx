import React, {useEffect, useState} from 'react';
import {View, Dimensions, Text} from 'react-native';
import tw from 'twrnc';
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
    <View style={tw`bg-white p-4`}>
      <Text style={tw`text-black pb-4`}>주변 다른 병원</Text>
      <CompHScroll chlidWidth={SCREEN_WIDTH - 60}>
        {hospitalList &&
          hospitalList.length > 0 &&
          hospitalList.map((hospital, idx) => {
            return (
              <View key={idx} style={tw`w-[${SCREEN_WIDTH - 60}px] mr-2`}>
                <CompInfoCard
                  data={hospital}
                  navigation={props.navigation}
                  showTag={false}
                  showImg={false}
                  showDist={false}
                />
              </View>
            );
          })}
      </CompHScroll>
    </View>
  );
};

export default CompNear;
