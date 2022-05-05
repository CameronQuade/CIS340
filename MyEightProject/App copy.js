import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function App() {

  const [count, setCount] = useState(0);

  const onTap = () => setCount(count => count + 1);

  return (
    <View style={styles.container}>

      <View style = {styles.counterTex}>
        <Text> Tap Counter: {count} </Text>
      </View>

      <TouchableOpacity style = {styles.button} onPress = {onTap}>
          <Text>Touch Me</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#FFE4E1',
    paddingHorizontal: 20
  },

  button: {
    alignItems: "center",
    backgroundColor: '#66CDAA',
    padding: 10

  },

  counterText: {
    alignItems: "center"
  }
});
