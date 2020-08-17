import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { TaskListScreen } from '../scenes/tasks/task-list.component';

const Stack = createStackNavigator();

export const TasksNavigator = (): React.ReactElement => (
  <Stack.Navigator headerMode='none'>
    <Stack.Screen name='TaskList' component={TaskListScreen}/>
  </Stack.Navigator>
);
