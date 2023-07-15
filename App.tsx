import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { GlobalProvider } from './src/context/Global';
import 'react-native-gesture-handler';
import { HomeStack } from './src/navigation/HomeStack';
import PreFunction from './src/PreAndPostFunction/PreFunction';
import PostFunction from './src/PreAndPostFunction/PostFunction';


function App(): JSX.Element {

  return (
    <>
      <GlobalProvider>

        <PreFunction />
        <PostFunction />

        <NavigationContainer>
          <HomeStack />
        </NavigationContainer>
        
      </GlobalProvider>
    </>
  );
}



export default App;
