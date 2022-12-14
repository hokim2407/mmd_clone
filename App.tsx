import React from 'react';
import PageLanding from './srcs/pages/Page_Landing';
import PageMain from './srcs/pages/Page_Main';
import PageSearch from './srcs/pages/Page_Search';
import PageMap from './srcs/pages/Page_Map';
import PageDetail from './srcs/pages/Page_Detail';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import tw from 'twrnc';
import CompAlarm from './srcs/components/common/Comp_Alarm';

import {store} from './srcs/context/store';
import {Provider} from 'react-redux';

const App = () => {
  const Stack = createNativeStackNavigator<NavParamList>();
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Landing"
            options={{headerShown: false}}
            component={PageLanding}
          />
          <Stack.Screen
            name="Main"
            component={PageMain}
            options={{
              // headerTitle: props => <LogoTitle {...props} />,
              title: 'ㅁㄷㄷ',
              headerStyle: tw`bg-[#4c1192]`,
              headerTintColor: '#fff',
              headerTitleAlign: 'center',
              headerTitleStyle: tw`w-full text-white font-bold`,

              headerRight: () => <CompAlarm />,
            }}
          />
          <Stack.Screen
            name="Search"
            options={{headerShown: false}}
            component={PageSearch}
          />
          <Stack.Screen
            name="Map"
            options={{headerShown: false}}
            component={PageMap}
          />
          <Stack.Screen name="Detail" component={PageDetail} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
