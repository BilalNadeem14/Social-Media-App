import { StyleSheet } from 'react-native'
import vw from '../../../Units/vw'
import {Fonts} from '../../../assets/fonts'
export default styles = StyleSheet.create({
   textContainer:{
       flex:5,
        justifyContent:'center',
        paddingTop:1*vw,
        paddingLeft:3*vw,
        
   },
   imageContainer:{
       flex:1
   },
   icon:{
       resizeMode:'contain',
       width:'80%',
       height:'80%',
   },
   text:{
       color:'#999999',
       fontFamily:Fonts.KR,
     
      }
})