/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
//7,826 = 1hp
//4.09 = 1wp

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#22212c',
    alignItems: 'center',
  },

  logo:{
    width: wp(78),
    height: hp(17),
    marginTop:hp(5),
  },

  botaodimensionamento:{
    alignItems: 'center',
    backgroundColor: 'white',
    borderWidth: 0.5,
    borderColor: 'black',
    height: hp(17),
    width: wp(48),
    borderRadius: 5,
    justifyContent:'center',
    marginTop: hp(5),
  },

  textobotaodimensionamento:{
    fontFamily: 'DarkerGrotesque-SemiBold',
    fontSize: hp(2.1),
  },

  imagembotaodimensionamento: {
    height: hp(12.4),
    width: wp(30),
    resizeMode: 'contain',
  },

  ufsjlogo:{
    position: 'absolute',
    bottom: hp(3.7),
    resizeMode: 'contain',
  },

  buttonformulario: {
    flexDirection: 'row',
    backgroundColor: 'white',
    position: 'absolute',
    bottom: hp(20),
    width: wp(48),
    height: hp(6),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },

  textformulario: {
    fontFamily: 'DarkerGrotesque-SemiBold',
    fontSize: hp(1.8),
    fontWeight: 'bold',
    marginLeft: 5,
  }
});
