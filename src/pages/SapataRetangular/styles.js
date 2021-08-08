/* eslint-disable prettier/prettier */

import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const PrimaryColor = '#22212c';
const SecondaryColor = '#905229';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: wp(4.889975),
    paddingRight:wp(4.889975),
    paddingTop:hp(2.55558),
    paddingBottom:hp(2.55558),
    backgroundColor: PrimaryColor,
    alignItems: 'center'
  },
  containerScrollView: {
    flex: 1,
  },
  viewpicker: {
    width: wp(78.2396),
    height: hp(6.38895),
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 7,
    backgroundColor: 'white',
    justifyContent: 'center'
  },
  textinput: {
    width: wp(78.2396),
    height: hp(6.38895),
    fontSize: hp(2.04446),
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 7,
    backgroundColor: 'white',
  },
  botaocalcular: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255,255,255,0.5)',
    borderWidth: 0,
    borderColor: 'white',
    height: hp(6.38895),
    width: wp(44.00977),
    borderRadius: 5,
    marginTop: hp(6.38895),
    marginLeft: wp(7.33496),

  },
  botaoinfo: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: hp(6.38895),
    left: wp(4.889975),
  },
  textobotaocalcular: {
    color: 'snow',
    fontFamily: 'DarkerGrotesque-Bold',
    fontSize: hp(2.3),
  },
  textlocation: {
    paddingTop: hp(1.916687),
    paddingBottom: hp(1.27779),
    color: 'white',
    fontFamily: 'DarkerGrotesque-Bold',
    fontSize: hp(2.3),
  },
  textlocation1: {
    paddingTop: hp(4.47227),
    paddingBottom: 0,
    color: 'white',
    fontFamily: 'DarkerGrotesque-Bold',
    fontSize: hp(2.3),
  },
  textlocation2: {
    paddingTop: hp(1.916687),
    paddingBottom: hp(1.27779),
    color: 'white',
    fontFamily: 'DarkerGrotesque-Bold',
    fontSize: hp(2.3),
  },

  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },

  ///////////////////////////////////////
  button: {
    borderRadius: 20,
    paddingLeft: hp(2.44498),
    paddingRight:hp(2.44498),
    paddingTop:hp(1.27779),
    paddingBottom:hp(1.27779),
    elevation: 2,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },

  ////////////////////////
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 0,
    marginBottom: 0,
  },

  modalView: {
    marginTop: hp(2.55558),
    marginBottom:hp(2.55558),
    marginLeft:wp(4.889975),
    marginRight:wp(4.889975),
    backgroundColor:PrimaryColor,
    borderRadius: 20,
    paddingLeft: wp(4.889975),
    paddingRight: wp(4.889975),
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: hp(0.255558),
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    borderWidth: 10,
    borderColor: SecondaryColor,
    height: hp(89),
    width: wp(95),
  },

  modalText: {
    marginBottom: hp(1.916687),
    textAlign: 'center',
  },
  nomeproduto1: {
    color: 'white',
    fontSize: hp('2.5%'),
    fontFamily: 'DarkerGrotesque-Bold',
  },
  nomeproduto2: {
    color: 'white',
    fontSize: hp(1.916687),
    fontFamily: 'DarkerGrotesque-Bold',
  },

  imagem1: {
    width: wp(34.2298),
    height: hp(17.889),
    borderRadius: 100,
    borderWidth: 3,
    borderColor: 'rgba(255,255,255,0.9)',
    marginLeft: wp('16%'),
    marginBottom: '10%',
  },

  absolute: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },

  texto: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  //////////////////////////
  resultado: {
    paddingTop: hp(1.27779),
    paddingBottom: hp(1.27779),
    fontSize: hp(4),
    fontFamily: 'DarkerGrotesque-Bold',
    color: 'white',
  },

  resultado2: {
    fontSize: hp(2.9),
    fontFamily: 'DarkerGrotesque-Medium',
    height: hp(6.38895),
    color: 'white',
  },

  viewerro: {
    flex: 0,
    paddingTop: hp(3.83337),
  },
  viewerro2:{
    paddingTop: hp(5.11),
  },
  erro: {
    fontSize: hp(2.9),
    fontFamily: 'DarkerGrotesque-Medium',
    color: 'white',
  },
  resultado3: {
    fontSize: hp(2.4),
    fontFamily: 'DarkerGrotesque-Bold',
    color: 'white',
    backgroundColor:SecondaryColor,
    borderRadius: 20,
    textAlign: 'center',
  },

  textos: {

  },
  textInfo: {
    fontSize: hp(2.3),
    fontFamily: 'DarkerGrotesque-Medium',
    color: 'white',
    textAlign: 'justify',
  },
  textInfo2: {
    fontSize: hp(2.3),
    fontFamily: 'DarkerGrotesque-Medium',
    color: 'white',
    textAlign: 'justify',
    paddingTop: hp(0.255558),
  },
  textInfo3: {
    fontSize: hp(2.15),
    fontFamily: 'DarkerGrotesque-Bold',
    color: 'white',
    textAlign: 'justify',
  },
  textInfo4: {
    fontSize: hp(2.3),
    fontFamily: 'DarkerGrotesque-Medium',
    color: 'white',
    textAlign: 'justify',
    marginTop: hp(0.638895),
  },
  textInfo5: {
    fontSize: hp(1.55),
    fontFamily: 'DarkerGrotesque-Medium',
    color: 'white',
    textAlign: 'justify',
    marginTop: hp(0.638895),
  },
  viewInfo: {
    flex: -1,
  },
  modalViewInfo: {
    height: hp(96),
    width: wp(96),
    marginTop: hp(2.55558),
    marginBottom:hp(2.55558),
    marginLeft:wp(4.889975),
    marginRight:wp(4.889975),
    backgroundColor: PrimaryColor,
    borderRadius: 20,
    paddingLeft: wp(4.889975),
    paddingRight: wp(4.889975),
    elevation: 5,
    borderWidth: 10,
    borderColor:SecondaryColor,
  },
  modalViewErro: {
    width: wp(96),
    height: hp(35),
    marginTop: hp(2.55558),
    marginBottom:hp(2.55558),
    marginLeft:wp(4.889975),
    marginRight:wp(4.889975),
    backgroundColor: PrimaryColor,
    borderRadius: 20,
    paddingLeft: wp(4.889975),
    paddingRight:wp(4.889975),
     elevation: 5,
     borderWidth: 10,
     borderColor: SecondaryColor,
  },
  ErroTitle:{
    fontSize:hp(4),
    fontFamily:'DarkerGrotesque-Bold',
    color:'white',
    right: hp(2.44498),
  },
  modalViewTensoes:{
    height: hp(90),
    width: wp(96),
    marginTop: hp(2.55558),
    marginBottom:hp(2.55558),
    marginLeft:wp(4.889975),
    marginRight:wp(4.889975),
    backgroundColor: PrimaryColor,
    borderRadius: 20,
    paddingLeft: wp(4.889975),
    paddingRight:wp(4.889975),
     elevation: 5,
     borderWidth: 10,
     borderColor: SecondaryColor,
   },
   tensoes:{
    paddingTop:hp(1.27779),
    paddingBottom:hp(1.27779),
    fontSize:hp(4),
    fontFamily:'DarkerGrotesque-Bold',
    color:'white',
  },
  metodos:{
    paddingTop:hp(1.27779),
    paddingBottom:hp(1.27779),
    fontSize:hp(3),
    fontFamily:'DarkerGrotesque-Bold',
    color:'white',
  },
  checkboxtext:{
    fontSize:hp(2.4),
    fontFamily:'DarkerGrotesque-Bold',
    color:'white',
    textAlign:'center',
  },
  botaoprosseguir:{
    alignItems: 'center',
    justifyContent:'center',
    backgroundColor: SecondaryColor,
    borderWidth: 0,
    borderColor: 'white',
    height: hp(6.38895),
    width: wp(44.00977),
    borderRadius: 5,
  },
  textoprosseguir:{
    fontSize:hp(2.7),
    fontFamily:'DarkerGrotesque-Bold',
    color:'white',
    textAlign:'center',
  },
  subtitulocargapilar:{
    paddingBottom: 10,
    color:'white',
    fontFamily: 'DarkerGrotesque-Bold',
    fontSize: hp(2.3),
  },
  modalViewPicker:{
    width: wp(96),
    height: hp(87),
    marginTop:hp(2.55558),
    marginBottom:hp(2.55558),
    marginLeft:wp(4.89),
    marginRight:wp(4.89),
    backgroundColor: PrimaryColor,
    borderRadius: 20,
    paddingLeft: wp(4.89),
    paddingRight:wp(4.89),
    elevation: 5,
    borderWidth: 10,
    borderColor: SecondaryColor,
    alignItems: 'center',
  },
  viewpickermodal: {
    width: wp(78.24),
    height: hp(6.39),
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 7,
    backgroundColor: 'white',
    marginTop: hp(2.55558),
    justifyContent: 'center'
  },
  pickerviewtitle: {
    fontSize:hp(3),
    fontFamily:'DarkerGrotesque-Bold',
    color:'white',
    marginTop: hp(1.27779197),

  },
  pickerviewtitle2: {
    fontSize:hp(2.7),
    fontFamily:'DarkerGrotesque-Bold',
    color:'white',
    marginTop: hp(1.27779197),

  },
  inputCoeficientes: {
    width: wp(78.24),
    height: hp(6.39),
    fontSize: hp(2.044467),
    borderRadius: 7,
    backgroundColor: 'white',
  },

});
