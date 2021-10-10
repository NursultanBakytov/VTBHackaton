import React from 'react';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './Screens/Home';
import Map from './Screens/Map';

const App = () => {
  const Stack = createStackNavigator();

  const MyTheme = {
    ...DefaultTheme,

    colors: {
      ...DefaultTheme.colors,
      background: '#3A83F1',
    },
  };
  return (
    <NavigationContainer theme={MyTheme}>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            header: () => null,
          }}
        />
        <Stack.Screen
          name="Map"
          component={Map}
          options={{
            header: () => null,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
