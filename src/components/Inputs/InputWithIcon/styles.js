import { StyleSheet } from 'react-native'
import vw from '../../../Units/vw'
import {Fonts} from '../../../assets/fonts'
import vh from '../../../Units/vh';
export default styles = StyleSheet.create({
    container:{
        marginBottom:2*vh,
    },
    label:{
        fontFamily:Fonts.KR,
        color:'#666666',
        fontSize:2*vh,
        shadowColor:'black',
        shadowOffset:{
            width:0.5*vw,
            height:0.5*vw
          },
          shadowOpacity:0.2,
          shadowRadius:0.7*vw,
          elevation : 3 ,
    },
    fieldContainer:{
        width:90*vw,
        borderRadius:4*vh,
        height:6*vh,
        flexDirection:'row',
        elevation:5,
        backgroundColor:'white',
        shadowColor:'black',
        shadowOffset:{
            width:0.5*vw,
            height:0.5*vw
          },
          shadowOpacity:0.2,
          shadowRadius:0.7*vw,
    },
    iconContainer:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    icon:{
    },
    placeholderContainer:{
        flex:6,
       justifyContent:'center',

    },
    placeholder:{
        fontSize:2.5*vh,
        color:'#CCCCCC',
        fontFamily:Fonts.KR
    },
    field:{
        fontSize:2.5*vh,
        fontFamily:Fonts.KR,
       color:'#666666',
       padding:0,
       margin:0,
    },
})