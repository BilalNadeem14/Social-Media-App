import {
    StyleSheet
} from 'react-native'
import { Fonts } from '../../assets/fonts'
import vh from '../../utils/units/vh'
import vw from '../../utils/units/vw'

export default styles = StyleSheet.create({
    container:{
        flex:1,
        zIndex:10000
    },
    contentContainer:{
        alignSelf: 'center',
        backgroundColor:'white',
        height:'90%',
        width:'90%',
        elevation:3,
        borderRadius: 10,
        alignContent: 'center',
        justifyContent:'center',
        alignContent: 'center',
        shadowColor:'black',
        shadowOffset:{
            width:0.5*vw,
            height:0.5*vw
          },
          shadowOpacity:0.2,
          shadowRadius:0.7*vw,
    },
    headerContainer:{
        flex:1,
        backgroundColor:'#FFFFFF',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        elevation:3,
        shadowColor:'black',
        shadowOffset:{
            width:0.5*vw,
            height:0.5*vw
          },
          shadowOpacity:0.2,
          shadowRadius:0.7*vw,

    },
    closeButton:{
        position:'absolute',
        top:0,
        left:0,
        width:5*vw,
        height:5*vw,
        borderRadius:2.5*vw
    },
    closeImageContainer:{
        flex:1
    },
    imgClose:{
       width:'100%',
       height:'100%',
        resizeMode:"contain"
    },
    listContainer:{
        flex:3,
        backgroundColor:'#FFFFFF',
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
    },
    headingContainer:{
        flex:1,
        marginTop:1*vh
    },
    heading:{
        fontSize:3*vh,
        color:'#EE3048',
        fontFamily:Fonts.KM,
        textAlign:'center',
    },
    searchContainer:{
        flex:2,
        alignItems:'center',
    }
   
    

})