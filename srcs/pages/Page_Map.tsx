import React, {useState, useEffect} from 'react';
import {View, StatusBar} from 'react-native';
import tw from 'twrnc';
import {MainColor} from '../styles/color';
import CompSearchBtn from '../components/common/Comp_SearchBtn';
import CompMapItems from '../components/map/Comp_MapItems';
import MapView, {Marker} from 'react-native-maps';

import GeoLocation from '../utils/Util_GeoLocation';

const PageMap = ({route, navigation}: NavProps) => {
  const [keyword, setKeyword] = useState<string>(route.params.keyword);
  const [targetRegion, setTargetRegion] = useState<Region | undefined>(
    undefined,
  );
  const [region, setRegion] = useState<Region | undefined>(undefined);
  const geolocation = new GeoLocation();
  const defaultDelta = 0.015;

  useEffect(() => {
    if (route.params.location) {
      const newRegion = {
        latitude: route.params.location.latitude,
        longitude: route.params.location.longitude,
        latitudeDelta: defaultDelta,
        longitudeDelta: defaultDelta,
      };
      setRegion(newRegion);
      setTargetRegion(newRegion);
      return;
    }

    geolocation.GetLocation(
      (latitude, longitude) => {
        const newRegion = {
          latitude,
          longitude,
          latitudeDelta: defaultDelta,
          longitudeDelta: defaultDelta,
        };
        setRegion(newRegion);
        setTargetRegion(newRegion);
      },
      e => {
        console.log(e);
      },
    );
  }, []);

  const onRegionChange = (newRegion: Region) => {
    console.log(newRegion);
  };

  return (
    <View style={tw`flex-1 bg-[#dfdfdf]`}>
      <StatusBar hidden={false} backgroundColor={MainColor} />
      <View style={tw`h-[15]`}>
        <CompSearchBtn keyword={keyword} navigation={navigation} />
      </View>
      {targetRegion && (
        <MapView
          initialRegion={targetRegion}
          region={region}
          onRegionChange={onRegionChange}
          style={tw`flex-1`}>
          <Marker
            coordinate={{
              latitude: targetRegion.latitude,
              longitude: targetRegion.longitude,
            }}
          />
        </MapView>
      )}
      <CompMapItems navigation={navigation} />
    </View>
  );
};

export default PageMap;
