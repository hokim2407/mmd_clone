import React from 'react';
import {View, Image, Text} from 'react-native';
import tw from 'twrnc';
import CompInfoCard from '../common/Comp_InfoCard';
import {doctors} from '../../../dump';
const CompDoctor = () => {
  return (
    <View style={tw`flex-1 bg-white p-4 `}>
      <Text style={tw`text-black`}>의사 {doctors.length}</Text>
      {doctors.map((doctor, idx) => (
        <View key={idx} style={tw`flex-1 flex-row py-2 items-center`}>
          <Image
            source={{uri: doctor.thumbnail}}
            resizeMode="contain"
            style={[tw`flex-1  rounded-full aspect-square`]}
          />
          <View style={tw`flex-4 pl-2`}>
            <CompInfoCard
              data={doctor}
              showTag={false}
              showImg={false}
              border={null}
            />
          </View>
        </View>
      ))}
    </View>
  );
};

export default CompDoctor;
