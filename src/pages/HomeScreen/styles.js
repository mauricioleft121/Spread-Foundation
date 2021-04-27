/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

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
    height: hp(15),
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
    height: hp(10.4),
    width: wp(30),
  },

  ufsjlogo:{
    position: 'absolute',
    bottom: hp(3.7),
    resizeMode: 'contain',
  },
});
