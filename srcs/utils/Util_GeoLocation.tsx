import {PermissionsAndroid} from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import {GOOGLE_API_KEY} from '@env';

class GeoLocation {
  constructor() {}

  GetLocation = async (
    onSuccess: (latitude: number, longitude: number) => void,
    onError: (e: Geolocation.GeoError) => void,
  ) => {
    if ((await this.CheckPermission()) === false) {
      return false;
    }
    const options: Geolocation.GeoOptions = {
      accuracy: {
        android: 'high',
        ios: 'best',
      },
      enableHighAccuracy: true,
      timeout: 15000,
      maximumAge: 10000,
    };

    Geolocation.getCurrentPosition(
      position => {
        const {coords} = position;
        onSuccess(coords.latitude, coords.longitude);
      },
      onError,
      options,
    );
    return true;
  };

  CheckPermission = async () => {
    try {
      const result = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      );

      if (result === 'granted') {
        return true;
      }
    } catch (e) {
      console.error(e);
    }
    return false;
  };

  SearchLocation = async (key: string, region: Region | undefined) => {
    if (region) {
      const boundLT = [
        (region.latitude - region.latitudeDelta).toFixed(2),
        (region.longitude + region.longitudeDelta).toFixed(2),
      ].join(',');
      const boundRD = [
        (region.latitude + region.latitudeDelta).toFixed(2),
        (region.longitude - region.longitudeDelta).toFixed(2),
      ].join(',');
      const googleResult = await fetch(
        `https://maps.googleapis.com/maps/api/geocode/json?language=ko&address=${key}&bounds=${boundLT}%7C${boundRD}&key=${GOOGLE_API_KEY}`,
      );
      const {results} = await googleResult.json();
      const {lat, lng} = results[0].geometry.location;

      return {latitude: lat, longitude: lng};
    }
  };
}

export default GeoLocation;
