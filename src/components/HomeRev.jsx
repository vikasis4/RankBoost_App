import { StyleSheet, Text, View, Animated } from 'react-native'
import React from 'react'
import { Font } from '../variables/variables';

const HomeRev = () => {

    var arrayData = [{ name: 'vikas', des: 'everything is fine as fuck. best study material' }, { name: 'Chal Bsdk', des: 'Kam chalu hai baki baad me btaunga bcz abhi hi  liya aur ab mera dimag kharab ho rha hai bc' }];
    const [descrip, setDescrip] = React.useState(arrayData[0])

    var turf = true;
    var n = 1;
    const translate = React.useRef(new Animated.Value(0)).current;
    const transFxn = () => {
        Animated.timing(translate, {
            toValue: turf ? 800 : 0,
            duration: 700,
            useNativeDriver: true
        }).start(({ finished }) => {
            if (finished) {
                if (turf) {
                    setDescrip(arrayData[n]);
                    if (n === arrayData.length - 1) {
                        n = 0
                    }else{
                        n++;
                    }
                    turf = false;
                    transFxn()
                } else {
                    setTimeout(() => {
                        turf = true;
                        transFxn()
                    }, 4000);
                }
            }
        })
    }
    React.useEffect(() => {
        transFxn();
    }, [])

    return (
        <View style={styles.review}>
            <Text style={styles.txt}>Reviews</Text>
            <Animated.View style={[styles.revCont, { transform: [{ translateX: translate }] }]}>
                <Text style={styles.text}>
                    {descrip.name}
                </Text>
                <Text style={styles.text2}>
                    {descrip.des}
                </Text>
            </Animated.View>
        </View>
    )
}

export default HomeRev

const styles = StyleSheet.create({
    text2: {
        fontFamily: Font.u3,
        color: 'gray',
        fontSize: 16,
        paddingHorizontal: 12,
        paddingTop: 12
    },
    txt: {
        fontFamily: Font.p4,
        color: 'rgba(0,0,0,0.7)',
        fontSize: 28,
        paddingBottom:20
    },
    text: {
        fontFamily: Font.p4,
        color: 'royalblue',
        fontSize: 22,
        paddingLeft: 16,
        paddingTop: 12
    },
    revCont: {
        width: '86%',
        borderRadius: 4,
        height: 160,
        backgroundColor: 'white',
        elevation: 6
    },
    review: {
        width: '100%',
        alignItems: 'center',
    },
})