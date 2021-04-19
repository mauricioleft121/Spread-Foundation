/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */

import 'react-native-gesture-handler';
import React, { useState, useEffect } from 'react';

import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Modal,
  Image,
  ScrollView,
} from 'react-native';

import { Picker } from '@react-native-picker/picker';
import { BlurView } from '@react-native-community/blur';
import styles from './styles';
import Icon from 'react-native-vector-icons/AntDesign';
import Info from 'react-native-vector-icons/Octicons';
import Back from 'react-native-vector-icons/Ionicons';
import CheckBox from '@react-native-community/checkbox';
import { Aprox } from '../functions';
import { SapataQuadradaPT } from '../Strings';
import * as Funcoes from './Funcoes';

Info.loadFont();
Icon.loadFont();
Back.loadFont();


const SapataQuadrada = () => {

  const [NSPT, setNSPT] = useState(5);
  const [CPilar, setCPilar] = useState('');
  const [VCPS, setVCPS] = useState(1.05);
  const [modalVisible, setModalVisible] = useState(false);
  const [TAdmT, setTAdmT] = useState(0);
  const [TAdmT2, setTAdmT2] = useState(0);
  const [TAdmM, setTAdmM] = useState(0);
  const [MediaM, setMediaM] = useState(0);
  const [LadoL, setLadoL] = useState(0);
  const [Recalque, setRecalque] = useState(0);
  const [Ttrab, setTtrab] = useState(0);
  const [InformationVisible, setInformationVisible] = useState(false);
  const [TensoesVisible, setTensoesVisible] = useState(false);
  const [ErrorVisible, setErrorVisible] = useState(false);
  const [T1CheckBox, setT1CheckBox] = useState(false);
  const [T2CheckBox, setT2CheckBox] = useState(false);
  const [MCheckBox, setMCheckBox] = useState(false);

  async function CalculoADM() {
    var AdmT = await Funcoes.TensãoTeixeira1(NSPT);
    var AdmT2 = await Funcoes.TensãoTeixeira2(NSPT,null);
    var AdmM = await Funcoes.TensãoMelo(NSPT);
    setTAdmT(AdmT);
    setTAdmT2(AdmT2);
    setTAdmM(AdmM);

    setTensoesVisible(!TensoesVisible);
  }

  async function CalculoSapata() {
    setTensoesVisible(!TensoesVisible);
    var Area, Lado, TAdmSolo, Recalq;
    var AdmT = await Funcoes.TensãoTeixeira1(NSPT);
    var AdmT2 = await Funcoes.TensãoTeixeira2(NSPT,null);
    var AdmM = await Funcoes.TensãoMelo(NSPT);

    var Media = await Funcoes.MediaTensões(AdmT,AdmT2,parseFloat(AdmM),T1CheckBox,T2CheckBox,MCheckBox);

    setMediaM(Media);
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
          onPress={CalculoADM}
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

              <ScrollView
              style={{marginTop: 15}}
              showsVerticalScrollIndicator={false}>
                <View style={styles.viewInfo}>

                <Text style={styles.textInfo}>{SapataQuadradaPT.Info2}</Text>
                <Text style={styles.textInfo2}>{SapataQuadradaPT.Info3}</Text>
                <Image
                source={require('../../assets/info/info1.png')}
                style={{width: 280, height: 90, resizeMode: 'contain'}}/>
               <Text style={styles.textInfo3}>{SapataQuadradaPT.Info4}</Text>
               <Text style={styles.textInfo3}>{SapataQuadradaPT.InfoEspaço}</Text>
               <Image
                source={require('../../assets/info/info3.png')}
                style={{width: 280, height: 90, resizeMode: 'contain', right: 20, marginTop: 10,marginBottom: 10}}/>
               <Text style={styles.textInfo2}>{SapataQuadradaPT.Info5}</Text>
               <Text style={styles.textInfo3}>{SapataQuadradaPT.Info6}</Text>
               <Text style={styles.textInfo3}>{SapataQuadradaPT.InfoEspaço}</Text>
               <Text style={styles.textInfo4}>{SapataQuadradaPT.Info7}</Text>
               <Image
                source={require('../../assets/info/info2.png')}
                style={{width: 280, height: 70, resizeMode: 'contain'}}/>
              <Text style={styles.textInfo3}>{SapataQuadradaPT.Info8}</Text>
              <Text style={styles.textInfo3}>{SapataQuadradaPT.InfoEspaço}</Text>
              <Text style={styles.textInfo3}>{SapataQuadradaPT.Info9}</Text>
              <Text style={styles.textInfo5}>{SapataQuadradaPT.Info10}</Text>
              <Text style={styles.textInfo5}>{SapataQuadradaPT.Info11}</Text>
              <Text style={styles.textInfo5}>{SapataQuadradaPT.Info12}</Text>

              </View>

              </ScrollView>

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




        {T1CheckBox || T2CheckBox || MCheckBox ?
        <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>

            <View>
              <View style={{flexDirection: 'row' , justifyContent: 'center'}}>
              <TouchableOpacity
                  style={{right: 80, top: 10 }}
                  onPress={() => {setModalVisible(!modalVisible);
                  setTensoesVisible(!TensoesVisible);}}>
                  <Back name="arrow-back" size={30} color="white" />
                </TouchableOpacity>
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
                  setT1CheckBox(false);
                  setT2CheckBox(false);
                  setMCheckBox(false);
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
            <View style={styles.modalViewErro}>
              <View style={{ alignItems: 'center' }}>
                <Text style={styles.resultado}>{SapataQuadradaPT.ModalErro1}</Text>
              </View>
              <View style={styles.viewerro}>
                <Text style={styles.erro}>{SapataQuadradaPT.ModalErro3}
                </Text>
              </View>
              <View style={{ flexDirection: 'row', paddingTop: 50, justifyContent: 'center', marginBottom: 20 }}>
                <TouchableOpacity
                  style={{ backgroundColor: '#ff5555', borderRadius: 30, width: 40, height: 40, justifyContent: 'center', alignItems: 'center' }}
                  onPress={() => {setModalVisible(!modalVisible);
                  setTensoesVisible(!TensoesVisible);}}>
                  <Icon name="close" size={30} color="white" />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
        }




        <Modal
          animationType="slide"
          transparent={true}

          visible={ErrorVisible}>
          <View style={styles.centeredView}>
            <View style={styles.modalViewErro}>
              <View style={{ alignItems: 'center' }}>
                <Text style={styles.resultado}>{SapataQuadradaPT.ModalErro1}</Text>
              </View>
              <View style={styles.viewerro}>
                <Text style={styles.erro}>{SapataQuadradaPT.ModalErro3}
                </Text>
              </View>
              <View style={{ flexDirection: 'row', paddingTop: 50, justifyContent: 'center', marginBottom: 20 }}>
                <TouchableOpacity
                  style={{ backgroundColor: '#ff5555', borderRadius: 30, width: 40, height: 40, justifyContent: 'center', alignItems: 'center' }}
                  onPress={() => {setErrorVisible(!ErrorVisible);}}>
                  <Icon name="close" size={30} color="white" />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>


      {modalVisible || TensoesVisible || InformationVisible ? <BlurView
        style={styles.absolute}
        blurType="light"
        blurAmount={5}
      /> : null}

      {CPilar === '' ?
        <Modal
          animationType="slide"
          transparent={true}

          visible={TensoesVisible}>
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
                  onPress={() => {setTensoesVisible(!TensoesVisible);}}>
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

          visible={TensoesVisible}>
          <View style={styles.centeredView}>
            <View style={styles.modalViewTensoes}>
              <View style={{ alignItems: 'center' ,marginBottom: 20, flexDirection: 'row'}}>
                <Text style={styles.tensoes}>{SapataQuadradaPT.ModalTensões1}</Text>
              </View>

              <View>
                <Text style={styles.resultado3}>{SapataQuadradaPT.ModalTensões3}</Text>
                  <View style={{flexDirection:'row', alignItems: 'center'}}>
                    <Text style={{fontWeight:'bold', bottom: 6, fontSize:30,color:'white'}}>• </Text>
                    <Text style={styles.resultado2}>{TAdmT + SapataQuadradaPT.ModalKPA}</Text>
                  </View>
              </View>

                <View>
                  <Text style={styles.resultado3}>{SapataQuadradaPT.ModalTensões4}</Text>
                    <View style={{flexDirection:'row', alignItems: 'center'}}>
                      <Text style={{fontWeight:'bold', bottom: 6, fontSize:30,color:'white'}}>• </Text>
                      <Text style={styles.resultado2}>{TAdmT2 + SapataQuadradaPT.ModalKPA}</Text>
                    </View>
                </View>

                <View>
                  <Text style={styles.resultado3}>{SapataQuadradaPT.ModalTensões5}</Text>
                    <View style={{flexDirection:'row', alignItems: 'center'}}>
                      <Text style={{fontWeight:'bold', bottom: 6, fontSize:30,color:'white'}}>• </Text>
                      <Text style={styles.resultado2}>{TAdmM + SapataQuadradaPT.ModalKPA}</Text>
                    </View>
                </View>

              <View style={{ alignItems: 'center' }}>
                <Text style={styles.metodos}>{SapataQuadradaPT.ModalTensões2}</Text>
              </View>

              <View style={{flexDirection: 'row'}}>
              <CheckBox
                tintColors={{true: '#fff', false: '#fff'}}
                disabled={false}
                value={T1CheckBox}
                onValueChange={(newValue) => setT1CheckBox(newValue)}
              />
              <Text style={styles.checkboxtext}>{SapataQuadradaPT.ModalTensões6}</Text>
              </View>

              <View style={{flexDirection: 'row'}}>
              <CheckBox
                tintColors={{true: '#fff', false: '#fff'}}
                disabled={false}
                value={T2CheckBox}
                onValueChange={(newValue) => setT2CheckBox(newValue)}
              />
              <Text style={styles.checkboxtext}>{SapataQuadradaPT.ModalTensões7}</Text>
              </View>

              <View style={{flexDirection: 'row'}}>
              <CheckBox
                tintColors={{true: '#fff', false: '#fff'}}
                disabled={false}
                value={MCheckBox}
                onValueChange={(newValue) => setMCheckBox(newValue)}
              />
              <Text style={styles.checkboxtext}>{SapataQuadradaPT.ModalTensões8}</Text>
              </View>


              <View style={{ flexDirection: 'row', paddingTop: 50, justifyContent: 'center', marginBottom: 20 }}>
                <TouchableOpacity
                  style={styles.botaoprosseguir}
                  onPress={CalculoSapata}>
                  <Text style={styles.textoprosseguir}>CONTINUAR</Text>
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
