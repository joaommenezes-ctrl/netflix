import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen } from '../../pages/Home';
import { styles } from './style';
import { MaterialCommunityIcons } from '@expo/vector-icons';

type IconName = React.ComponentProps<typeof MaterialCommunityIcons>['name'];

const ScreenWrapper = ({ children }: { children: React.ReactNode }) => (
  <SafeAreaView style={styles.wrapper}>
    <View style={styles.screen}>
      <Text style={styles.text}>{children}</Text>
    </View>
  </SafeAreaView>
);

function NovidadesScreen() {
  return <ScreenWrapper>Tela Novidades</ScreenWrapper>;
}
function PerfilScreen() {
  return <ScreenWrapper>Tela Perfil</ScreenWrapper>;
}

const Tab = createBottomTabNavigator();

const iconConfig: { [key: string]: { focused: IconName; unfocused: IconName } } = {
  Home: { focused: 'home', unfocused: 'home-outline' },
  Novidades: { focused: 'play-box', unfocused: 'play-box-outline' },
  "Meu Perfil": { focused: 'account', unfocused: 'account-outline' },
};

export function AppTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: styles.tabBar,
        tabBarActiveTintColor: '#FFFFFF',
        tabBarInactiveTintColor: '#808080',

        tabBarIcon: ({ focused, color, size }) => {
          const routeIcons = iconConfig[route.name];
          
          if (!routeIcons) {
            return <MaterialCommunityIcons name="help-circle" size={size} color={color} />;
          }

          const iconName = focused ? routeIcons.focused : routeIcons.unfocused;

          return (
            <MaterialCommunityIcons
              name={iconName} 
              size={size}
              color={color}
            />
          );
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Novidades" component={NovidadesScreen} />
      <Tab.Screen name="Meu Perfil" component={PerfilScreen} />
    </Tab.Navigator>
  );
}