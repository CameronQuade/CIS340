import React, {Component} from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default class myApp extends Component {

  constructor(props) {
    super(props);
    this.state + {count: 0};
  }

  onTap = () => {
    this.setState({
      count: this.state.count + 1
    });
  }

  render() {
    const{count} = this.state;
  return (
    <View style={styles.container}>
      <View style = {styles.counterTex}>
        <Text> Tap Counter: {count} </Text>
      </View>

      <TouchableOpacity style = {styles.button} onPress = {this.onTap}>
          <Text>Touch Me</Text>
      </TouchableOpacity>

    </View>
  );
}
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
