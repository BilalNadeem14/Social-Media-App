import { StyleSheet } from "react-native";
import vh from "../../utils/units/vh";
import vw from "../../utils/units/vw";

export default styles = StyleSheet.create({
    icon:{
        height: 2.1 * vh,
        width: 2.2* vh,
        resizeMode: 'contain',
    },
    container:{
        height:5*vh,
        width:5*vw,
        alignItems:'center',
        justifyContent:'center'
    }
})