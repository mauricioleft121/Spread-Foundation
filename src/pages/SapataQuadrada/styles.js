/* eslint-disable prettier/prettier */

import { StyleSheet} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

  const PrimaryColor = '#22212c';
  const SecondaryColor = '#905229';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: PrimaryColor,
    alignItems: 'center',
  },

  imagemsapataquadrada:{
    marginTop: hp(4),
    marginBottom: hp(6),
  },

  titulocargapilar:{
    paddingTop: 40,
    color:'white',
    fontFamily: 'DarkerGrotesque-Bold',
    fontSize: 18,
  },
  subtitulocargapilar:{
    paddingBottom: 10,
    color:'white',
    fontFamily: 'DarkerGrotesque-Bold',
    fontSize: 18,
  },

  inputcargapilar: {
    width: 320,
    height: 50,
    fontSize: 16,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 7,
    backgroundColor: 'white',
  },

  titulos:{
    paddingTop: 30,
    paddingBottom: 10,
    color:'white',
    fontFamily: 'DarkerGrotesque-Bold',
    fontSize: 18,
  },

  viewpicker: {
    width: 320,
    height: 50,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 7,
    backgroundColor: 'white',
  },

  botaocalcular:{
    alignItems: 'center',
    justifyContent:'center',
    backgroundColor:'rgba(255,255,255,0.4)',
    borderWidth: 0,
    borderColor: 'white',
    height: 50,
    width: 180,
    borderRadius: 5,
    marginTop: 50,
    marginLeft: 30,
  },





  botaoinfo:{
    alignItems: 'center',
    justifyContent:'center',
    marginTop: 50,
    left: 20,
  },
  textobotaocalcular:{
    color: 'snow',
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
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 0,
    marginBottom:0,
  },

  modalView: {
    margin: 20,
    backgroundColor: PrimaryColor,
    borderRadius: 20,
    paddingLeft: 20,
    paddingRight:20,
     elevation: 5,
     shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    borderWidth: 10,
    borderColor: SecondaryColor,
    height: hp(71),
    width: wp(95),
  },

  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  nomeproduto1:{
    color:'white',
    fontSize:hp('2.5%'),
    fontFamily: 'DarkerGrotesque-Bold',
  },
  nomeproduto2:{
    color:'white',
    fontSize:15,
    fontFamily: 'DarkerGrotesque-Bold',
  },

  imagem1:{
    width:140,
    height:140,
    borderRadius: 100,
    borderWidth:3,
    borderColor:'rgba(255,255,255,0.9)',
    marginLeft:wp('16%'),
    marginBottom:'10%',
  },

  absolute: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },

  texto:{
    flexDirection:'row',
    justifyContent:'space-between',
  },
  //////////////////////////
  resultado:{
    paddingTop:0,
    paddingBottom:30,
    fontSize:hp(4),
    fontFamily:'DarkerGrotesque-Bold',
    color:'white',
    right: 10,
  },

  resultado2:{
    fontSize:hp(2.9),
    fontFamily:'DarkerGrotesque-Medium',
    height:50,
    color:'white',
  },

  viewerro:{
    flex: 0,
    paddingTop: 10,
  },
  viewerro2:{
    paddingTop: 40,
  },
  erro:{
    fontSize:hp(2.9),
    fontFamily:'DarkerGrotesque-Medium',
    color: 'white',
  },
  modalViewErro: {
    width: wp(96),
    height: hp(35),
    margin: 20,
    backgroundColor: PrimaryColor,
    borderRadius: 20,
    paddingLeft: 20,
    paddingRight:20,
     elevation: 5,
     borderWidth: 10,
     borderColor: SecondaryColor,
  },
  ErroTitle:{
    fontSize:hp(4),
    fontFamily:'DarkerGrotesque-Bold',
    color:'white',
    right: 10,
  },
  resultado3:{
    fontSize:hp(2.4),
    fontFamily:'DarkerGrotesque-Bold',
   color:'white',
    backgroundColor: SecondaryColor,
    borderRadius:20,
    textAlign:'center',
  },
   textInfo: {
    fontSize:hp(2.3),
    fontFamily:'DarkerGrotesque-Medium',
    color: 'white',
    textAlign: 'justify',
   },
   textInfo2: {
    fontSize:hp(2.3),
    fontFamily:'DarkerGrotesque-Medium',
    color: 'white',
    textAlign: 'justify',
    paddingTop: 2,
   },
   textInfo3: {
    fontSize:hp(2.15),
    fontFamily:'DarkerGrotesque-Bold',
    color: 'white',
    textAlign: 'justify',
   },
   textInfo4: {
    fontSize:hp(2.3),
    fontFamily:'DarkerGrotesque-Medium',
    color: 'white',
    textAlign: 'justify',
    marginTop: 5,
   },
   textInfo5: {
    fontSize:hp(1.55),
    fontFamily:'DarkerGrotesque-Medium',
    color: 'white',
    textAlign: 'justify',
    marginTop: 5,
   },
   viewInfo: {
    flex: 0,
    paddingTop: 5,
   },
   modalViewInfo:{
    height: hp(96),
    width: wp(96),
    margin: 20,
    backgroundColor: PrimaryColor,
    borderRadius: 20,
    paddingLeft: 20,
    paddingRight:20,
     elevation: 5,
     borderWidth: 10,
     borderColor: SecondaryColor,
   },
   modalViewTensoes:{
    height: hp(85),
    width: wp(96),
    margin: 20,
    backgroundColor: PrimaryColor,
    borderRadius: 20,
    paddingLeft: 20,
    paddingRight:20,
     elevation: 5,
     borderWidth: 10,
     borderColor: SecondaryColor,
   },
   tensoes:{
    paddingTop:10,
    paddingBottom:10,
    fontSize:hp(4),
    fontFamily:'DarkerGrotesque-Bold',
    color:'white',
  },
  metodos:{
    paddingTop:10,
    paddingBottom:10,
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
    height: 50,
    width: 180,
    borderRadius: 5,
  },
  textoprosseguir:{
    fontSize:hp(2.7),
    fontFamily:'DarkerGrotesque-Bold',
    color:'white',
    textAlign:'center',
  }
});
