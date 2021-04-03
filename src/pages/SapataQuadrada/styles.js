/* eslint-disable prettier/prettier */

import { StyleSheet} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

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
  botaocalcular:{
    alignItems: 'center',
    justifyContent:'center',
    backgroundColor: 'white',
    borderWidth: 0.9,
    borderColor: 'black',
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
    fontWeight: 'bold',
    color: 'black',
  },
  textlocation:{
    paddingTop: 50,
    paddingBottom: 10,
    color:'white'
  },
  textlocation1:{
    paddingTop: 150,
    paddingBottom: 10,
    color:'white'
  },

  

  ///////////////////////////////////////
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },

  ////////////////////////
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    flex: 1,
    margin: 20,
    backgroundColor: 'snow',
    borderRadius: 20,
    paddingLeft: 20,
    paddingRight:20,
     elevation: 5,
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
    justifyContent:'space-between'
  },
  //////////////////////////
  resultado:{
    paddingTop:20,
    paddingBottom:10,
    fontSize:27,
    fontFamily:'DarkerGrotesque-Bold',
  },

  resultado2:{
    fontSize:22,
    fontFamily:'DarkerGrotesque-Medium',
    height: 86,
  },
  viewerro:{
    flex: 0,
    paddingTop: 30,
  },
  erro:{
    fontSize:23,
    fontFamily:'DarkerGrotesque-Medium',
  },
  modalViewErro: {
    flex: 0,
    margin: 20,
    backgroundColor: 'snow',
    borderRadius: 20,
    paddingLeft: 20,
    paddingRight:20,
     elevation: 5,
  },
  resultado3:{
    fontSize:23,
    fontFamily:'DarkerGrotesque-Regular',
    backgroundColor: 'red',
    height: 70,
  },
});
