import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

export default function App() {

  return (
    <View style={styles.container}>
      <Image source = {{uri: 'https://brand.colostate.edu/wp-content/uploads/sites/47/2019/01/CSU-Ram-357-617.png'}}
            style = {styles.logo} />

      <Text style = {styles.insts}>
          Press the button below to select and image on your phone!
      </Text> 

      <TouchableOpacity style = {styles.button} onPress ={() => alert('You have not selected an image yet')} >
          
          <Text style = {styles.buttonText}>Pick an Image</Text>

      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFE4E1',
  },

  button: {
    backgroundColor: '#66CDAA',
    padding: 10,
    borderRadius: 5

  },

  insts: {
    fontSize: 18,
    color: '#794',
    marginHorizontal: 15,
    marginBottom: 10,

  },

  logo: {
    width: 305,
    height: 300,
    marginBottom: 20
  },

  buttonText: {
    fontSize: 30,
    color: '#fff'
  }

});
