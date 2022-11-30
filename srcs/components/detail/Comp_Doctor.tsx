import React from 'react';
import {View, Image, Text} from 'react-native';
import tw from 'twrnc';
import CompInfoCard from '../common/Comp_InfoCard';
import {doctors} from '../../../dump';
const CompDoctor = ({hospital}: {hospital: Hospital}) => {
  return (
    <View style={tw`flex-1 bg-white p-2 `}>
      <Text>의사 {doctors.length}</Text>
      {doctors.map((doctor, idx) => (
        <View key={idx} style={tw`flex-1 flex-row  p-4`}>
          <Image
            source={{uri: doctor.thumbnail}}
            resizeMode="cover"
            style={[tw`flex-1`]}
          />
          <View style={tw`flex-2`}>
            <CompInfoCard data={doctor} showTag={false} showImg={false} />
          </View>
        </View>
      ))}
    </View>
  );
};

export default CompDoctor;
