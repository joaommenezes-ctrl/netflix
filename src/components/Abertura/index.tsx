import React, { useEffect } from 'react';
import { LoadingScreen } from '../LoadingScrenn'; 
import { StackNavigationProp } from '@react-navigation/stack';

type RootStackParamList = {
  Abertura: undefined;
  Login: undefined;
  StackHome: undefined;
};

type AberturaNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Abertura'
>;

interface Props {
  navigation: AberturaNavigationProp;
}

export function Abertura({ navigation }: Props) {

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('Login');
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigation]);

  return <LoadingScreen />; 
}