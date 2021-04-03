/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';

import styles from './styles';

const Options = ({ navigation }) => {
  return (
    <>
    <View style={styles.container}>
    <Text style={{color:'white',fontSize:20,marginBottom:50}}>OPÇÕES</Text>
    <TouchableOpacity
      onPress={() => navigation.navigate('SapataQuadrada')}
      style={styles.botao}
      >
      <Image
      source={require('../../assets/botaosapataquadrada/sapataquadrada.png')}
      style={styles.ImageIconStyle}
     />
      <Text style={styles.textbutton}>Sapata Quadrada</Text>
      </TouchableOpacity>
    </View>

    </>
  );
};

export default Options;
