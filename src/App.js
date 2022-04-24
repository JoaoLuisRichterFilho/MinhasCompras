/**
 * Minhas Compras
 * João Luis Richter Filho
 */

import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from './views/Login';
import Home from './views/Home';

const Stack = createNativeStackNavigator();

class App extends Component {

  navState = {
    // newRoute: "Login"
  } 


  render() {


    return (
      <NavigationContainer style={styles.navContainer}>
        <Stack.Navigator initialRouteName="Home"
          screenOptions={{ headerShown: false}} 
          style={styles.navigator}
        >
          <Stack.Screen style={styles.screen}
            name="Login" 
            component={Login}
          />
          <Stack.Screen 
            name="Home" 
            component={Home} 
          />
        </Stack.Navigator>
      </NavigationContainer>
      
    )
  }

}

const styles = StyleSheet.create({
  
})

export default App;