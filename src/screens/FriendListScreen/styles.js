import { StyleSheet } from 'react-native'
import vh from '../../utils/units/vh'
import vw from '../../utils/units/vw'

export default StyleSheet.create({
    mainContianer: {
        flex: 1,
        paddingVertical: 2 * vh,
        // height: 100 * vh,
        // width: 100 * vw
    },
    header_styles: {
        height: 10 * vh,
        width: 100 * vw,
        overflow: 'hidden',
        borderBottomEndRadius: 6 * vh,
        borderBottomStartRadius: 6 * vh,
        backgroundColor: '#ffffff'
    },
    back: {
        height: '100%',
        width: '100%',
    },
    searchBarContainer: {
        width: 55 * vw,
        height: 4.5 * vh,
        justifyContent: 'center',
        paddingLeft: 5 * vw,
        borderRadius: 2 * vh,
        backgroundColor: 'lightgray',
        // alignItems:'center'
    },
    header_container: {
        justifyContent: 'space-between',
        paddingVertical: 3 * vh,
        paddingHorizontal: 5 * vw,
        alignItems: 'center'
    },
    headerBackground: {
        paddingBottom: 1 * vh,
        // height: 20 * vh,
        width: 100 * vh,
        color: '#ffffff'

    },
    headerTitleStyles: {
        fontSize: 3 * vh,
        fontWeight: 'bold',
        textAlign: 'left',
        color: '#000000'

    },
    titleContainer: {
        flexDirection: 'row',
        width: '100%',
        paddingVertical: 0.5 * vh,
        justifyContent: 'space-between',
        // paddingHorizontal: 1 * vw
    },
    headerEndtContainer: {
        justifyContent: 'space-between',
        paddingHorizontal: 3 * vw,
        width: 30 * vw,
        alignItems: 'center',
        flexDirection: 'row'
    },
    headerButtonStyles: {
        height: 5 * vh,
        width: 5 * vh,
        justifyContent: 'center',
        alignItems: 'center',
    },
    iconImageStyles: {
        height: 3 * vh,
        width: 3 * vh,
        tintColor: '#000000'
    },
    avatarContainer: {
        padding: 0.3 * vh,
        height: 11.5 * vh,
        width: 11.5 * vh,
        borderRadius: (11.5 * vh) / 2,
        borderColor: 'yellow',
        borderWidth: 0.4 * vh,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'

    },
    avatarWrapperContainer: {
        padding: 0.3 * vh,
        height: 12.5 * vh,
        width: 12.5 * vh,
        borderRadius: (12.5 * vh) / 2,
        borderColor: 'white',
        borderWidth: 0.4 * vh,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        left: 5 * vw,
        bottom: -16 * vh,
        backgroundColor: 'white'

    },

    avatarImage: {
        height: 10 * vh,
        width: 10 * vh,
        borderRadius: (10 * vh) / 2,
    },
    listStyles: {
        // alignItems:'center'
        // paddingVertical: 1 * vh,
        // paddingHorizontal: 3 * vw
        paddingBottom: 3 * vh
    },
    listSeperator: {
        // marginVertical: 1 * vh,
        // marginTop: 20 * vh,
        height: 0.1 * vh,
        width: 90 * vw,
        backgroundColor: 'lightgray',
        alignSelf: 'center'
    },
    postImage: {
        height: 20 * vh,
        width: 90 * vw,
        borderRadius: 2 * vh
    },
    listItemStyles: {
        paddingVertical: 1 * vh,
        justifyContent: 'space-between',
        // height: 15 * vh,
        width: 100 * vw,
        alignItems: 'center',
        // backgroundColor:'red'
        // flexDirection:'row'

    },
    listItemTitleContainer: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        width: '92%'
    }
})