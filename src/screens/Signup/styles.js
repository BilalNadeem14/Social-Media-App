import { StyleSheet, Platform } from "react-native";

import theme from '../../utils/units/theme'
import fonts from '../../assets/fonts'
import vw from '../../utils/units/vw'
import vh from '../../utils/units/vh'

export default StyleSheet.create({
    mainContainer: {
    },
    container: {

    },
    scrollContent: {
        width: 100 * vw,
        alignItems: "center",
        paddingTop: 9 * vh,
        paddingHorizontal: 4 * vw,
    },
    expandedRow: {
        width: 92 * vw,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    inputWidth: {
        width: 43 * vw,
    },
    inputFieldStyle: {
        fontFamily: fonts.Fonts.JR
    },
    messageField: {
        height: 20 * vh
    },
    inputMessageFieldStyle: {
        fontFamily: fonts.Fonts.JR,
        height: 20 * vh,
        paddingTop: 1 * vh
    },
    btnLabel: {
        color: theme.colors.primaryColor
    },
    btn: {
        width: 40 * vw,
        marginVertical: 2 * vh,
        borderWidth: 0.3 * vh,
        borderColor: theme.colors.primaryColor
    },
    accountText: {
        fontSize: 1.8 * vh,
        color: theme.colors.blue
    },
    loginText: {
        fontSize: 1.8 * vh,
        color: theme.colors.primaryColor,
        textDecorationLine: "underline"
    },
    textRow: {
        flexDirection: "row",
        alignItems: "center"
    }


})