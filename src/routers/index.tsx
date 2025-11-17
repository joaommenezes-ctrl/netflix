import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../pages/Home';
import { Abertura } from './../components/Abertura/index';
import { Login } from '../pages/Login';

const Stack = createStackNavigator();

export function Routers() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown: false}}>
                 <Stack.Screen name="Abertura" component={Abertura} />
                <Stack.Screen name="StackHome" component={HomeScreen} />
                <Stack.Screen name="Login" component={Login} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}  