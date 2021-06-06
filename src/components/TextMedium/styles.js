import { StyleSheet } from "react-native";
import vh from "../../utils/units/vh";
import { Fonts } from "../../assets/fonts";

export default style = StyleSheet.create({
    text: {
        fontSize: 2.5 * vh,
        fontFamily: Fonts.GM,
        color: '#000',
        padding: 0,
        margin: 0,
        ...Platform.select({
            android: {
                paddingBottom: 0.2 * vh
            }
        })
    }
})