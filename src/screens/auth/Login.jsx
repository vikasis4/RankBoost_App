import { StyleSheet, Text, Animated, View, TextInput } from 'react-native'
import React from 'react'
import { Font } from '../../variables/variables'

const Login = (props) => {

  const [screen, setScreen] = React.useState('register');
  const [animateValue, setAnimateValue] = React.useState(0);
  const fadeAnim = React.useRef(new Animated.Value(-1000)).current;
  const fadeIn = () => {
    Animated.timing(fadeAnim, {
      toValue: animateValue,
      duration: 600,
      useNativeDriver: true,
    }).start(({ finished }) => {
      if (animateValue != 0 && finished) {
        props.setState(screen)
      }
    });
  };
  React.useEffect(() => {
    if (fadeAnim != 0) {
      fadeIn();
    }
  }, [])
  React.useEffect(() => {
    if (animateValue != 0) {
      fadeIn();
    }
  }, [animateValue])
  /////////////////////////////// ANIMATION ////////////////////////////////////


  return (
    <Animated.View style={[styles.cont, { transform: [{ translateY: fadeAnim }] }]}>
      <Text style={styles.text}>Login</Text>
      <View style={{ width: '80%', gap: 20 }}>
        <TextInput type="number" keyboardType="numeric" placeholder="Enter the Phone number" style={styles.input} />
        <Text onPress={() => { setScreen('otp'); setAnimateValue(-1000) }} style={styles.btn}>Submit</Text>
      </View>
      <View style={{ width: '100%', gap: 8 }}>
        <Text style={styles.bottom}>Does not have an Account ?</Text>
        <Text onPress={() => { setScreen('register'); setAnimateValue(-1000) }} style={styles.bottomBtn}>Create Account</Text>
      </View>
    </Animated.View>
  )
}

export default Login

const styles = StyleSheet.create({
  bottomBtn: {
    textAlign: 'center',
    color: 'royalblue',
    fontFamily: Font.u1,
    fontSize: 14,
  },
  bottom: {
    textAlign: 'center',
    color: 'white',
    fontFamily: Font.u1,
    fontSize: 14,
  },
  btn: {
    width: '100%',
    backgroundColor: 'royalblue',
    textAlign: 'center',
    color: 'white',
    fontFamily: Font.u2,
    fontSize: 20,
    paddingVertical: 8,
    borderRadius: 4
  },
  input: {
    backgroundColor: 'black',
    width: '100%',
    borderRadius: 4,
    fontFamily: Font.u3,
    paddingHorizontal: 12
  },
  text: {
    textAlign: 'center',
    color: 'white',
    fontFamily: Font.u1,
    fontSize: 42,
  },
  cont: {
    height: 500,
    width: '84%',
    backgroundColor: 'black',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 30,
  }
})