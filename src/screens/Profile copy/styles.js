import { StyleSheet } from 'react-native'
import theme from '../../utils/units/theme'
import vh from '../../utils/units/vh'
import vw from '../../utils/units/vw'


export default StyleSheet.create({
    container: {
        flex: 1
    },
    mainContianer: {
        flex: 1,
        // height: 100 * vh,
        // width: 100 * vw
    },

    headerMainContainer: {
        justifyContent: 'space-between',
        flex: 1,
        paddingHorizontal: 3 * vw,
        // margin: 5*vh
    },

    header_styles: {
        height: 30 * vh,
        width: 100 * vw,
        overflow: 'hidden',
        borderBottomEndRadius: 6 * vh,
        borderBottomStartRadius: 6 * vh
    },
    back: {
        height: '100%',
        width: '100%',
    },
    header_container: {
        justifyContent: 'space-between',
        paddingVertical: 3 * vh,
        alignItems: 'center',
        // borderWidth: 1,
    },
    headerBackground: {
        paddingBottom: 1 * vh,
        height: 20 * vh,
        width: 100 * vh,
        // backgroundColor: 'red'
    },
    headerTitleStyles: {
        fontSize: 3 * vh,
        fontWeight: 'bold',
        textAlign: 'left',
        color: '#ffffff'
    },
    titleContainer: {
        flexDirection: 'row',
        width: '100%',
        paddingVertical: 0.5 * vh,
        justifyContent: 'space-between',
        // paddingHorizontal: 1 * vw
    },
    btn: {
        width: 27 * vw,
        marginVertical: 2 * vh,
        marginLeft: 3*vw,
        // borderWidth: 0.3 * vh,
        backgroundColor: theme.colors.primaryColor
    },
    buttonContainer: {
        alignItems: 'flex-end',
        borderWidth: 2,
        marginBottom: 5*vh
    },
    headerBottomContainer: {
        justifyContent: 'space-between',
        paddingHorizontal: 3 * vw,
        width: 30 * vw,
        alignItems: 'center',
        flexDirection: 'row'
    },
    headerBottomEndContainer: {
        justifyContent: 'space-between',
        paddingHorizontal: 3 * vw,
        // width: 30 * vw,
        alignItems: 'center',
        flexDirection: 'row'
    },
    headerButtonStyles: {
        height: 5 * vh,
        width: 5 * vh,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: theme.colors.gray,//'pink',
        borderRadius: (5 * vh) / 2
    },
    iconImageStyles: {
        height: 3 * vh,
        width: 3 * vh
    },
    avatarContainer: {
        padding: 0.3 * vh,
        height: 11.5 * vh,
        width: 11.5 * vh,
        borderRadius: (11.5 * vh) / 2,
        borderColor: theme.colors.green,//'yellow',
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
        // paddingVertical: 1 * vh,
        // paddingHorizontal: 3 * vw,
        paddingBottom: 3 * vh
    
    },
    // ListHeader: {
    //     paddingVertical: 0 * vh,
    //     paddingHorizontal: 0 * vw
    // },
    listSeperator: {
        marginVertical: 1 * vh,
        marginTop: 18 * vh,
        height: 0.2 * vh,
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
        height: 30 * vh,
        width: 100 * vw,
        paddingHorizontal: 3 * vw,
        // flexDirection:'row'

    },
    listItemTitleContainer: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems:'center',
        paddingRight:5*vw
        // height: 40*vh 
    }
})