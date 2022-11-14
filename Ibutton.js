import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

const Ibutton = (Props) => {
  return (
    <View>
      <TouchableOpacity onPress={()=> Props.onPress()}>
        <Text style={Styles.Button}>{Props.text}</Text>
      </TouchableOpacity>
    </View>
  );
};
const Styles = StyleSheet.create({
  Button: {
    color: 'black',
    backgroundColor:'white',
    width:70,
    height:70,
    textAlign:'center',
    justifyContent:"center",
    padding:19,
    fontSize:20,
    borderRadius:30,
    
   
  },
});

export default Ibutton;
