import React from 'react';
import { Text, TextInput, View } from 'react-native';

 function MyApp() {
  return (
    <View>
      <Text>
        Hello, I am a CIS340 student! 
        </Text>
        </View>

  );
}

export default function MultiComp() {
  return (
    <View style ={{
flex: 1,
justifyContent: 'Center',
alignItems: 'center'
    }}>
<Text> Welcome to My Class</Text>
<MyApp />
<MyApp />
<MyApp />
<MyApp />
    </View>
  ) 
}
