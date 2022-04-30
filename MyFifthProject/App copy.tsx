import  React  from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style = {styles.yellow}>Yellow text</Text>
      <Text style = {styles.largeGreen}>Large, green text</Text>
      <Text style = {[styles.yellow, styles.largeGreen]}>Yellow text then, green text</Text>
      <Text style = {[styles.largeGreen, styles.yellow]}>Green text then, yellow text</Text>
      
    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    marginTop: 60,
  },

  largeGreen: {
    color: 'green',
    fontWeight: 'bold',
    fontSize: 30,
  },

  yellow: {
    color: 'yellow',
    fontSize: 10,
},
});
