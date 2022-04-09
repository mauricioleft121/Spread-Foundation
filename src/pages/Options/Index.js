/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';

import styles from './styles';

const Options = ({ navigation }) => {
  return (
    <>
    <View style={styles.container}>

      {/* LOGO SAPATA*/}
      <Image
      source={require('../../assets/sapata/sapata.png')}
      style={styles.imagemsapata}/>

      {/* BOTÃO SAPATA QUADRADA*/}
    <TouchableOpacity
      onPress={() => navigation.navigate('SapataQuadrada')}
      style={styles.botaoSapataQuadrada}>
      <Image
      source={require('../../assets/botaosapataquadrada/sapataquadrada.png')}
      style={styles.imagemnosbotoes}/>
      <Text style={styles.textonosbotoes}>Sapata Quadrada</Text>
      </TouchableOpacity>

     {/* BOTÃO SAPATA RETANGULAR*/}
      <TouchableOpacity
      onPress={() => navigation.navigate('SapataRetangular')}
      style={styles.botaoSapataRetangular}>
      <Image
      source={require('../../assets/botaosapataretangular/sapataretangular.png')}
      style={styles.imagemnosbotoes} />
      <Text style={styles.textonosbotoes}>Sapata Retangular</Text>
      </TouchableOpacity>

    </View>
    </>
  );
};

export default Options;
