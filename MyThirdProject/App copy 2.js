import React from 'react';
import { Text, Image, View } from 'react-native';

export default function MyDog() {

  let pic = {
    uri: 'https://user-images.githubusercontent.com/103219564/163512717-a73711ca-894a-4559-b2f3-aa496ae8dab3.png'};

  return (
    <View style ={{
      flex: 1,
      justifyContent: 'Center',
      alignItems: 'center'
        }}>
      <Image source = {pic} 
   style = {{width: 200, height: 400}}
   />
   <Text>Hello, this is my dog!</Text>
    </View>
  );
}
