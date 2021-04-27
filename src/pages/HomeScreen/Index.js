/* eslint-disable prettier/prettier */
import 'react-native-gesture-handler';
import React from 'react';
import {
  View, Text, TouchableOpacity, Image,
} from 'react-native';

import styles from './styles';

const HomeScreen = ({ navigation }) => {
  return (
    <>
      <View  style={styles.container}>

        {/* LOGO PRINCIPAL*/}
        <Image
          style={styles.logo}
          source={require('../../assets/logoinicial/logoinicial.png')} />

        {/* BOTÃO DIMENSIONAMENTO*/}
        <View>
          <TouchableOpacity
            onPress={() => navigation.navigate('Options')}
            style={styles.botaodimensionamento} >
            <Image
              source={require('../../assets/dimensionamento/dimensionamento.png')}
              style={styles.imagembotaodimensionamento}
            />
            <Text style={styles.textobotaodimensionamento}>Dimensionamento</Text>
          </TouchableOpacity>
        </View>

        {/* BOTÃO 2
        <View style={styles}>
          <TouchableOpacity
            onPress={() => { }}
            style={styles.botaodimensionamento}
          >
            <Text style={styles.textbutton}>Futuro Botão</Text>
          </TouchableOpacity>
        </View>
      */}

        {/* LOGO UFSJ*/}
        <Image
          style={styles.ufsjlogo}
          source={require('../../assets/ufsjlogo/ufsjlogo.png')}
        />

      </View>
    </>
  );
};

export default HomeScreen;
