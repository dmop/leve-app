import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { ProfileSettingsScreen } from '../scenes/profile/profile-settings.component';

const Stack = createStackNavigator();

export const ProfileNavigator = (): React.ReactElement => (
  <Stack.Navigator headerMode='none'>
    <Stack.Screen name='ProfileSettings' component={ProfileSettingsScreen}/>
  </Stack.Navigator>
);
