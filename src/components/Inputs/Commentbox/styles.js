import {StyleSheet} from 'react-native'
import vw from '../../../Units/vw'
import {Fonts} from '../../../assets/fonts'

export default styles = StyleSheet.create({
    topSrch:{
        paddingHorizontal: 4 * vw,
        paddingTop: 1.5 * vh,
        // top : 2 * vh,
        width: 90 * vw,
        height: 25 * vh,
        borderRadius: 3 * vw,
        backgroundColor: '#fff',
        flexDirection: 'row',
        elevation: 2,
        shadowColor: "#000",
        shadowOffset: {
            width: 2,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 1 * vw,
        justifyContent: 'space-between'
    },
    topSrchinpt:{
        height: '100%',
        textAlignVertical: 'top', 
        width: '89%',
        //   paddingTop: 2*vw,
        // paddingLeft: 6 * vw,
        color: '#55595C',
        fontFamily: Fonts.KR,
        fontSize: 1.8 * vh,
        // ...Platform.select({
        //     android: {
              paddingTop: 0, 
        //     },
        //   }),
          paddingBottom: 0
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
