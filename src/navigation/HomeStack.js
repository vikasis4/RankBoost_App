import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Auth from '../screens/auth/Auth';

const Stack = createNativeStackNavigator();

export function HomeStack() {
    return (
        <Stack.Navigator
            screenOptions={{
                animation: 'slide_from_right',
                presentation: 'card',
            }}>
            <Stack.Screen name="Auth" component={Auth} options={{ headerShown: false }} />
        </Stack.Navigator>
    );
}