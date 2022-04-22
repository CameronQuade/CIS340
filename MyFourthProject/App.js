import React from 'react';
import { Text, View, SectionList } from 'react-native';

export default MyStatesApp = () => {
  return (
    <View style ={{flex: 1, paddingTop: 22}}>
        <SectionList
         sections={[
           {title: 'A', data: ['Alabama', 'Arkansas', 'Alaska', 'Arizona']},
           {title: 'C', data: ['Califronia', 'Colorado', 'Conneticut']},
           {title: 'D', data: ['Delaware']},
           {title: 'F', data: ['Florida']},
           {title: 'G', data: ['Georgia']},
           {title: 'H', data: ['Hawaii']},
           {title: 'I', data: ['Iowa']},

          ]}
      renderItem={({item}) => <Text style = {{padding: 10, fontSize: 20, height: 44,}}> {item} </Text>}
      renderSectionHeader = {({section}) => <Text style={{paddingTop: 4, paddingLeft: 10,
      paddingRight: 10,
      paddingBottom: 4,
      fontSize: 14,
      fontWeight: 'bold',
      backgroundColor: '#F5F5F5',}}>{section.title}</Text>}
      keyExtractors={(item, index) => index}
    />
   </View>
  );//End of return statement
}

