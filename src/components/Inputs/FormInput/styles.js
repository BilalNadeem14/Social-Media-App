import { StyleSheet } from 'react-native'
import vw from '../../../Units/vw'

import {Fonts} from '../../../assets/fonts'
import vh from '../../../Units/vh';

export default styles = StyleSheet.create({
    container:{
      borderBottomWidth: .1 * vh,
      margin:0,
      padding:0,
      alignContent:'flex-end',
      justifyContent:'flex-end'
      
    },
    containerFocused:{
      borderBottomWidth: 1,alignContent:'flex-end',
      justifyContent:'flex-end'
    },
    headingContainer:{
    },
    inputFields:{
      fontFamily: Fonts.KR,
     
    },
    label:{
      fontFamily: Fonts.KR,
   
    }
  });
  