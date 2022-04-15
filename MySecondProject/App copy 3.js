import React from 'react';
import { Text } from 'react-native';

export default function MyApp() {
  function getFullName(fName, mName, lName) {
    return fName + " " + mName + " " + lName;
  }
  const pet = "Dog";
  return (
      <Text>
        {"\n\n\n\n\n"}
        Hello, I am a CIS340 student! {"\n"}
        My full name is {getFullName("Cameron", "Basil", "Quade")} {"\n"}
        have a {pet}!
        </Text>
   
  );
}
