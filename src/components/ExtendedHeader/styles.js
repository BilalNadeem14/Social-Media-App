import { StyleSheet } from "react-native";
import vh from '../../utils/units/vh';
import vw from '../../utils/units/vw';
import { Fonts } from '../../assets/fonts'
import theme from "../../utils/units/theme";
export default styles = StyleSheet.create({
    topcard: {
        borderRadius: 3 * vw,
        width: 92 * vw,
        // height : 50 * vh,
        marginTop: 15 * vh,
        alignSelf: 'center',
        // alignItems : 'center' ,
        position: 'absolute',

    },
    topHeader: {
        width: '100%',
        height: 10 * vh,
        resizeMode: 'cover',
        marginTop: 0 * vw,
    },
    topvrw: {
        width: '100%',
        paddingHorizontal: 4 * vw,
        // marginTop: -10 * vw,
    },
    topProMain: {
        width: '100%',
        alignItems: 'center',
        marginTop: -9 * vw,
    },
    topProimg: {
        width: 30 * vw,
        height: 30 * vw,
        borderWidth: 0.5 * vw,
        borderColor: '#ffffff',
        borderRadius: 30 * vw / 2,
        resizeMode: 'cover',
    },
    topProName: {
        fontSize: 3 * vh,
        fontFamily: Fonts.KR,
        color: '#666666'
    },
    chatBtn: {
        alignSelf: 'center',
        paddingVertical: 1.5 * vw,
        paddingHorizontal: 4 * vw,
        borderColor: '#EE3048',
        borderWidth: 0.5 * vw,
        borderRadius: 7 * vw,
        marginVertical: 3 * vw,
        flexDirection: 'row',
    },
    chatBtnIcon: {
        fontSize: 4 * vw,
        marginRight: 2 * vw,
        color: '#EE3048'
    },
    chatBtnTxt: {
        fontSize: 4 * vw,
        fontFamily: Fonts.KS,
        color: '#EE3048'
    },
    topRedCard: {
        backgroundColor: '#EE3060',
        paddingHorizontal: 2 * vw,
        width: 45 * vw,
        borderRadius: 3 * vw,
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'center',
        marginBottom: 3 * vh,
    },
    topRedCardimg: {
        width: 12 * vw,
        height: 6 * vh,
        resizeMode: 'contain',
    },
    topRedCardText: {
        fontSize: 2.2 * vh,
        lineHeight: 3 * vh,
        fontFamily: Fonts.KR,
        color: '#fff',
        paddingTop: 1.5 * vh,
    },
    topRedCardHeading: {
        fontSize: 4 * vh,
        lineHeight: 5.2 * vh,
        fontFamily: Fonts.KS,
        color: '#fff'
    },
    cardMainBox: {
        width: '100%',
        padding: 2 * vw,
        borderRadius: 3 * vw,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 2 * vw,
        backgroundColor: '#fff',
        elevation: 3,
    },
    cardMainBoxImg: {
        width: 9 * vw,
        height: 7 * vh,
        resizeMode: 'contain',
    },
    cardMainBoxTxt: {
        fontSize: 2.2 * vh,
        paddingTop: 1 * vh,
        fontFamily: Fonts.KM,
        color: '#999999',
    },

    badgeTop: {
        width: 8 * vw,
        height: 8 * vw,
        borderColor: '#fff',
        borderWidth: 0.1 * vw,
        backgroundColor: '#EE3060',
        borderRadius: 12 * vw,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: -2 * vh,
        right: 0,
    },
    badgeTopText: {
        fontSize: 2.3 * vh,
        fontFamily: Fonts.KS,
        color: '#fff',
    },
    topCardMain: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 5 * vw
    },

    topBtnMain: {
        backgroundColor: '#EE3060',
        paddingVertical: 2 * vw,
        borderRadius: 7 * vw,
        marginTop: 3 * vw,
        height: 5 * vh,
        flexDirection: 'row',
        alignItems: 'center',
        width: 35 * vw,
        justifyContent: 'center'
    },

    topBtnMaintxt: {
        color: '#fff',
        fontSize: 3.5 * vw,
        fontFamily: Fonts.KR,
    },
    topBtnMainCirle: {
        color: '#EE3060',
        fontSize: 3.5 * vw,
        fontFamily: Fonts.KR,
        backgroundColor: '#fff',
        width: 5 * vw,
        height: 5 * vw,
        textAlign: 'center',
        borderRadius: 2.5 * vw,
        paddingTop: 0 * vh,
    },

    topCardText1: {
        fontSize: 4 * vw,
        fontFamily: Fonts.KM,
        color: '#999999',
        textAlign: 'center',
    },
    topCardText2: {
        fontSize: 8 * vw,
        fontFamily: Fonts.KM,
        color: '#333333',
        textAlign: 'center',
    },


    input: {
        marginTop: 4 * vh,
        width: 92 * vw,
        marginLeft: 4 * vw,
    },
    useravatar: {
        height: 10 * vh,
        width: 10 * vh,
        borderRadius: 10 / 2 * vh,
        // resizeMode: "contain"
    },
    userCircle: {
        // borderWidth: 1,
        width: 10 * vh,
        height: 10 * vh,
        borderRadius: 10 / 2 * vh,
        alignItems: "center",
        justifyContent: "center",
        marginTop: -5 * vh,
        marginLeft: 38 * vw,
        shadowColor: theme.colors.black,
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.17,
        shadowRadius: 4.65,
        elevation: 2,
    },
    cameraImg: {
        width: 1.8 * vh,
        height: 1.8 * vh,
        resizeMode: "contain"
    },
    cameraBtn: {
        // borderWidth: 1,
        backgroundColor: theme.colors.primaryColor,
        width: 3.7 * vh,
        height: 3.7 * vh,
        borderRadius: 3.7 / 2 * vh,
        alignItems: "center",
        justifyContent: "center",
        position: "absolute",
        bottom: -0.6 * vh,
        right: -1 * vw,
    }
}) 
