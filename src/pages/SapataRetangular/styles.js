/* eslint-disable prettier/prettier */

import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#22212c',
    alignItems: 'center',
  },
  viewpicker: {
    width: 320,
    height: 50,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 7,
    backgroundColor: 'white',
  },
  textinput: {
    width: 320,
    height: 50,
    fontSize: 16,
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
    height: 50,
    width: 180,
    borderRadius: 5,
    marginTop: 50,
    marginLeft: 30,

  },
  botaoinfo: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
    left: 20,
  },
  textobotaocalcular: {
    color: 'snow',
    fontFamily: 'DarkerGrotesque-Bold',
    fontSize: 18,
  },
  textlocation: {
    paddingTop: 20,
    paddingBottom: 10,
    color: 'white',
    fontFamily: 'DarkerGrotesque-Bold',
    fontSize: 18,
  },
  textlocation1: {
    paddingTop: 40,
    paddingBottom: 10,
    color: 'white',
    fontFamily: 'DarkerGrotesque-Bold',
    fontSize: 18,
  },
  textlocation2: {
    paddingTop: 20,
    paddingBottom: 10,
    color: 'white',
    fontFamily: 'DarkerGrotesque-Bold',
    fontSize: 18,
  },

  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },

  ///////////////////////////////////////
  button: {
    borderRadius: 20,
    padding: 10,
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
    margin: 20,
    backgroundColor: '#22212c',
    borderRadius: 20,
    paddingLeft: 20,
    paddingRight: 20,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    borderWidth: 10,
    borderColor: '#ff5555',
    height: hp(93),
    width: wp(80),
  },

  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  nomeproduto1: {
    color: 'white',
    fontSize: hp('2.5%'),
    fontFamily: 'DarkerGrotesque-Bold',
  },
  nomeproduto2: {
    color: 'white',
    fontSize: 15,
    fontFamily: 'DarkerGrotesque-Bold',
  },

  imagem1: {
    width: 140,
    height: 140,
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
    paddingTop: 10,
    paddingBottom: 10,
    fontSize: hp(4),
    fontFamily: 'DarkerGrotesque-Bold',
    color: 'white',
  },

  resultado2: {
    fontSize: hp(2.9),
    fontFamily: 'DarkerGrotesque-Medium',
    height: 50,
    color: 'white',
  },

  viewerro: {
    flex: 0,
    paddingTop: 30,
  },
  erro: {
    fontSize: hp(2.9),
    fontFamily: 'DarkerGrotesque-Medium',
    color: 'white',
  },
  modalViewErro: {
    flex: 0,
    margin: 20,
    backgroundColor: '#22212c',
    borderRadius: 20,
    paddingLeft: 20,
    paddingRight: 20,
    elevation: 5,
    borderWidth: 10,
    borderColor: '#ff5555',
  },
  resultado3: {
    fontSize: hp(2.4),
    fontFamily: 'DarkerGrotesque-Bold',
    color: 'white',
    backgroundColor: '#ff5555',
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
    paddingTop: 2,
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
    marginTop: 5,
  },
  textInfo5: {
    fontSize: hp(1.55),
    fontFamily: 'DarkerGrotesque-Medium',
    color: 'white',
    textAlign: 'justify',
    marginTop: 5,
  },
  viewInfo: {
    flex: -1,
  },
  modalViewInfo: {
    height: hp(96),
    width: wp(96),
    margin: 20,
    backgroundColor: '#22212c',
    borderRadius: 20,
    paddingLeft: 20,
    paddingRight: 20,
    elevation: 5,
    borderWidth: 10,
    borderColor: '#ff5555',
  },
});
