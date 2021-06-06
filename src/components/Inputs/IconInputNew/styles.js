import { StyleSheet } from 'react-native'
import { Fonts } from '../../../assets/fonts'
import vh from '../../../utils/units/vh';
import vw from '../../../utils/units/vw';
export default styles = StyleSheet.create({
  main: {
    paddingRight: 4 * vw,
    paddingLeft: 1 * vw,
    paddingVertical: 0.7 * vh,
    // marginTop: 2*vw,
    width: '100%',
    borderRadius: 9 * vw,
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 2.5 * vh,
    elevation: 3,
    shadowColor: '#ccc',
    shadowOffset: {
      width: 0.5 * vw,
      height: 0.5 * vw
    },
    shadowOpacity: 0.5,
    shadowRadius: 2 * vw,

  },
  labelTxt: {
    fontSize: 3.5 * vw,
    fontFamily: Fonts.KR,
    color: '#666666',
    paddingBottom: 0.2 * vh,
    margin: 0,
    padding: 0,
  },
  icon: {
    width: 3 * vw,
    height: 3 * vw,
    resizeMode: 'contain',
  },
  imageContainer: {
    width: 5 * vw,
    height: 3 * vh,
    resizeMode: 'contain',
  },
  text: {
    color: '#999999',
    paddingLeft: 2 * vw,
    fontSize: 2.2 * vh,
    fontFamily: Fonts.PR,
  },
  field: {
    // height:'100%',
    width: '95%',
    // paddingTop: 2*vw,
    // fontFamily: Fonts.RL,
    paddingLeft: 3 * vw,
    paddingRight: 2 * vw,
    paddingVertical: 0.5 * vh,
    color: '#000',
    fontFamily: Fonts.KR,
    fontSize: 3.5 * vw,

  },

  toolMain: {
    position: 'relative',
    zIndex: 99999,
  },
  toolMainBtn: {
    // position: 'absolute',
    // right: 2 * vw,
    // top: 1.2 * vh,
    marginRight: 1 * vw
  },
  toolMainImg: {
    height: 3 * vh,
    width: 4 * vw,
    resizeMode: 'contain',
  },
  toolMainContain: {
    position: 'absolute',
    right: 0,
    top: 5 * vh,
    backgroundColor: '#fff',
    width: 70 * vw,
    zIndex: 99999999999,
    padding: 2 * vw,
    borderRadius: 2 * vw,
    shadowColor: 'black',
    shadowOffset: {
      width: 0.5 * vw,
      height: 0.5 * vw
    },
    shadowOpacity: 0.2,
    shadowRadius: 0.7 * vw,
    elevation: 8,
  },
  toolText: {
    color: '#333333',
    fontSize: 3 * vw,
    fontFamily: Fonts.KM,
  },
  info: {
    color: '#333333',
    fontSize: 2.5 * vw,
    fontFamily: Fonts.KM,
    marginBottom: 1 * vh,
    paddingHorizontal: 2 * vw,
    width: 80 * vw
  },
});
