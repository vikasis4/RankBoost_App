import LinearGradient from 'react-native-linear-gradient';
import { StyleSheet, View, ImageBackground, StatusBar } from 'react-native'
import { Global } from '../../context/Global'
import React from 'react'
import Login from './Login'
import Register from './Register'
import Otp from './Otp'
import { DarkColors } from '../../variables/variables';

const bg1 = require('../../../assets/images/bg1.jpg')

const Auth = (props) => {

    var global = Global();
    const [state, setState] = React.useState('login');




    return (

        <View style={styles.cont}>
            <StatusBar hidden={true} />
            <ImageBackground source={bg1} style={styles.imgBackground}>
                <LinearGradient colors={['teal', DarkColors.c3]} style={styles.linearGradient}>

                    {
                        state === 'login' ?
                            <Login setState={setState} />
                            :
                            state === 'register' ?
                                <Register setState={setState} />
                                :
                                <Otp setState={setState} props={props} />
                    }

                </LinearGradient>
            </ImageBackground>
        </View >
    )
}

export default Auth

const styles = StyleSheet.create({
    cont: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    imgBackground: {
        flex: 1,
        width: "100%",
        alignItems: "center",
    },
    linearGradient: {
        width: '100%',
        height: '100%',
        opacity: 0.6,
        justifyContent: 'center',
        alignItems: 'center'
    },
})