import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Abertura } from './../components/Abertura/index';
import { Login } from '../pages/Login';
import { AppTabs } from '../components/AppTabs'; 

const Stack = createStackNavigator();

export function Routers() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Abertura" component={Abertura} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="MainApp" component={AppTabs} />

    </Stack.Navigator>
  );
}