import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Home from './Home';
import Broker from './Broker';
import Market from './Market';
import Faq from './Faq';
import FirstHome from './FirstHome';

const Component = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator initialRouteName="FirstHome">
      <Stack.Screen
        name="FirstHome"
        component={FirstHome}
        options={{
          header: () => null,
        }}
      />
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          header: () => null,
        }}
      />
      <Stack.Screen
        name="Broker"
        component={Broker}
        options={{
          header: () => null,
        }}
      />
      <Stack.Screen
        name="Market"
        component={Market}
        options={{
          header: () => null,
        }}
      />
      <Stack.Screen
        name="Faq"
        component={Faq}
        options={{
          header: () => null,
        }}
      />
    </Stack.Navigator>
  );
};

export default Component;
