/* eslint-disable prettier/prettier */
import 'react-native-gesture-handler';
import React from 'react';
import {
  View, Text, TouchableOpacity,Image,
} from 'react-native';

import styles from './styles';

const HomeScreen = ({ navigation }) => {
  return (
    <>
    
  
    <View
      style={styles.container}>
      <Image
      style={styles.slablogo}
      source={require('../../assets/logoinicial/logoinicial.png')}
      />


      <View style={styles.viewbotaodimensionamento}>
      <TouchableOpacity
      onPress={() => navigation.navigate('Options')}
      style={styles.botaodimensionamento}
      >
        <Image
      source={require('../../assets/dimensionamento/dimensionamento.png')}
      style={styles.ImageIconStyle}
     />
     <Text style={styles.textbutton}>Dimensionamento</Text>
      </TouchableOpacity>
      </View>

      <View style={styles.viewbotao2}>
      <TouchableOpacity
      onPress={() => {}}
      style={styles.botaodimensionamento}
      >
     <Text style={styles.textbutton}>Futuro Botão</Text>
      </TouchableOpacity>
      </View>

      <View style={styles.viewbotao3}>
      <TouchableOpacity
      onPress={() => {}}
      style={styles.botaodimensionamento}
      >
     <Text style={styles.textbutton}>Futuro Botão</Text>
      </TouchableOpacity>
      </View>

      <Image
      style={styles.ufsjlogo}
      source={require('../../assets/ufsjlogo/ufsjlogo.png')}
      />


    </View>
    </>
  );

};


export default HomeScreen;
