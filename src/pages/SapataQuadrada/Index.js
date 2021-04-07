/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import 'react-native-gesture-handler';
import React, { useState } from 'react';

import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Modal,
  Image,
} from 'react-native';

import { Picker } from '@react-native-picker/picker';
import { BlurView } from '@react-native-community/blur';
import styles from './styles';
import Icon from 'react-native-vector-icons/AntDesign';
import Info from 'react-native-vector-icons/Octicons';
import { Aprox } from '../functions';
import { SapataQuadradaPT } from '../Strings';

Info.loadFont();
Icon.loadFont();


const SapataQuadrada = () => {

  const [NSPT, setNSPT] = useState(5);
  const [CPilar, setCPilar] = useState('');
  const [VCPS, setVCPS] = useState(1.05);
  const [modalVisible, setModalVisible] = useState(false);
  const [TAdmT, setTAdmT] = useState(0);
  const [TAdmM, setTAdmM] = useState(0);
  const [MediaM, setMediaM] = useState(0);
  const [LadoL, setLadoL] = useState(0);
  const [Recalque, setRecalque] = useState(0);
  const [Ttrab, setTtrab] = useState(0);
  const [InformationVisible, setInformationVisible] = useState(false);


  async function CalculoSapata() {
    var Area, Lado, TAdmSolo, Recalq;
    var AdmT = 20 * NSPT;
    var AdmM = (0.1 * (Math.sqrt(NSPT) - 1) * 1000).toFixed(2);
    var Media = ((AdmT + parseFloat(AdmM)) / 2);
    Area = (CPilar / Media) * VCPS;

    Lado = Math.sqrt(Area);
    if (Lado < 0.6) {
      Lado = 0.6;
    }
    Lado = Lado.toFixed(2);
    if ((Lado * 100) % 5 === 0) {
      TAdmSolo = CPilar / Area / 1000;
      TAdmSolo = TAdmSolo.toFixed(3);
      Recalq =
        27 *
        TAdmSolo *
        (Math.pow(Lado, 0.7) / NSPT);
      Recalq = Recalq.toFixed(2);
      setTAdmT(AdmT);
      setTAdmM(AdmM);
      setMediaM(Media);
      setLadoL(Lado);
      setRecalque(Recalq);
      setTtrab(TAdmSolo);
    }
    else if ((Lado * 100) % 5 !== 0) {
      Lado = Aprox(Lado);
      Area = (Lado * Lado);
      TAdmSolo = CPilar / Area / 1000;
      TAdmSolo = TAdmSolo.toFixed(3);
      Recalq =
        27 *
        TAdmSolo *
        (Math.pow(Lado, 0.7) / NSPT);
      Recalq = Recalq.toFixed(2);
      setTAdmT(AdmT);
      setTAdmM(AdmM);
      setMediaM(Media);
      setLadoL(Lado);
      setRecalque(Recalq);
      setTtrab(TAdmSolo);
    }
    setModalVisible(true);
  }

  return (
    <View style={styles.container}>
      <Image
      source={require('../../assets/sapataquadrada/sapataquadrada.png')}/>
      <Text style={styles.textlocation1}>{SapataQuadradaPT.Pag1}</Text>
      <TextInput
        style={styles.textinput}
        placeholder={'Insira o valor da carga do pilar'}
        keyboardType="number-pad"
        value={CPilar}
        onChangeText={(text) => setCPilar(text)}
      />
      <Text style={styles.textlocation}>{SapataQuadradaPT.Pag2}</Text>
      <View style={styles.viewpicker}>
        <Picker
          selectedValue={NSPT}
          onValueChange={(itemValue, itemIndex) =>
            setNSPT(itemValue)}>
          <Picker.Item label="5" value="5" />
          <Picker.Item label="6" value="6" />
          <Picker.Item label="7" value="7" />
          <Picker.Item label="8" value="8" />
          <Picker.Item label="9" value="9" />
          <Picker.Item label="10" value="10" />
          <Picker.Item label="11" value="11" />
          <Picker.Item label="12" value="12" />
          <Picker.Item label="13" value="13" />
          <Picker.Item label="14" value="14" />
          <Picker.Item label="15" value="15" />
          <Picker.Item label="16" value="16" />
          <Picker.Item label="17" value="17" />
          <Picker.Item label="18" value="18" />
          <Picker.Item label="19" value="19" />
          <Picker.Item label="20" value="20" />
        </Picker>
      </View>
      <Text style={styles.textlocation}>{SapataQuadradaPT.Pag3}</Text>
      <View style={styles.viewpicker}>
        <Picker
          selectedValue={VCPS}
          onValueChange={(itemValue, itemIndex) =>
            setVCPS(itemValue)}>
          <Picker.Item label="1,05" value="1.05" />
          <Picker.Item label="1,06" value="1.06" />
          <Picker.Item label="1,07" value="1.07" />
          <Picker.Item label="1,08" value="1.08" />
          <Picker.Item label="1,09" value="1.09" />
          <Picker.Item label="1,10" value="1.10" />
        </Picker>
      </View>
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity
          style={styles.botaocalcular}
          onPress={CalculoSapata}
        >
          <Text style={styles.textobotaocalcular}>{SapataQuadradaPT.Pag4}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.botaoinfo}
        onPress={() => {setInformationVisible(!InformationVisible);}}>
          <Info name="info" size={30} color="white" />
        </TouchableOpacity>
      </View>

      <Modal
          animationType="slide"
          transparent={true}

          visible={InformationVisible}>
          <View style={styles.centeredView}>
            <View style={styles.modalViewInfo}>
              <View style={styles.viewInfo}>
                <Text style={styles.textInfo}>{SapataQuadradaPT.Info2}</Text>
                <Text style={styles.textInfo2}>{SapataQuadradaPT.Info3}</Text>
                <Image
                source={require('../../assets/info/info1.png')}
                style={{width: 280, height: 90, resizeMode: 'contain'}}/>
               <Text style={styles.textInfo3}>{SapataQuadradaPT.Info4}</Text>
               <Text style={styles.textInfo4}>{SapataQuadradaPT.Info5}</Text>
               <Image
                source={require('../../assets/info/info2.png')}
                style={{width: 280, height: 70, resizeMode: 'contain'}}/>
              <Text style={styles.textInfo3}>{SapataQuadradaPT.Info6}</Text>
              <Text style={styles.textInfo3}>{SapataQuadradaPT.Info7}</Text>
              <Text style={styles.textInfo5}>{SapataQuadradaPT.Info8}</Text>
              <Text style={styles.textInfo5}>{SapataQuadradaPT.Info9}</Text>
              </View>
              <View style={{ flexDirection: 'row', paddingTop: 15, justifyContent: 'center', marginBottom: 20 }}>
                <TouchableOpacity
                  style={{ backgroundColor: '#ff5555', borderRadius: 30, width: 40, height: 40, justifyContent: 'center', alignItems: 'center' }}
                  onPress={() => {
                    setInformationVisible(!InformationVisible);
                  }}>
                  <Icon name="close" size={30} color="white" />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>

      {modalVisible ? <BlurView
        style={styles.absolute}
        blurType="light"
        blurAmount={5}
      /> : null}

      {CPilar === '' ?
        <Modal
          animationType="slide"
          transparent={true}

          visible={modalVisible}>
          <View style={styles.centeredView}>
            <View style={styles.modalViewErro}>
              <View style={{ alignItems: 'center' }}>
                <Text style={styles.resultado}>{SapataQuadradaPT.ModalErro1}</Text>
              </View>
              <View style={styles.viewerro}>
                <Text style={styles.erro}>{SapataQuadradaPT.ModalErro2}
                </Text>
              </View>
              <View style={{ flexDirection: 'row', paddingTop: 50, justifyContent: 'center', marginBottom: 20 }}>
                <TouchableOpacity
                  style={{ backgroundColor: '#ff5555', borderRadius: 30, width: 40, height: 40, justifyContent: 'center', alignItems: 'center' }}
                  onPress={() => {
                    setModalVisible(!modalVisible);
                  }}>
                  <Icon name="close" size={30} color="white" />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
        :
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>

              <View>
                <View style={{ alignItems: 'center' }}>
                  <Text style={styles.resultado}>{SapataQuadradaPT.Modal1}</Text>
                </View>

                <View>
                <Text style={styles.resultado3}>{SapataQuadradaPT.Modal2}</Text>
                <View style={{flexDirection:'row', alignItems: 'center'}}>
                <Text style={{fontWeight:'bold', bottom: 6, fontSize:30,color:'white'}}>• </Text>
                <Text style={styles.resultado2}>Quadrada</Text>
                </View>
                </View>

                <View>
                <Text style={styles.resultado3}>{SapataQuadradaPT.Modal3}</Text>
                <View style={{flexDirection:'row', alignItems: 'center'}}>
                <Text style={{fontWeight:'bold', bottom: 6, fontSize:30,color:'white'}}>• </Text>
                <Text style={styles.resultado2}>{TAdmM + SapataQuadradaPT.ModalKPA}</Text>
                </View>
                </View>

                <View>
                <Text style={styles.resultado3}>{SapataQuadradaPT.Modal4}</Text>
                <View style={{flexDirection:'row', alignItems: 'center'}}>
                <Text style={{fontWeight:'bold', bottom: 6, fontSize:30,color:'white'}}>• </Text>
                <Text style={styles.resultado2}>{TAdmM + SapataQuadradaPT.ModalKPA}</Text>
                </View>
                </View>

                <View>
                <Text style={styles.resultado3}>{SapataQuadradaPT.Modal5}</Text>
                <View style={{flexDirection:'row', alignItems: 'center'}}>
                <Text style={{fontWeight:'bold', bottom: 6, fontSize:30,color:'white'}}>• </Text>
                <Text style={styles.resultado2}>{MediaM + SapataQuadradaPT.ModalKPA}</Text>
                </View>
                </View>

                <View>
                <Text style={styles.resultado3}>{SapataQuadradaPT.Modal6 }</Text>
                <View style={{flexDirection:'row', alignItems: 'center'}}>
                <Text style={{fontWeight:'bold', bottom: 6, fontSize:30,color:'white'}}>• </Text>
                <Text style={styles.resultado2}>{Ttrab + SapataQuadradaPT.ModalMPA}</Text>
                </View>
                </View>

                <View>
                <Text style={styles.resultado3}>{SapataQuadradaPT.Modal7}</Text>
                <View style={{flexDirection:'row', alignItems: 'center'}}>
                <Text style={{fontWeight:'bold', bottom: 6, fontSize:30,color:'white'}}>• </Text>
                <Text style={styles.resultado2}>{LadoL + SapataQuadradaPT.ModalM}</Text>
                </View>
                </View>

                <View>
                <Text style={styles.resultado3}>{SapataQuadradaPT.Modal8 }</Text>
                <View style={{flexDirection:'row', alignItems: 'center'}}>
                <Text style={{fontWeight:'bold', bottom: 6, fontSize:30,color:'white'}}>• </Text>
                <Text style={styles.resultado2}>{Recalque + SapataQuadradaPT.ModalCm}</Text>
                </View>

                  </View>
              </View>

              <View style={{ flexDirection: 'row', paddingTop: 0, justifyContent: 'center' }}>
                <TouchableOpacity
                  style={{ backgroundColor: '#ff5555', borderRadius: 30, width: 40, height: 40, justifyContent: 'center', alignItems: 'center' }}
                  onPress={() => {
                    setModalVisible(!modalVisible);
                  }}>
                  <Icon name="close" size={30} color="white" />
                </TouchableOpacity>
              </View>

            </View>
          </View>
        </Modal>
      }

    </View>
  );
};
export default SapataQuadrada;
