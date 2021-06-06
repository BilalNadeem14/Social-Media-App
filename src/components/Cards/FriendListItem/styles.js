import {StyleSheet} from 'react-native'
import { Fonts } from '../../../assets/fonts';
import vh from '../../../utils/units/vh';
export default styles = StyleSheet.create({
    container:{
        width:'100%',
        height:8*vh,
        marginBottom:1*vh,
        flexDirection:'row',
        borderBottomWidth: 0.5,
        borderBottomColor:'#c1c1c1'
    },
    profileContainer:{
        flex:1,
        alignContent:'center',
        justifyContent:'center',
        alignItems: 'center',
    },
    circle:{
        height:6*vh,
        width:6*vh,
        borderRadius: 4*vh
    },
    profileImage:{
        height:6*vh,
        width:6*vh,
        borderRadius: 3*vh,
        resizeMode:"cover",

    },
    nameContainer:{
        flex:2,
        justifyContent:'center',


    },
    name:{
        color:'#333333',
        fontSize:2.5*vh,
        fontFamily: Fonts.KR

    },
    checkContainer:{
        flex:1,
        alignItems:'center',
        justifyContent: 'center',alignContent:"center"
    },
})