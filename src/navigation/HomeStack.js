import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Auth from '../screens/auth/Auth';
import Home from '../screens/Home';
import BottomNavigation from './BottomNavigation';

const Stack = createNativeStackNavigator();

export function HomeStack() {
    return (
        <Stack.Navigator
            screenOptions={{
                animation: 'slide_from_right',
                presentation: 'card',
            }}>
            <Stack.Screen name="Auth" component={Auth} options={{ headerShown: false }} />
            <Stack.Screen name="BottomTab" component={BottomNavigation} options={{ headerShown: false }} />
        </Stack.Navigator>
    );
}