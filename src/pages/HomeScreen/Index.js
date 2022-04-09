/* eslint-disable prettier/prettier */
import 'react-native-gesture-handler';
import React, {useEffect, useCallback} from 'react';
import {
  View, Text, TouchableOpacity, Image,Alert, Linking, Button
} from 'react-native';
import Form from 'react-native-vector-icons/AntDesign';

import styles from './styles';

Form.loadFont();

const URL = 'https://docs.google.com/forms/d/e/1FAIpQLSe5SXQqPV1gmX5nPjQyHG81DIogOxv2qVNB-mGrmfY-02bmuA/viewform';

const HomeScreen = ({ navigation }) => {

  const OpenURL = () => {
    Linking.openURL(URL).catch(err => console.error("Couldn't load page", err));
  }

  useEffect(() => {
    const Develop = () => {
      Alert.alert('Aplicativo em fase de Teste.', 'Em caso de algum erro, favor relatar no formulário disponibilizado.'
      ,[
        {
          text: 'Ok',
          style: 'default',
        }
      ],
      {
        cancelable: true
      })
    }
    setTimeout(Develop,800)
  },[])

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
        <TouchableOpacity style={styles.buttonformulario} onPress={() => OpenURL()}>
          <Form name='form' size={20}/>
          <Text style={styles.textformulario}>FORMULÁRIO FEEDBACK</Text>
        </TouchableOpacity>
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
