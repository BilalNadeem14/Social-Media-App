import { StyleSheet, Platform } from "react-native";
import vh from "../../utils/units/vh";
import vw from "../../utils/units/vw";
import theme from "../../utils/units/theme";


export default style = StyleSheet.create({
    tabButtonContainer: {
        height: 7 * vh,
        width: 18 * vw,
        margin: 0,
        paddingTop: 0.5 * vh,
        alignItems: 'center',
        justifyContent: "center",
        // borderRadius:1.5*vw,
        borderColor: 'transparent',
        // borderTopColor: theme.colors.primaryColor,
        borderWidth: 0.7*vh,
        borderRadius: 0.5*vh

    },
    tabButtonIcon: {
        height: 3 * vh,
        width: 3 * vh,
        resizeMode: 'contain',
    },
    titleText: {
        height: 2.4 * vh,
        fontSize: 1.2 * vh,
        color: theme.colors.lightPurple2
    },
    badgeView: {
        elevation: 2,
        shadowColor: theme.colors.graythree,
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.08,
        shadowRadius: 3,
        height: 2.1 * vh,
        width: 2.1 * vh,
        borderColor: theme.colors.fontWhite,
        borderWidth: 1.9,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: theme.colors.primaryBlue,
        position: 'absolute',
        top: 0.5 * vh,
        left: 10 * vw,
        borderRadius: 2.7 / 2 * vh,


    },
    badge: {

        color: '#fff',
        fontSize: 1.3 * vh,
        ...Platform.select({
            android: {
                marginTop: 0.5 * vh,
            },
            ios: {
                // marginTop:0.1*vh
            }
        })

    }

})