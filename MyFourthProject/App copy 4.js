import React from 'react';
import { Text, View, FlatList } from 'react-native';

export default MyStatesApp = () => {
  return (
    <View style ={{flex: 1, paddingTop: 22}}>
      <FlatList
      data={[
        {key: 'Alaska'},
        {key: 'Colorado'},
        {key: 'Hawaii'},
        {key: 'Louisanna'},
        {key: 'Texas'},
        {key: 'Florida'},
        {key: 'Oklahoma'},
        {key: 'Nebraska'},
        {key: 'Wyoming'},
        {key: 'Montana'},
        {key: 'California'},
        {key: 'Washington'},
        {key: 'Kentucky'},
        {key: 'Kansas'},
        {key: 'Nevada'},
        {key: 'Georgia'},
        {key: 'New Mexico'},
        {key: 'Minnesota'}

      ]}
      renderItem ={({item}) => <Text style = {{padding: 10, fontSize: 20, height: 44,}}> {item.key} </Text>}
    />
   </View>


  );//End of return statement
}

