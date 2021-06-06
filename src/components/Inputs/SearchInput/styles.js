import {
    StyleSheet
} from 'react-native'
import {
    Fonts
} from '../../../assets/fonts'
export default styles = StyleSheet.create({
    button: {
        flexDirection: 'row',
        backgroundColor: '#FFFFFF',
        borderColor:'rgba(238,42,78,0.38)',
        borderWidth:0.5
    },
    imageContainer:{
        alignContent:'center',
        alignItems: 'center',
        justifyContent: 'center',
        height:'100%'

    },
    textContainer:{
    },
    text:{
        height:'100%',
        justifyContent:'center',
        fontFamily:Fonts.KR    
    },
    icon:{

    }
})