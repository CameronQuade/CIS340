import React from 'react';
import { Text, Image, ScrollView } from 'react-native';

const dog = {
  uri: 'https://user-images.githubusercontent.com/103219564/163512717-a73711ca-894a-4559-b2f3-aa496ae8dab3.png',
  width: 70,
  height: 150
};

export default  MyScrollViewApp = () => (
     
     <ScrollView stle = {{padding: 40}}>
       <Text style = {{fontSize: 80}} >Try to scroll down</Text>
         <Image source = {require('./assets/dog.png')} style = {{width: 70, height: 150}} />
         <Image source = {dog} />
         <Image source = {dog} />
         <Image source = {dog} />
         <Image source = {dog} />
         <Image source = {dog} />
         <Text style = {{fontSize: 80}}>Try to scroll again please</Text>
         <Image source = {dog} />
         <Image source = {dog} />
         <Image source = {dog} />
         <Image source = {dog} />
         <Image source = {dog} />
         <Image source = {dog} />
         <Text style = {{fontSize: 80}}>Try to scroll again please</Text>
         <Image source = {dog} />
         <Image source = {dog} />
         <Image source = {dog} />
         <Image source = {dog} />
         <Image source = {dog} />
         <Image source = {dog} />
         <Text style = {{fontSize: 80}}>Try to scroll again please</Text>
         <Image source = {dog} />
         <Image source = {dog} />
         <Image source = {dog} />
         <Image source = {dog} />
         <Image source = {dog} />
         <Image source = {dog} />
         <Text style = {{fontSize: 80}}>Try to scroll again please</Text>
         <Image source = {dog} />
         <Image source = {dog} />
         <Image source = {dog} />
         <Image source = {dog} />
         <Image source = {dog} />
         <Image source = {dog} />
     </ScrollView>
  );

