import React from 'react';
import PageLanding from './srcs/pages/Page_Landing';
import PageMain from './srcs/pages/Page_Main';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const App = () => {
  const Stack = createNativeStackNavigator<NavParamList>();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Landing"
          options={{headerShown: false}}
          component={PageLanding}
        />
        <Stack.Screen name="Main" component={PageMain} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
