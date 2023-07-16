import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Font } from '../variables/variables'

const HomeSpec = () => {
  return (
    <View style={styles.cont}>
      <Text style={styles.txt}>No New Notification</Text>
    </View>
  )
}

export default HomeSpec

const styles = StyleSheet.create({
   txt:{
    fontFamily: Font.p4,
    color:'gray',
    fontSize:18,
    marginTop:60,
   },
    cont:{
        justifyContent: 'center',
        alignItems: 'center',
        gap:20
    }
})