import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { DefaultHomeScreen } from '../scenes/default/home.component';

const Stack = createStackNavigator();

export const DefaultNavigator = (): React.ReactElement => (
  <Stack.Navigator headerMode='none'>
    <Stack.Screen name='Feed' component={DefaultHomeScreen}/>
  </Stack.Navigator>
);
