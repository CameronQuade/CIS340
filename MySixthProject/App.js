import  React  from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';

export default function App() {

  const csuLogo = {
    uri: 'https://brand.colostate.edu/wp-content/uploads/sites/47/2019/01/CSU-Ram-357-617.png',
  };


  return (
    <View style={styles.container}>
      <ImageBackground source={csuLogo} style = {styles.image}>

        <Text style = {styles.text}> CSU logo</Text>

      </ImageBackground>
       
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
  },

  image: {
    flex: 1,
      resizeMode: "cover",
      justifyContent: "center"
  },

  text: {
    color: "green",
    fontSize: 40,
    fontWeight: 'bold'
  }
});
