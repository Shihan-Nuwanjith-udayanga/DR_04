import React, {Component} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/core';

const Home = () => {

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
            <View style={styles.categoryView}>
              <TouchableOpacity style={styles.categoryTouchable} onPress={()=> navigation.navigate("WebDetails")}>
                <Image source={require('../assets/images/web.png')} style={styles.categoryImage} />
                <Text style={styles.txtCategory}>Web Application Development</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.categoryView}>
              <TouchableOpacity style={styles.categoryTouchable} onPress={()=> navigation.navigate("MobileDetails")}>
                <Image source={require('../assets/images/mobile.png')} style={styles.categoryImage} />
                <Text style={styles.txtCategory}>Mobile Application Development</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.categoryView}>
              <TouchableOpacity style={styles.categoryTouchable} onPress={()=> navigation.navigate("StandaloneDetails")}>
                <Image source={require('../assets/images/standalone.png')} style={styles.categoryImage} />
                <Text style={styles.txtCategory}>Standalone Application Development</Text>
              </TouchableOpacity>
            </View>
        </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({

  backTouchable: {
    width: 50,
    height: 50,
  },

  backImage:{
    width: 40,
    height: 40,
    margin: 10
  },

  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },

  image: {
    width: 150,
    height: 150
  },

  categoryView: {
    borderWidth: 2,
    margin: 15,
    borderRadius: 10,
    height: 120
  },

  categoryTouchable: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },

  categoryImage: {
    width: 80,
    height: 80,
    margin: 15,
    marginRight: 0
  },

  txtCategory: {
    width: 240,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    marginLeft: 25
  }

});

export default Home;