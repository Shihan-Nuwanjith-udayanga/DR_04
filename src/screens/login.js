import React, {Component} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput
} from 'react-native';
import {useNavigation} from '@react-navigation/core';

const Login = () => {

  const navigation = useNavigation();

  return (
    <SafeAreaView>
        <ScrollView>
            <View style={styles.container}>
              <Image source={require('../assets/images/logo.png')} style={styles.image} />
            </View>
            <View style={styles.textView}>
              <TextInput placeholder='Your Email Address' style={styles.textInput}></TextInput>
            </View>
            <View style={styles.textView}>
              <TextInput placeholder='Password' secureTextEntry={true} style={styles.textInput}></TextInput>
            </View>
            <View style={styles.textView1}>
              <TouchableOpacity onPress={()=> navigation.navigate("Home")}>
                <Text style={styles.txtLogin}>Login</Text>
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity  onPress={()=> navigation.navigate("Forget")}>
                <Text style={styles.txtForgot}>Forgot Password?</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.socialLogo}>
              <TouchableOpacity>
               <Image source={require('../assets/images/facebook.png')} style={styles.socialImage} />
              </TouchableOpacity>
              <TouchableOpacity>
               <Image source={require('../assets/images/google.png')} style={styles.socialImage1} />
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity onPress={()=> navigation.navigate("Register")}>
                <Text style={styles.txtRegister}>Need Account ? Register now</Text>
              </TouchableOpacity>
            </View>
        </ScrollView>
    </SafeAreaView>
    
  );
};

const styles = StyleSheet.create({

  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    marginBottom: 50
  },

  image: {
    width: 200,
    height: 200
  },

  textView: {
    margin: 15,
    borderWidth: 1,
    borderRadius: 10,
    padding: 3,
  },

  textInput: {
    fontSize: 16
  },

  textView1: {
    margin: 10,
    borderRadius: 10,
    padding: 5,
    height: 50,
    justifyContent: 'center',
    backgroundColor: '#4ac0e8'
  },

  txtLogin: {
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#000'
  },

  txtForgot:{
    fontSize: 16,
    color: '#4ac0e8',
    fontWeight: 'bold',
    textAlign: 'center'
  },

  socialLogo: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 25
  },

  socialImage: {
    width: 50,
    height: 50,
    marginRight: 30
  },

  socialImage1: {
    width: 50,
    height: 50,
    marginRight: 0
  },

  txtRegister: {
    fontSize: 16,
    color: '#4ac0e8',
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 50
  }

});

export default Login;