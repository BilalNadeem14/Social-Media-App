import {StyleSheet} from 'react-native'
import vw from '../../../Units/vw'
import vh from '../../../Units/vh'
import {Fonts} from '../../../assets/fonts'

export default styles = StyleSheet.create({
    topSrch:{
        width: '100%',
        marginBottom: 6*vw,
    },
    topSrchinpt:{
        fontFamily: Fonts.KR,
        width: '100%',
        height : 5 * vh,
        backgroundColor: '#fff',
        borderWidth:0.1*vw,
        borderColor:'#E1E1E1',  
        borderRadius:7*vw,
        fontSize: 1.8 * vh,
        paddingHorizontal:3*vw,
        paddingVertical:2*vw,
        color:'#666',
        elevation:2,
        shadowColor: '#43413c',
        shadowOffset: {
            width: 0.5 * vw,
            height: 0.5 * vw
        },
        shadowOpacity: 0.2,
        shadowRadius: .5 * vw,
    },
    mainTxt:{
        color: '#B2B2B2',
        fontSize: 3.5*vw,
        marginBottom: 0.5*vw,
    },
    
    
})

function newFunction() {
    return 5 * vw;
}
