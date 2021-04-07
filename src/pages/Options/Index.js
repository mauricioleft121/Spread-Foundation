/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';

import styles from './styles';

const Options = ({ navigation }) => {
  return (
    <>
    <View style={styles.container}>
      <Image
      source={require('../../assets/sapata/sapata.png')}
      style={{marginBottom:50}}/>
    <TouchableOpacity
      onPress={() => navigation.navigate('SapataQuadrada')}
      style={styles.botaoSapataQuadrada}
      >
      <Image
      source={require('../../assets/botaosapataquadrada/sapataquadrada.png')}
      style={styles.ImageIconStyle}
     />
      <Text style={styles.textbutton}>Sapata Quadrada</Text>
      </TouchableOpacity>
      <TouchableOpacity
      onPress={() => navigation.navigate('SapataRetangular')}
      style={styles.botaoSapataRetangular}
      >
      <Image
      source={require('../../assets/botaosapataretangular/sapataretangular.png')}
      style={styles.ImageIconStyle}
     />
      <Text style={styles.textbutton}>Sapata Retangular</Text>
      </TouchableOpacity>
    </View>

    </>
  );
};

export default Options;
