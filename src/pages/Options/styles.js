/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#22212c',
    alignItems: 'center',
  },

  imagemsapata:{
    marginTop: hp(2),
    marginBottom: hp(6),
  },

  botaoSapataQuadrada:{
    alignItems: 'center',
    backgroundColor: 'white',
    borderWidth: 0.5,
    borderColor: 'black',
    height: hp(15),
    width: wp(48),
    borderRadius: 5,
    justifyContent:'center',
  },

  imagemnosbotoes: {
    marginTop: hp(1),
    height: hp(9),
    width: wp(25),
  },

  textonosbotoes:{
    marginTop: hp(1),
    fontFamily: 'DarkerGrotesque-SemiBold',
    fontSize: hp(2.5),
    color: 'black',
  },

  botaoSapataRetangular:{
    alignItems: 'center',
    backgroundColor: 'white',
    borderWidth: 0.5,
    borderColor: 'black',
    height: hp(15),
    width: wp(48),
    borderRadius: 5,
    justifyContent:'center',
    marginTop: hp(2.5),
  },


});
