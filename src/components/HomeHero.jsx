import { StyleSheet, Text, View, ImageBackground, Image } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
const bg2 = require('../../assets/images/bg2.jpg')
const profile = require('../../assets/images/profile.png')
const right = require('../../assets/images/right.png')
import React from 'react';
import { Font } from '../variables/variables';


const HomeHero = () => {
    return (
        <View style={styles.cont}>
            <ImageBackground source={bg2} style={styles.imgBackground}>
                <LinearGradient colors={['black','black']} style={styles.linearGradient}>

                    <View style={styles.cont1}>
                        <Text style={styles.txt}>RankBoost</Text>
                        <Image source={profile} style={{ height: 45, width: 45, borderWidth: 2, borderColor: 'white', borderRadius: 100 }} />
                    </View>

                    <View style={styles.cont2}>
                        <View>
                            <Text style={styles.txt2}>Best and Premium</Text>
                            <Text style={[styles.txt2, {paddingTop:8}]}>Study Material for JEE/NEET</Text>
                        </View>
                        <Text style={styles.btn}>
                            <Image source={right} style={{ height: 20, width: 20, position: 'absolute' }} />
                            &nbsp;  Explore
                        </Text>
                    </View>

                </LinearGradient>
            </ImageBackground>
        </View>
    )
}

export default HomeHero

const styles = StyleSheet.create({
    btn: {
        backgroundColor: 'royalblue',
        width: '50%',
        textAlign: 'center',
        color:'white',
        fontSize: 22,
        position: 'relative',
        paddingVertical: 8,
        borderRadius: 4,
        fontFamily: Font.u2,
        marginBottom:30
    },
    txt2: {
        fontFamily: Font.u2,
        color: 'white',
        fontSize: 24,
    },
    txt: {
        fontFamily: Font.p3,
        color: 'white',
        fontSize: 32,
    },
    cont1: {
        flex: 1,
        width: '100%',
        paddingHorizontal: 18,
        paddingTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    cont2: {
        flex: 3,
        width: '100%',
        paddingHorizontal: 18,
        paddingVertical: 28,
        justifyContent: 'space-between'
    },
    cont: {
        height: 320,
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
        opacity: 0.76,
        justifyContent: 'center',
        alignItems: 'center'
    },
})