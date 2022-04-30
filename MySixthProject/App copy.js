import  React  from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {

  const csuLogo = {
    uri: 'https://brand.colostate.edu/wp-content/uploads/sites/47/2019/01/CSU-Ram-357-617.png',
    width: 80,
    height: 80
  };


  return (
    <View style={styles.container}>

      <Image 
        style = {styles.localCSUlogo}
        source = {require('./assets/CSUlogo.png')}
      />

      <Image 
        style = {styles.urlCSUlogo}
        source = {{
          uri: 'https://brand.colostate.edu/wp-content/uploads/sites/47/2019/01/CSU-Ram-357-617.png'
        }}
      />

      <Image 
      source= {csuLogo}
      style = {styles.stretchLogo} 
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },

  localCSUlogo: {
    width: 55,
    height: 65,
  },

  urlCSUlogo: {
    width: 50,
    height: 50

  },

  stretchLogo: {
    height: 200,
    resizeMode: 'center',
  }
});
