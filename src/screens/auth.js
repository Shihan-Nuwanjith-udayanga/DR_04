import React, {useState, useEffect} from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import {useNavigation} from '@react-navigation/core';

const Auth = () => {
 
    const [isGo, setIsGo] = useState(true);
    const Navigation = useNavigation();

    useEffect(()=>{
        if(isGo == true){
            setTimeout(() => {
                Navigation.navigate("Login");
                setIsGo(false);
            }, 2000);
        }
    });

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/images/logo.png')}
        style={styles.image}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  image: {
    width: 350,
    height: 350,
  },
});

export default Auth;
