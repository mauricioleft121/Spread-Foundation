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
  ScrollView,
} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Picker } from '@react-native-picker/picker';
import { BlurView } from '@react-native-community/blur';
import CheckBox from '@react-native-community/checkbox';
import Icon from 'react-native-vector-icons/AntDesign';
import Info from 'react-native-vector-icons/Octicons';
import Back from 'react-native-vector-icons/Ionicons';
import IMAGESVG from '../../assets/info/ImagemSapataInfo.svg';


import styles from './styles';
import { Aprox } from '../functions';
import { SapataRetangularPT } from '../Strings';
import * as Funcoes from './Funcoes';

Info.loadFont();
Icon.loadFont();
Back.loadFont();


const SapataRetangular = () => {

  const [NSPT, setNSPT] = useState(5);
  const [CPilar, setCPilar] = useState('');
  const [VCPS, setVCPS] = useState(1.05);
  const [modalVisible, setModalVisible] = useState(false);
  const [TAdmT, setTAdmT] = useState(0);
  const [TAdmT2, setTAdmT2] = useState(0);
  const [TAdmM, setTAdmM] = useState(0);
  const [MediaM, setMediaM] = useState(0);
  const [LadoL, setLadoL] = useState('');
  const [LadoB, setLadoB] = useState('');
  const [DimL, setDimL] = useState(0);
  const [DimB, setDimB] = useState(0);
  const [Recalque, setRecalque] = useState(0);
  const [Ttrab, setTtrab] = useState(0);
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
    var Area, TAdmSolo, Recalq;
    var AdmT = await Funcoes.TensãoTeixeira1(NSPT);
    var AdmT2 = await Funcoes.TensãoTeixeira2(NSPT, null);
    var AdmM = await Funcoes.TensãoMelo(NSPT);
    var Media = await Funcoes.MediaTensões(AdmT, AdmT2, parseFloat(AdmM), T1CheckBox, T2CheckBox, MCheckBox);
    setMediaM(Media);

    Area = (CPilar / Media) * VCPS;

    var MenorLado = LadoB;
    var MaiorLado = LadoL;

    var MenorDim = ((MenorLado - MaiorLado) / 2) + (Math.sqrt(Area + (0.25 * Math.pow((MaiorLado - MenorLado), 2))));
    MenorDim = await Aprox(MenorDim);
    if (MenorDim < 0.60) {
      MenorDim = 0.60;
    }
    var MaiorDim = (Area / MenorDim);
    MaiorDim = await Aprox(MaiorDim);
    if (MaiorDim < 0.60) {
      MenorDim = 0.60;
    }

    Area = MenorDim * MaiorDim;

    TAdmSolo = CPilar / Area / 1000;
    TAdmSolo = TAdmSolo.toFixed(3);

    Recalq = 27 * (TAdmSolo * (Math.pow(MenorDim, 0.7) / NSPT));
    Recalq = Recalq.toFixed(2);

    setTAdmT(AdmT);
    setTAdmM(AdmM);
    setRecalque(Recalq * 10);
    setTtrab(TAdmSolo * 1000);
    setDimL(MaiorDim);
    setDimB(MenorDim);

    setModalVisible(true);
  }

  function cleanFields() {
    setT1CheckBox(false);
    setT2CheckBox(false);
    setMCheckBox(false);
    setDf('');
    setEs('');
    setExp('');
    setCPilar('');
    setVCPS(1.05);
    setNSPT(4);
    setLadoL('');
    setLadoB('');
    setPoisson(0.3);
    setPosicao(0);
  }

  return (
        <ScrollView style={styles.containerScrollView}>
                <View style={styles.container}>

      <Image
        source={require('../../assets/sapataretangular/sapataretangular.png')} />
      <Text style={styles.textlocation1}>{SapataRetangularPT.Pag1}</Text>
      <Text style={styles.subtitulocargapilar}>{SapataRetangularPT.Pag7}</Text>
      <TextInput
        style={styles.textinput}
        placeholder={'Insira o valor da carga do pilar'}
        keyboardType="number-pad"
        value={CPilar}
        onChangeText={(text) => setCPilar(text.replace(',', '.'))}
      />
      <Text style={styles.textlocation2}>{SapataRetangularPT.Pag5}</Text>
      <TextInput
        style={styles.textinput}
        placeholder={'Insira o valor do menor lado do pilar'}
        keyboardType="number-pad"
        value={LadoB}
        onChangeText={(text) => setLadoB(text.replace(',', '.'))}
      />
      <Text style={styles.textlocation2}>{SapataRetangularPT.Pag6}</Text>
      <TextInput
        style={styles.textinput}
        placeholder={'Insira o valor do maior lado do pilar'}
        keyboardType="number-pad"
        value={LadoL}
        onChangeText={(text) => setLadoL(text.replace(',', '.'))}
      />
      <Text style={styles.textlocation}>{SapataRetangularPT.Pag2}</Text>
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
      <Text style={styles.textlocation}>{SapataRetangularPT.Pag3}</Text>
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
          <Text style={styles.textobotaocalcular}>{SapataRetangularPT.Pag4}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.botaoinfo}
          onPress={() => { setInformationVisible(!InformationVisible); }}>
          <Info name="info" size={hp(3.8333)} color="white" />
        </TouchableOpacity>
      </View>

      {modalVisible || TensoesVisible || InformationVisible || resultadoVisible ? <BlurView
        style={styles.absolute}
        blurType="light"
        blurAmount={5}
      /> : null}

      {CPilar === '' || LadoL === '' || LadoB === '' ?
        // MODAL ERRO //
        <Modal
          animationType="slide"
          transparent={true}

          visible={TensoesVisible}>
          <View style={styles.centeredView}>
            <View style={styles.modalViewErro}>
              <View style={{ alignItems: 'center' }}>
                <Text style={styles.ErroTitle}>{SapataRetangularPT.ModalErro1}</Text>
              </View>
              <View style={styles.viewerro2}>
                <Text style={styles.erro}>{SapataRetangularPT.ModalErro2}
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
                <Text style={styles.tensoes}>{SapataRetangularPT.ModalTensões1}</Text>
              </View>

              <View>
                <Text style={styles.resultado3}>{SapataRetangularPT.ModalTensões3}</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 2 }}>
                  <Text style={{ fontWeight: 'bold', bottom: hp(0.76667), fontSize: hp(3.83337), color: 'white' }}>• </Text>
                  <Text style={styles.resultado2}>{TAdmT + SapataRetangularPT.ModalKPA}</Text>
                </View>
              </View>

              <View>
                <Text style={styles.resultado3}>{SapataRetangularPT.ModalTensões4}</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 2 }}>
                  <Text style={{ fontWeight: 'bold', bottom: hp(0.76667), fontSize: hp(3.83337), color: 'white' }}>• </Text>
                  <Text style={styles.resultado2}>{TAdmT2 + SapataRetangularPT.ModalKPA}</Text>
                </View>
              </View>

              <View>
                <Text style={styles.resultado3}>{SapataRetangularPT.ModalTensões5}</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 2 }}>
                  <Text style={{ fontWeight: 'bold', bottom: hp(0.76667), fontSize: hp(3.83337), color: 'white' }}>• </Text>
                  <Text style={styles.resultado2}>{TAdmM + SapataRetangularPT.ModalKPA}</Text>
                </View>
              </View>

              <View style={{ alignItems: 'center' }}>
                <Text style={styles.metodos}>{SapataRetangularPT.ModalTensões2}</Text>
              </View>

              <View style={{ flexDirection: 'row' }}>
                <CheckBox
                  tintColors={{ true: '#fff', false: '#fff' }}
                  disabled={false}
                  value={T1CheckBox}
                  onValueChange={(newValue) => setT1CheckBox(newValue)}
                />
                <Text style={styles.checkboxtext}>{SapataRetangularPT.ModalTensões6}</Text>
              </View>

              <View style={{ flexDirection: 'row' }}>
                <CheckBox
                  tintColors={{ true: '#fff', false: '#fff' }}
                  disabled={false}
                  value={T2CheckBox}
                  onValueChange={(newValue) => setT2CheckBox(newValue)}
                />
                <Text style={styles.checkboxtext}>{SapataRetangularPT.ModalTensões7}</Text>
              </View>

              <View style={{ flexDirection: 'row' }}>
                <CheckBox
                  tintColors={{ true: '#fff', false: '#fff' }}
                  disabled={false}
                  value={MCheckBox}
                  onValueChange={(newValue) => setMCheckBox(newValue)}
                />
                <Text style={styles.checkboxtext}>{SapataRetangularPT.ModalTensões8}</Text>
              </View>


              <View style={{
                flexDirection: 'row', paddingTop: hp(6.38895), justifyContent: 'center', marginBottom: hp(2.55558),
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
                  onChangeText={(text) => setEs(text.replace(',', '.'))}
                />
              </View>
              <Text style={styles.pickerviewtitle}>Valor de Df ( m )</Text>
              <View style={styles.viewpickermodal}>
                <TextInput
                  style={styles.inputCoeficientes}
                  placeholder={'Insira o valor de Df'}
                  keyboardType="number-pad"
                  value={Df}
                  onChangeText={(text) => setDf(text.replace(',', '.'))}
                />
              </View>
              <Text style={styles.pickerviewtitle2}>Espessura da Camada Deformavel ( m )</Text>
              <View style={styles.viewpickermodal}>
                <TextInput
                  style={styles.inputCoeficientes}
                  placeholder={'Insira a expessura da camada deformavel'}
                  keyboardType="number-pad"
                  value={Exp}
                  onChangeText={(text) => setExp(text.replace(',', '.'))}
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
                    setBraja((Funcoes.RecalqueBraja(Posicao, DimL, DimB, Df, Poisson, Exp, Ttrab, Es).toFixed(3) * 1000));
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
                <Text style={styles.resultado}>{SapataRetangularPT.ModalErro1}</Text>
              </View>
              <View style={styles.viewerro}>
                <Text style={styles.erro}>{SapataRetangularPT.ModalErro3}</Text>
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

      {Posicao !== '' && Es !== '' && Df !== '' && Exp !== '' ?
        // MODAL RESULTADO //
        <Modal
          animationType="slide"
          transparent={true}
          visible={resultadoVisible}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>

              <View>
                <View style={{ alignItems: 'center' }}>
                  <Text style={styles.resultado}>{SapataRetangularPT.Modal1}</Text>
                </View>

                <View>
                  <Text style={styles.resultado3}>{SapataRetangularPT.Modal2}</Text>
                  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={{ fontWeight: 'bold', bottom: hp(0.76667), fontSize: hp(3.83337), color: 'white' }}>• </Text>
                    <Text style={styles.resultado2}>Quadrada</Text>
                  </View>
                </View>

                <View>
                  <Text style={styles.resultado3}>{SapataRetangularPT.Modal5}</Text>
                  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={{ fontWeight: 'bold', bottom: hp(0.76667), fontSize: hp(3.83337), color: 'white' }}>• </Text>
                    <Text style={styles.resultado2}>{MediaM + SapataRetangularPT.ModalKPA}</Text>
                  </View>
                </View>

                <View>
                  <Text style={styles.resultado3}>{SapataRetangularPT.Modal6}</Text>
                  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={{ fontWeight: 'bold', bottom: hp(0.76667), fontSize: hp(3.83337), color: 'white' }}>• </Text>
                    <Text style={styles.resultado2}>{Ttrab + SapataRetangularPT.ModalKPA}</Text>
                  </View>
                </View>

                <View>
                  <Text style={styles.resultado3}>{SapataRetangularPT.Modal7}</Text>
                  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={{ fontWeight: 'bold', bottom: hp(0.76667), fontSize: hp(3.83337), color: 'white' }}>• </Text>
                    <Text style={styles.resultado2}>{DimL + SapataRetangularPT.ModalM}</Text>
                  </View>
                </View>

                <View>
                  <Text style={styles.resultado3}>{SapataRetangularPT.Modal10}</Text>
                  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={{ fontWeight: 'bold', bottom: hp(0.76667), fontSize: hp(3.83337), color: 'white' }}>• </Text>
                    <Text style={styles.resultado2}>{DimB + SapataRetangularPT.ModalM}</Text>
                  </View>
                </View>

                <View>
                  <Text style={styles.resultado3}>{SapataRetangularPT.Modal9}</Text>
                  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={{ fontWeight: 'bold', bottom: hp(0.76667), fontSize: hp(3.83337), color: 'white' }}>• </Text>
                    <Text style={styles.resultado2}>{Braja + SapataRetangularPT.ModalCm}</Text>
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
                    cleanFields();
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
                <Text style={styles.resultado}>{SapataRetangularPT.ModalErro1}</Text>
              </View>
              <View style={styles.viewerro}>
                <Text style={styles.erro}>{SapataRetangularPT.ModalErro3}
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
      {/*Modal Informações*/}
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

                <Text style={styles.textInfo}>{SapataRetangularPT.Info2}</Text>
                <Text style={styles.textInfo2}>{SapataRetangularPT.Info3}</Text>
                <Image
                  source={require('../../assets/info/info1.png')}
                  style={{ width: wp(68.4596577), height: hp(11.50012778), resizeMode: 'contain' }} />
                <Text style={styles.textInfo3}>{SapataRetangularPT.Info4}</Text>
                <Text style={styles.textInfo3}>{SapataRetangularPT.InfoEspaço}</Text>
                <Image
                  source={require('../../assets/info/info3.png')}
                  style={{ width: wp(68.4596577), height: hp(11.50012778), resizeMode: 'contain', right: 20, marginTop: 10, marginBottom: 10 }} />
                <Text style={styles.textInfo2}>{SapataRetangularPT.Info5}</Text>
                <Text style={styles.textInfo3}>{SapataRetangularPT.Info6}</Text>
                <Text style={styles.textInfo3}>{SapataRetangularPT.InfoEspaço}</Text>
                <Text style={styles.textInfo4}>{SapataRetangularPT.Info7}</Text>
                <Image
                  source={require('../../assets/info/info2.png')}
                  style={{ width: wp(68.4596577), height: hp(8.944544), resizeMode: 'contain' }} />
                <Text style={styles.textInfo3}>{SapataRetangularPT.Info8}</Text>
                <Text style={styles.textInfo3}>{SapataRetangularPT.InfoEspaço}</Text>
                <IMAGESVG style={{alignSelf: 'center'}}/>
                <Text style={styles.textInfo3}>{SapataRetangularPT.InfoEspaço}</Text>
                <Text style={styles.textInfo3}>{SapataRetangularPT.Info9}</Text>
                <Text style={styles.textInfo5}>{SapataRetangularPT.Info10}</Text>
                <Text style={styles.textInfo5}>{SapataRetangularPT.Info11}</Text>
                <Text style={styles.textInfo5}>{SapataRetangularPT.Info12}</Text>
                <Text style={styles.textInfo5}>{SapataRetangularPT.Info13}</Text>

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
      </ScrollView>


  );
};
export default SapataRetangular;
