/* eslint-disable prettier/prettier */
import React from 'react';
import { LogBox } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './pages/HomeScreen/Index'; //home
import Options from './pages/Options/Index'; // opções
import SapataQuadrada from './pages/SapataQuadrada/Index'; // SapataQuadrada
import SapataRetangular from './pages/SapataRetangular/Index'; // Sapata Retangular

const Stack = createNativeStackNavigator();
LogBox.ignoreAllLogs();


function Routes(navigation) {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{
            animation: 'slide_from_right',
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Options"
          component={Options}
          options={{
            animation: 'slide_from_right',
            headerTransparent: true,
            headerTitle: '',
            headerTintColor:'white',
          }}
        />
          <Stack.Screen
          name="SapataQuadrada"
          component={SapataQuadrada}
          options={{
            animation: 'slide_from_right',
            headerTransparent: true,
            headerTitle: '',
            headerTintColor:'white',
          }}
        />
          <Stack.Screen
          name="SapataRetangular"
          component={SapataRetangular}
          options={{
            animation: 'slide_from_right',
            headerTransparent: true,
            headerTitle: '',
            headerTintColor:'white',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
