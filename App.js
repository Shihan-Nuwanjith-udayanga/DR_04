import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/screens/home.js';
import Login from './src/screens/login.js';
import Register from './src/screens/register.js';
import Auth from './src/screens/auth';
import Play from './src/screens/play';
import Forget from './src/screens/forget';
import webDetails from './src/screens/webDetails';
import mobileDetails from './src/screens/mobileDetails';
import standaloneDetails from './src/screens/standaloneDetails';


const Stack = createNativeStackNavigator();

const App = () => {
  return(
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Auth">
          <Stack.Screen options={{headerShown:false}} name="Auth" component={Auth} />
          <Stack.Screen options={{headerShown:false}} name="Home" component={Home} />
          <Stack.Screen options={{headerShown:false}} name="Login" component={Login} />
          <Stack.Screen options={{headerShown:false}} name="Register" component={Register} />
          <Stack.Screen options={{headerShown:false}} name="WebDetails" component={webDetails} />
          <Stack.Screen options={{headerShown:false}} name="MobileDetails" component={mobileDetails} />
          <Stack.Screen options={{headerShown:false}} name="StandaloneDetails" component={standaloneDetails} />
          <Stack.Screen options={{headerShown:false}} name="Play" component={Play} />
          <Stack.Screen options={{headerShown:false}} name="Forget" component={Forget} />
        </Stack.Navigator>
      </NavigationContainer>
  )
};

console.disableYellowBox = true;

export default App;