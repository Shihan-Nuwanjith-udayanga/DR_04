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

const Register = () => {

  const navigation = useNavigation();

  return (
    <SafeAreaView>
        <ScrollView>
            <TouchableOpacity style={styles.backTouchable} onPress={()=> navigation.navigate("Login")}>
              <Image source={require('../assets/images/back.png')} style={styles.backImage} />
            </TouchableOpacity>
            <View style={styles.container}>
              <Image source={require('../assets/images/logo.png')} style={styles.image} />
            </View>
            <View style={styles.textView}>
              <TextInput placeholder='Your Full Name' style={styles.textInput}></TextInput>
            </View>
            <View style={styles.textView}>
              <TextInput placeholder='Your Email Address' style={styles.textInput}></TextInput>
            </View>
            <View style={styles.textView}>
              <TextInput placeholder='Password' secureTextEntry={true} style={styles.textInput}></TextInput>
            </View>
            <View style={styles.textView}>
              <TextInput placeholder='Confirm Password' secureTextEntry={true} style={styles.textInput}></TextInput>
            </View>
            <View style={styles.textView1}>
              <TouchableOpacity onPress={()=> navigation.navigate("Login")}>
                <Text style={styles.txtLogin}>Register</Text>
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity onPress={()=> navigation.navigate("Login")}>
                <Text style={styles.txtRegister}>Already Have Account ? Login</Text>
              </TouchableOpacity>
            </View>
        </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({

  backTouchable: {
    width: 40,
    height: 40,
  },

  backImage:{
    width: 40,
    height: 40,
    margin: 10
  },

  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 40
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
    marginTop: 0,
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

  txtRegister: {
    fontSize: 16,
    color: '#4ac0e8',
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 50
  }

});

export default Register;