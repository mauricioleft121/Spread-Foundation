/* eslint-disable prettier/prettier */
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './pages/HomeScreen/Index'; //home
import Options from './pages/Options/Index'; // opções
import SapataQuadrada from './pages/SapataQuadrada/Index'; // SapataQuadrada

const Stack = createStackNavigator();

const horizontalAnimation = {
  cardStyleInterpolator: ({ current, layouts }) => {
    return {
      cardStyle: {
        transform: [
          {
            translateX: current.progress.interpolate({
              inputRange: [0, 1],
              outputRange: [layouts.screen.width, 0],
            }),
          },
        ],
      },
    };
  },
};

function Routes(navigation) {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{
            headerShown: false,
            ...horizontalAnimation,
          }}
        />
        <Stack.Screen
          name="Options"
          component={Options}
          options={{
            ...horizontalAnimation,
            headerTransparent: true,
            headerTitle: null,
            headerTintColor:'white'
          }}
        />
          <Stack.Screen
          name="SapataQuadrada"
          component={SapataQuadrada}
          options={{
            ...horizontalAnimation,
            headerTransparent: true,
            headerTitle: null,
            headerTintColor:'white'
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
