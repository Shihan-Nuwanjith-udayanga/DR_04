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

const StandaloneDetails = () => {

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
              <Image source={require('../assets/images/standalone.png')} style={styles.logoImage} />
              <Text style={styles.text}>Standalone Application Development</Text>
            </View>
            <ScrollView style={styles.scrollView}>
            <View style={styles.categoryView}>
              <TouchableOpacity style={styles.categoryTouchable} onPress={() => Linking.openURL('https://www.java.com/en/')}>
                <Image source={require('../assets/images/java.png')} style={styles.categoryImage} />
                <Text style={styles.txtCategory}>Java</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.categoryView}>
              <TouchableOpacity style={styles.categoryTouchable} onPress={() => Linking.openURL('https://www.python.org/')}>
                <Image source={require('../assets/images/python.png')} style={styles.categoryImage} />
                <Text style={styles.txtCategory}>Python</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.categoryView}>
              <TouchableOpacity style={styles.categoryTouchable} onPress={() => Linking.openURL('https://www.mysql.com/')}>
                <Image source={require('../assets/images/mysql.png')} style={styles.categoryImage} />
                <Text style={styles.txtCategory}>MySQL</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.categoryView}>
              <TouchableOpacity style={styles.categoryTouchable} onPress={() => Linking.openURL('https://www.w3schools.com/cs/index.php')}>
                <Image source={require('../assets/images/cSharp.png')} style={styles.categoryImage} />
                <Text style={styles.txtCategory}>C#</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.categoryView}>
              <TouchableOpacity style={styles.categoryTouchable} onPress={() => Linking.openURL('https://www.w3schools.com/cpp/')}>
                <Image source={require('../assets/images/cPlus.png')} style={styles.categoryImage} />
                <Text style={styles.txtCategory}>C++</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.categoryView}>
              <TouchableOpacity style={styles.categoryTouchable} onPress={() => Linking.openURL('https://spring.io/projects/spring-boot/')}>
                <Image source={require('../assets/images/spring.png')} style={styles.categoryImage} />
                <Text style={styles.txtCategory}>Spring Boot</Text>
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

export default StandaloneDetails;