/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */

import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, Modal, Image, ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { BlurView } from '@react-native-community/blur';
import styles from './styles';
import Icon from 'react-native-vector-icons/AntDesign';
import Info from 'react-native-vector-icons/Octicons';
import Back from 'react-native-vector-icons/Ionicons';
import CheckBox from '@react-native-community/checkbox';
import { Aprox } from '../functions';
import { SapataQuadradaPT } from '../Strings';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import * as Funcoes from './Funcoes';

Info.loadFont();
Icon.loadFont();
Back.loadFont();

const SapataQuadrada = () => {

  const [NSPT, setNSPT] = useState(4);
  const [CPilar, setCPilar] = useState('');
  const [VCPS, setVCPS] = useState(1.05);
  const [TAdmT, setTAdmT] = useState(0);
  const [TAdmT2, setTAdmT2] = useState(0);
  const [TAdmM, setTAdmM] = useState(0);
  const [MediaM, setMediaM] = useState(0);
  const [LadoL, setLadoL] = useState(0);
  const [Recalque, setRecalque] = useState(0);
  const [Ttrab, setTtrab] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);
  const [InformationVisible, setInformationVisible] = useState(false);
  const [TensoesVisible, setTensoesVisible] = useState(false);
  const [resultadoVisible, setResultadoVisible] = useState(false);
  const [T1CheckBox, setT1CheckBox] = useState(false);
  const [T2CheckBox, setT2CheckBox] = useState(false);
  const [MCheckBox, setMCheckBox] = useState(false);
  const [Posicao, setPosicao] = useState(0);
  const [Poisson, setPoisson] = useState(0.3);
  const [Es, setEs] = useState('');
  const [Df, setDf] = useState('');
  const [Exp, setExp] = useState('');
  const [Braja, setBraja] = useState('');

  async function CalculoADM() {
    var AdmT = await Funcoes.TensãoTeixeira1(NSPT);
    var AdmT2 = await Funcoes.TensãoTeixeira2(NSPT, null);
    var AdmM = await Funcoes.TensãoMelo(NSPT);
    AdmT = AdmT.toFixed(2);
    AdmT2 = AdmT2.toFixed(2);
    setTAdmT(AdmT);
    setTAdmT2(AdmT2);
    setTAdmM(AdmM);
    setTensoesVisible(!TensoesVisible);
  }

  async function CalculoSapata() {
    setTensoesVisible(!TensoesVisible);
    var Area, Lado, TAdmSolo, Recalq;
    var AdmT = await Funcoes.TensãoTeixeira1(NSPT);
    var AdmT2 = await Funcoes.TensãoTeixeira2(NSPT, null);
    var AdmM = await Funcoes.TensãoMelo(NSPT);
    var Media = await Funcoes.MediaTensões(AdmT, AdmT2, parseFloat(AdmM), T1CheckBox, T2CheckBox, MCheckBox);
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
      setTtrab(TAdmSolo * 1000);
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
      setRecalque(Recalq * 10);
      setTtrab(TAdmSolo * 1000);
    }
    setModalVisible(true);
  }

  return (
    <View style={styles.container}>

      {/* LOGO SAPATA QUADRADA*/}
      <Image
        style={styles.imagemsapataquadrada}
        source={require('../../assets/sapataquadrada/sapataquadrada.png')} />

      {/* INPUT CARGA PILAR*/}
      <Text style={styles.titulocargapilar}>{SapataQuadradaPT.Pag1}</Text>
      <Text style={styles.subtitulocargapilar}>{SapataQuadradaPT.Pag5}</Text>
      <TextInput
        style={styles.inputcargapilar}
        placeholder={'Insira o valor da carga do pilar'}
        keyboardType="number-pad"
        value={CPilar}
        onChangeText={(text) => setCPilar(text)}
      />

      {/* PICKER DO NSPT*/}
      <Text style={styles.titulos}>{SapataQuadradaPT.Pag2}</Text>
      <View style={styles.viewpicker}>
        <Picker
          selectedValue={NSPT}
          onValueChange={(itemValue, itemIndex) =>
            setNSPT(itemValue)}>
          <Picker.Item label="4" value="4" />
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

      {/* PICKER DA CONTABILIZAÇÃO DO PESO DA SAPATA*/}
      <Text style={styles.titulos}>{SapataQuadradaPT.Pag3}</Text>
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

      {/*BOTÃO CALCULAR*/}
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity
          style={styles.botaocalcular}
          onPress={CalculoADM}
        >
          <Text style={styles.textobotaocalcular}>{SapataQuadradaPT.Pag4}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.botaoinfo}
          onPress={() => { setInformationVisible(!InformationVisible); }}>
          <Info name="info" size={hp(3.83337)} color="white" />
        </TouchableOpacity>
      </View>

      {modalVisible || TensoesVisible || InformationVisible || resultadoVisible ? <BlurView
        style={styles.absolute}
        blurType="light"
        blurAmount={5}
      /> : null}


      {/*MODAL TENSÕES*/}
      {CPilar === '' ?
        // MODAL ERRO //
        <Modal
          animationType="slide"
          transparent={true}

          visible={TensoesVisible}>
          <View style={styles.centeredView}>
            <View style={styles.modalViewErro}>
              <View style={{ alignItems: 'center' }}>
                <Text style={styles.ErroTitle}>{SapataQuadradaPT.ModalErro1}</Text>
              </View>
              <View style={styles.viewerro2}>
                <Text style={styles.erro}>{SapataQuadradaPT.ModalErro2}
                </Text>
              </View>
              <View style={{ flexDirection: 'row', paddingTop: hp(6.38895), justifyContent: 'center', marginBottom: hp(2.55558) }}>
                <TouchableOpacity
                  style={{ backgroundColor: '#905229', borderRadius: 30, width: wp(9.77995), height: hp(5.11116), justifyContent: 'center', alignItems: 'center' }}
                  onPress={() => { setTensoesVisible(!TensoesVisible); }}>
                  <Icon name="close" size={hp(3.83337)} color="white" />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
        :
        // MODAL TENSÃO //
        <Modal
          animationType="slide"
          transparent={true}

          visible={TensoesVisible}>
          <View style={styles.centeredView}>
            <View style={styles.modalViewTensoes}>
              <View style={{ alignItems: 'center', marginBottom: hp(1.27779) }}>
                <Text style={styles.tensoes}>{SapataQuadradaPT.ModalTensões1}</Text>
              </View>

              <View>
                <Text style={styles.resultado3}>{SapataQuadradaPT.ModalTensões3}</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 2 }}>
                  <Text style={{ fontWeight: 'bold', bottom: hp(0.76667), fontSize: hp(3.83337), color: 'white' }}>• </Text>
                  <Text style={styles.resultado2}>{TAdmT + SapataQuadradaPT.ModalKPA}</Text>
                </View>
              </View>

              <View>
                <Text style={styles.resultado3}>{SapataQuadradaPT.ModalTensões4}</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 2 }}>
                  <Text style={{ fontWeight: 'bold', bottom: hp(0.76667), fontSize: hp(3.83337), color: 'white' }}>• </Text>
                  <Text style={styles.resultado2}>{TAdmT2 + SapataQuadradaPT.ModalKPA}</Text>
                </View>
              </View>

              <View>
                <Text style={styles.resultado3}>{SapataQuadradaPT.ModalTensões5}</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 2 }}>
                  <Text style={{ fontWeight: 'bold', bottom: hp(0.76667), fontSize: hp(3.83337), color: 'white' }}>• </Text>
                  <Text style={styles.resultado2}>{TAdmM + SapataQuadradaPT.ModalKPA}</Text>
                </View>
              </View>

              <View style={{ alignItems: 'center' }}>
                <Text style={styles.metodos}>{SapataQuadradaPT.ModalTensões2}</Text>
              </View>

              <View style={{ flexDirection: 'row' }}>
                <CheckBox
                  tintColors={{ true: '#fff', false: '#fff' }}
                  disabled={false}
                  value={T1CheckBox}
                  onValueChange={(newValue) => setT1CheckBox(newValue)}
                />
                <Text style={styles.checkboxtext}>{SapataQuadradaPT.ModalTensões6}</Text>
              </View>

              <View style={{ flexDirection: 'row' }}>
                <CheckBox
                  tintColors={{ true: '#fff', false: '#fff' }}
                  disabled={false}
                  value={T2CheckBox}
                  onValueChange={(newValue) => setT2CheckBox(newValue)}
                />
                <Text style={styles.checkboxtext}>{SapataQuadradaPT.ModalTensões7}</Text>
              </View>

              <View style={{ flexDirection: 'row' }}>
                <CheckBox
                  tintColors={{ true: '#fff', false: '#fff' }}
                  disabled={false}
                  value={MCheckBox}
                  onValueChange={(newValue) => setMCheckBox(newValue)}
                />
                <Text style={styles.checkboxtext}>{SapataQuadradaPT.ModalTensões8}</Text>
              </View>


              <View style={{ flexDirection: 'row', paddingTop: hp(6.38895), justifyContent: 'center', marginBottom: hp(2.55558),
 }}>
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


      {/*MODAL SAPATA BRAJA*/}
      {T1CheckBox || T2CheckBox || MCheckBox ?
        // MODAL Input sapata braja //
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}>
          <View style={styles.centeredView}>
            <View style={styles.modalViewPicker}>
              <Text style={styles.pickerviewtitle}>Posição da Sapata</Text>
              <View style={styles.viewpickermodal}>
                <Picker
                  selectedValue={Posicao}
                  onValueChange={(itemValue, itemIndex) =>
                    setPosicao(itemValue)}>
                  <Picker.Item label="Centro da Fundação" value={0} />
                  <Picker.Item label="Canto da Fundação" value={1} />
                </Picker>
              </View>
              <Text style={styles.pickerviewtitle}>Coeficiente de Poisson</Text>
              <View style={styles.viewpickermodal}>
                <Picker
                  selectedValue={Poisson}
                  onValueChange={(itemValue, itemIndex) =>
                    setPoisson(itemValue)}>
                  <Picker.Item label="0,3" value={0.3} />
                  <Picker.Item label="0,4" value={0.4} />
                  <Picker.Item label="0,5" value={0.5} />
                </Picker>
              </View>
              <Text style={styles.pickerviewtitle}>Valor de Es ( kN/m² )</Text>
              <View style={styles.viewpickermodal}>
                <TextInput
                  style={styles.inputCoeficientes}
                  placeholder={'Insira o valor de Es'}
                  keyboardType="number-pad"
                  value={Es}
                  onChangeText={(text) => setEs(text)}
                />
              </View>
              <Text style={styles.pickerviewtitle}>Valor de Df ( m )</Text>
              <View style={styles.viewpickermodal}>
                <TextInput
                  style={styles.inputCoeficientes}
                  placeholder={'Insira o valor de Df'}
                  keyboardType="number-pad"
                  value={Df}
                  onChangeText={(text) => setDf(text)}
                />
              </View>
              <Text style={styles.pickerviewtitle2}>Espessura da Camada Deformavel ( m )</Text>
              <View style={styles.viewpickermodal}>
                <TextInput
                  style={styles.inputCoeficientes}
                  placeholder={'Insira a expessura da camada deformavel'}
                  keyboardType="number-pad"
                  value={Exp}
                  onChangeText={(text) => setExp(text)}
                />
              </View>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: hp(5.11), width: wp(48.89975) }}>
                <TouchableOpacity
                  style={{ backgroundColor: '#905229', borderRadius: 30, width: wp(9.77995), height: hp(5.11), justifyContent: 'center', alignItems: 'center' }}
                  onPress={() => {
                    setModalVisible(!modalVisible);
                    setTensoesVisible(!TensoesVisible);
                  }}>
                  <Back name="arrow-back" size={30} color="white" />
                </TouchableOpacity>

                <TouchableOpacity
                  style={{ backgroundColor: '#905229', borderRadius: 10, width: wp(29.33985), height: hp(5.11), justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}
                  onPress={() => {
                    setModalVisible(!modalVisible);
                    setResultadoVisible(!resultadoVisible);
                    setBraja((Funcoes.RecalqueBraja(Posicao,LadoL,LadoL,Df,Poisson,Exp,Ttrab,Es).toFixed(3) * 1000));
                  }}>
                  <Text style={styles.textoprosseguir}>CALCULAR</Text>
                </TouchableOpacity>
              </View>
            </ View>

          </View>
        </Modal>
        :
        // MODAL ERRO //
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
                <Text style={styles.erro}>{SapataQuadradaPT.ModalErro3}</Text>
              </View>
              <View style={{ flexDirection: 'row', paddingTop: hp(6.38895), justifyContent: 'center', marginBottom: hp(2.55558) }}>
                <TouchableOpacity
                  style={{ backgroundColor: '#905229', borderRadius: 30, width: wp(9.77995), height: hp(5.11), justifyContent: 'center', alignItems: 'center' }}
                  onPress={() => {
                    setModalVisible(!modalVisible);
                    setTensoesVisible(!TensoesVisible);
                  }}>
                  <Icon name="close" size={hp(3.83337)} color="white" />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
      }

      {/*MODAL RESULTADOS*/}
      {Posicao !== '' && Es !== '' && Df !== '' && Exp !== '' ?
        <Modal
          animationType="slide"
          transparent={true}
          visible={resultadoVisible}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>

              <View>
                <View style={{ alignItems: 'center' }}>
                  <Text style={styles.resultado}>{SapataQuadradaPT.Modal1}</Text>
                </View>

                <View>
                  <Text style={styles.resultado3}>{SapataQuadradaPT.Modal2}</Text>
                  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={{ fontWeight: 'bold', bottom: hp(0.76667), fontSize: hp(3.83337), color: 'white' }}>• </Text>
                    <Text style={styles.resultado2}>Quadrada</Text>
                  </View>
                </View>

                <View>
                  <Text style={styles.resultado3}>{SapataQuadradaPT.Modal5}</Text>
                  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={{ fontWeight: 'bold', bottom: hp(0.76667), fontSize: hp(3.83337), color: 'white' }}>• </Text>
                    <Text style={styles.resultado2}>{MediaM + SapataQuadradaPT.ModalKPA}</Text>
                  </View>
                </View>

                <View>
                  <Text style={styles.resultado3}>{SapataQuadradaPT.Modal6}</Text>
                  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={{ fontWeight: 'bold', bottom: hp(0.76667), fontSize: hp(3.83337), color: 'white' }}>• </Text>
                    <Text style={styles.resultado2}>{Ttrab + SapataQuadradaPT.ModalKPA}</Text>
                  </View>
                </View>

                <View>
                  <Text style={styles.resultado3}>{SapataQuadradaPT.Modal7}</Text>
                  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={{ fontWeight: 'bold', bottom: hp(0.76667), fontSize: hp(3.83337), color: 'white' }}>• </Text>
                    <Text style={styles.resultado2}>{LadoL + SapataQuadradaPT.ModalM}</Text>
                  </View>
                </View>

                <View>
                  <Text style={styles.resultado3}>{SapataQuadradaPT.Modal8}</Text>
                  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={{ fontWeight: 'bold', bottom: hp(0.76667), fontSize: hp(3.83337), color: 'white' }}>• </Text>
                    <Text style={styles.resultado2}>{Recalque + SapataQuadradaPT.ModalCm}</Text>
                  </View>

                </View>

                <View>
                  <Text style={styles.resultado3}>{SapataQuadradaPT.Modal9}</Text>
                  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={{ fontWeight: 'bold', bottom: hp(0.76667), fontSize: hp(3.83337), color: 'white' }}>• </Text>
                    <Text style={styles.resultado2}>{Braja + SapataQuadradaPT.ModalCm}</Text>
                  </View>

                </View>
              </View>

              <View style={{ flexDirection: 'row', justifyContent: 'center', paddingTop: hp(2.55558) }}>
                <TouchableOpacity
                  style={{ right: wp(12.22493), backgroundColor: '#905229', borderRadius: 30, width: wp(9.77995), height: hp(5.11), justifyContent: 'center', alignItems: 'center' }}
                  onPress={() => {
                    setModalVisible(!modalVisible);
                    setResultadoVisible(!resultadoVisible);
                  }}>
                  <Back name="arrow-back" size={30} color="white" />
                </TouchableOpacity>
                <TouchableOpacity
                  style={{ backgroundColor: '#905229', borderRadius: 30, width: wp(9.77995), height: hp(5.11), justifyContent: 'center', alignItems: 'center', marginRight: wp(7.33496) }}
                  onPress={() => {
                    setResultadoVisible(!resultadoVisible);
                    setT1CheckBox(false);
                    setT2CheckBox(false);
                    setMCheckBox(false);
                  }}>
                  <Icon name="close" size={hp(3.83337)} color="white" />
                </TouchableOpacity>
              </View>

            </View>
          </View>
        </Modal>
        :
        <Modal
          animationType="slide"
          transparent={true}
          visible={resultadoVisible}>
          <View style={styles.centeredView}>
            <View style={styles.modalViewErro}>
              <View style={{ alignItems: 'center' }}>
                <Text style={styles.resultado}>{SapataQuadradaPT.ModalErro1}</Text>
              </View>
              <View style={styles.viewerro}>
                <Text style={styles.erro}>{SapataQuadradaPT.ModalErro3}
                </Text>
              </View>
              <View style={{ flexDirection: 'row', paddingTop: hp(6.38895), justifyContent: 'center', marginBottom: hp(2.55558) }}>
                <TouchableOpacity
                  style={{ backgroundColor: '#905229', borderRadius: 30, width: wp(9.77995), height: hp(5.11), justifyContent: 'center', alignItems: 'center' }}
                  onPress={() => {
                    setResultadoVisible(!resultadoVisible);
                    setModalVisible(!modalVisible);
                  }}>
                  <Icon name="close" size={hp(3.83337)} color="white" />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
      }


      {/*MODAL INFORMAÇÕES*/}
      <Modal
        animationType="slide"
        transparent={true}

        visible={InformationVisible}>
        <View style={styles.centeredView}>
          <View style={styles.modalViewInfo}>

            <ScrollView
              style={{ marginTop: hp(1.91668) }}
              showsVerticalScrollIndicator={false}>
              <View style={styles.viewInfo}>

                <Text style={styles.textInfo}>{SapataQuadradaPT.Info2}</Text>
                <Text style={styles.textInfo2}>{SapataQuadradaPT.Info3}</Text>
                <Image
                  source={require('../../assets/info/info1.png')}
                  style={{ width: wp(68.4596577), height: hp(11.50012778), resizeMode: 'contain' }} />
                <Text style={styles.textInfo3}>{SapataQuadradaPT.Info4}</Text>
                <Text style={styles.textInfo3}>{SapataQuadradaPT.InfoEspaço}</Text>
                <Image
                  source={require('../../assets/info/info3.png')}
                  style={{ width: wp(68.4596577), height: hp(11.50012778), resizeMode: 'contain', right: 20, marginTop: 10, marginBottom: 10 }} />
                <Text style={styles.textInfo2}>{SapataQuadradaPT.Info5}</Text>
                <Text style={styles.textInfo3}>{SapataQuadradaPT.Info6}</Text>
                <Text style={styles.textInfo3}>{SapataQuadradaPT.InfoEspaço}</Text>
                <Text style={styles.textInfo4}>{SapataQuadradaPT.Info7}</Text>
                <Image
                  source={require('../../assets/info/info2.png')}
                  style={{ width: wp(68.4596577), height: hp(8.944544), resizeMode: 'contain' }} />
                <Text style={styles.textInfo3}>{SapataQuadradaPT.Info8}</Text>
                <Text style={styles.textInfo3}>{SapataQuadradaPT.InfoEspaço}</Text>
                <Text style={styles.textInfo3}>{SapataQuadradaPT.Info9}</Text>
                <Text style={styles.textInfo5}>{SapataQuadradaPT.Info10}</Text>
                <Text style={styles.textInfo5}>{SapataQuadradaPT.Info11}</Text>
                <Text style={styles.textInfo5}>{SapataQuadradaPT.Info12}</Text>

              </View>

            </ScrollView>

            <View style={{ flexDirection: 'row', paddingTop: hp(1.91668), justifyContent: 'center', marginBottom: hp(2.55558) }}>
              <TouchableOpacity
                style={{ backgroundColor: '#905229', borderRadius: 30, width: wp(9.77995), height: hp(5.11), justifyContent: 'center', alignItems: 'center' }}
                onPress={() => {
                  setInformationVisible(!InformationVisible);
                }}>
                <Icon name="close" size={hp(3.8333)} color="white" />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

    </View>
  );
};
export default SapataQuadrada;
