import { StatusBar } from 'react-native';
import { Routers } from './src/routers';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
    <NavigationContainer>
      <Routers />
    </NavigationContainer>
  );
}
