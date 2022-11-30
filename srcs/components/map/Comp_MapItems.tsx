import React, {useState} from 'react';
import {Text, View, ScrollView} from 'react-native';
import tw from 'twrnc';
import {DarkGray} from '../../styles/color';
import CompInfoCard from '../common/Comp_InfoCard';
import CompBottomDrawer from '../common/Comp_BottomDrawer';
import {DrawerState} from '../../utils/Util_BottomDrawerResponder';
import CheckBox from '@react-native-community/checkbox';
import {filters, hospitals} from '../../../dump';
// BottomDrawer 구현
const CompMapItems = ({navigation}: {navigation?: NavPropsNavigation}) => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);

  return (
    <CompBottomDrawer margin={65}>
      <View
        style={[
          tw`rounded-t-xl p-2 bg-white`,
          {
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 4,
            },
            shadowOpacity: 0.5,
            elevation: 2,
          },
        ]}>
        {/* 핸들 */}
        <View style={tw`items-center my-1`}>
          <View style={tw`w-10 h-[1.2] rounded bg-[${DarkGray}]`} />
        </View>

        {/* 필터 */}
        <View style={tw`items-center flex-row`}>
          {filters &&
            filters.length > 0 &&
            filters.map((filter, idx) => {
              return (
                <Text
                  key={idx}
                  style={tw`p-2 border border-[${DarkGray}] rounded-xl mr-2`}>
                  {filter}
                </Text>
              );
            })}
        </View>
        {/* 필터 이벤트&정렬 */}
        <View style={tw`flex-row justify-start`}>
          <View style={tw`flex-row flex-1 justify-start items-center`}>
            <CheckBox
              disabled={false}
              value={toggleCheckBox}
              onValueChange={newValue => setToggleCheckBox(newValue)}
            />
            <Text>이벤트 병원</Text>
          </View>
          <View style={tw`flex-row flex-1 justify-end items-center`}>
            <Text style={tw`mr-2`}>V</Text>
            <Text>만족순</Text>
          </View>
        </View>
      </View>

      {/* 목록 */}
      <View style={{height: DrawerState.Open - 35}}>
        <ScrollView style={[tw`p-2 flex-1`]} contentContainerStyle={tw`grow`}>
          {hospitals.map((hospital, idx) => (
            <View key={idx}>
              <CompInfoCard
                border={'b'}
                data={hospital}
                navigation={navigation}
                showRank={true}
                startFullRate={5}
              />
            </View>
          ))}
        </ScrollView>
      </View>
    </CompBottomDrawer>
  );
};

export default CompMapItems;
