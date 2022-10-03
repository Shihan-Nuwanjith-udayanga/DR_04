import React, {Component} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  Linking
} from 'react-native';
import {useNavigation} from '@react-navigation/core';

const WebDetails = () => {

  const navigation = useNavigation();

  return (
    <SafeAreaView>
        <ScrollView>
            <View style={styles.headerView}>
              <TouchableOpacity style={styles.imageTouchable} onPress={()=> navigation.navigate("Home")}>
                <Image source={require('../assets/images/back.png')} style={styles.image} />
              </TouchableOpacity>
              <TouchableOpacity style={styles.imageTouchable} onPress={()=> navigation.navigate("Home")}>
                <Image source={require('../assets/images/home.png')} style={styles.image1} />
              </TouchableOpacity>
            </View>
            <View style={styles.container}>
              <Image source={require('../assets/images/web.png')} style={styles.logoImage} />
              <Text style={styles.text}>Web Application Development</Text>
            </View>
            <ScrollView style={styles.scrollView}>
            <View style={styles.categoryView}>
              <TouchableOpacity style={styles.categoryTouchable} onPress={() => Linking.openURL('https://developer.mozilla.org/en-US/docs/Web/HTML')}>
                <Image source={require('../assets/images/html.png')} style={styles.categoryImage} />
                <Text style={styles.txtCategory}>HTML</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.categoryView}>
              <TouchableOpacity style={styles.categoryTouchable} onPress={() => Linking.openURL('https://developer.mozilla.org/en-US/docs/Web/CSS')}>
                <Image source={require('../assets/images/css.png')} style={styles.categoryImage} />
                <Text style={styles.txtCategory}>CSS</Text>
              </TouchableOpacity>
            </View>
             <View style={styles.categoryView}>
              <TouchableOpacity style={styles.categoryTouchable} onPress={() => Linking.openURL('https://angular.io/')}>
                <Image source={require('../assets/images/angular.png')} style={styles.categoryImage} />
                <Text style={styles.txtCategory}>Angular</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.categoryView}>
              <TouchableOpacity style={styles.categoryTouchable} onPress={() => Linking.openURL('https://developer.mozilla.org/en-US/docs/Web/JavaScript')}>
                <Image source={require('../assets/images/js.png')} style={styles.categoryImage} />
                <Text style={styles.txtCategory}>Java Script</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.categoryView}>
              <TouchableOpacity style={styles.categoryTouchable} onPress={() => Linking.openURL('https://getbootstrap.com/')}>
                <Image source={require('../assets/images/bootstrap.png')} style={styles.categoryImage} />
                <Text style={styles.txtCategory}>Bootstrap</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.categoryView}>
              <TouchableOpacity style={styles.categoryTouchable} onPress={() => Linking.openURL('https://getbootstrap.com/')}>
                <Image source={require('../assets/images/bootstrap.png')} style={styles.categoryImage} />
                <Text style={styles.txtCategory}>Bootstrap</Text>
              </TouchableOpacity>
            </View>
            </ScrollView>
        </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({

  headerView: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },

  image: {
    width: 40,
    height: 40,
  },

  image1: {
    width: 30,
    height: 30,
  },

  imageTouchable: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 140,
    margin: 15,
    marginRight: 140
  },

  container:{
    flex: 1,
    justifyContent:'center',
    alignItems: 'center'
    
  },

  logoImage: {
    width: 120,
    height: 120
  },

  text: {
    fontSize: 20,
    color: '#000',
    fontWeight: 'bold',
    margin: 10
  },

  scrollView: {
    flex: 1,
    height: 480
  },

  categoryView: {
    borderWidth: 2,
    margin: 15,
    marginBottom: 0,
    borderRadius: 10,
    height: 90
  },

  categoryTouchable: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },

  categoryImage: {
    width: 60,
    height: 60,
    margin: 15,
    marginRight: 0
  },

  txtCategory: {
    width: 240,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
    marginLeft: 25
  }

});

export default WebDetails;