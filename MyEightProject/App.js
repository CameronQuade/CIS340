import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker' //import image picking
import * as Sharing from 'expo-sharing'; // import sharing
export default function App() {

  const [selectedImage, setSelectedImage ] = React.useState(null)

let openImagePickerAsync = async () => {

  let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

  if (permissionResult.granted === false){
    alert("Permission is required!");
    return;
  }

  let pickerResult = await ImagePicker.launchImageLibraryAsync();
  if (pickerResult.cancelled === true) {
    return;
  }

  setSelectedImage({localUri: pickerResult.uri});

};

let openSharingDialogAsync = async () => {
  if ( !(await Sharing.isAvailableAsync())){
    alert('Sharing is Not Available on my Platform');
    return;
  }
  Sharing.shareAsync(selectedImage.localUri);
};

if (selectedImage !== null) {
  return (
    <View style = {styles.container}>
      <Image source = {{uri: selectedImage.localUri}} style = {styles.selImage}/>

      <TouchableOpacity onPress={openSharingDialogAsync} style = {styles.button}>
          <Text style = {styles.buttonText}> Share my Photo </Text>
      </TouchableOpacity>
    </View>
  )
}

  return (
    <View style={styles.container}>
    <Image source = {{uri: 'https://brand.colostate.edu/wp-content/uploads/sites/47/2019/01/CSU-Ram-357-617.png'}}
          style = {styles.logo} />

    <Text style = {styles.insts}>
        Press the button below to select and image on your phone!
    </Text> 

      <TouchableOpacity style = {styles.button} onPress = {openImagePickerAsync}>

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
},

selImage: {
  width: 300,
  height: 300,
  resizeMode: 'contain'
}

});

