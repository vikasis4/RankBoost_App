import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Font } from '../variables/variables';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import Home from '../screens/Home';
import Purchased from '../screens/Purchased';
import Refer from '../screens/Refer';
import Store from '../screens/Store';

const onStore = require('../../assets/images/icon_thin_store.png')
const onHome = require('../../assets/images/icon_thin_home.png')
const onRefer = require('../../assets/images/icon_thin_share.png')
const onPur = require('../../assets/images/icon_thin_pur.png')

const Tab = createBottomTabNavigator();

function MyTabBar({ state, descriptors, navigation }) {

    return (
        <View style={{ flexDirection: 'row' }}>
            {state.routes.map((route, index) => {
                const { options } = descriptors[route.key];
                const label =
                    options.tabBarLabel !== undefined
                        ? options.tabBarLabel
                        : options.title !== undefined
                            ? options.title
                            : route.name;

                const isFocused = state.index === index;

                const onPress = () => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                        canPreventDefault: true,
                    });

                    if (!isFocused && !event.defaultPrevented) {
                        navigation.navigate({ name: route.name, merge: true });
                    }
                };
                return (
                    <TouchableOpacity
                        key={(Math.random() * 100).toString()}
                        accessibilityRole="button"
                        accessibilityState={isFocused ? { selected: true } : {}}
                        accessibilityLabel={options.tabBarAccessibilityLabel}
                        testID={options.tabBarTestID}
                        onPress={onPress}
                        activeOpacity={1}
                        style={{ flex: 1 }}
                    >
                        <LinearGradient colors={[ 'royalblue', 'purple' ]} style={{
                            opacity: 0.7,
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                            <View style={{ justifyContent: 'center', alignItems: 'center', paddingVertical: 5, gap: 4 }}>

                                <Image source={label === 'Home' ? onHome : label === 'Refer' ? onRefer : label === 'Store' ? onStore : onPur} style={{ height: 24, width: 24, marginTop: 8 }} />

                                <Text style={{ color: isFocused ? 'white' : 'black', fontFamily: Font.u2, textAlign: 'center' }}>
                                    {label}
                                </Text>
                            </View>
                        </LinearGradient>
                    </TouchableOpacity>
                );
            })}
        </View>
    );
}
function BottomNavigation() {


    return (
        <>
            <Tab.Navigator tabBar={props => <MyTabBar {...props} />}
                screenOptions={({ route }) => ({
                    tabBarShowLabel: false,
                    tabBarStyle: { display: 'none' },
                    headerShown: false,
                    tabBarHideOnKeyboard: true
                })}>

                <Tab.Screen name="Home" component={Home} options={{ headerShown: false }} />
                <Tab.Screen name="Refer" component={Refer} options={{ headerShown: false }} />
                <Tab.Screen name="Store" component={Store} options={{ headerShown: false }} />
                <Tab.Screen name="Purchased" component={Purchased} options={{ headerShown: false }} />
            </Tab.Navigator>
        </>
    );
}

export default BottomNavigation
