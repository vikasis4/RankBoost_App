import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HomeHero from '../components/HomeHero'
import HomeRev from '../components/HomeRev'
import HomeSpec from '../components/HomeSpec'

const Home = () => {



  return (
    <View style={{ position: 'relative', flex: 1, backgroundColor: 'white' }}>
      <HomeHero />
      <View style={styles.curv}></View>
      <HomeRev />
      <HomeSpec />
    </View>
  )
}

export default Home

const styles = StyleSheet.create({

  curv: {
    position: 'relative',
    bottom: 12,
    height: 20,
    width: '100%',
    borderTopLeftRadius: 200,
    borderTopRightRadius: 200,
    backgroundColor: 'white'
  }
})