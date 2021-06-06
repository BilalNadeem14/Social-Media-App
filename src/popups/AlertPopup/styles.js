import { StyleSheet } from "react-native";

import theme from '../../utils/units/theme'
import vw from '../../utils/units/vw'
import vh from '../../utils/units/vh'

export default StyleSheet.create({
  modalTouchable: {
    width: 100 * vw,
    height: 100 * vh,
    backgroundColor: 'rgba(0,0,0,0.7)',
    alignItems: 'center',
    justifyContent: 'center'
  },
  modalContainer: {
    width: 85 * vw,
    // height: 33 * vh,
    paddingHorizontal: 4 * vw,
    paddingVertical: 5 * vh,
    backgroundColor: 'white',
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 3 * vw,
    position: 'absolute',
    top: 28 * vh,
    left: 7.5 * vw,
    borderColor: "#C1C1C1",
    borderWidth: 0.2 * vh,
    borderTopStartRadius: 6 * vw,
    borderBottomEndRadius: 6 * vw,
    borderTopEndRadius: 2 * vw,
    borderBottomStartRadius: 2 * vw,
  },
  crossIcon: {
    height: 2.5 * vw,
    width: 2.5 * vw,
    resizeMode: "contain"
  },
  crossBtn: {
    position: "absolute",
    top: -1 * vh,
    right: -1 * vh,
    backgroundColor: theme.colors.white,
    width: 3.5 * vh,
    height: 3.5 * vh,
    borderRadius: 3.5 / 2 * vh,
    borderWidth: 0.3 * vh,
    borderColor: theme.colors.gray6,
    alignItems: "center",
    justifyContent: "center"
  },
  title: {
    color: theme.colors.blue,
    fontSize: 2.4 * vh,
    textAlign: "center",
    marginTop: 2 * vh
  },
  titleBox: {
    alignItems: "center",
  },
  underline: {
    backgroundColor: theme.colors.primaryColor,
    width: 9 * vw,
    height: 0.3 * vh,
    marginTop: 0.2 * vh


  },
  check: {
    width: 6.8 * vh,
    height: 6.8 * vh,
    resizeMode: "contain",
    // marginTop: vh * 2
  },
  paymentText: {
    marginTop: 1.6 * vh,
    textAlign: "center",
    fontSize: 1.6 * vh,
    color: theme.colors.blue,
  },
  btnRow: {
    width: 68 * vw,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  btnLabel: {
    color: theme.colors.primaryColor
  },
  yesbutton: {
    maxWidth: 30 * vw,
    height: 5.5 * vh,
    marginVertical: 2 * vh,
    borderWidth: 0.3 * vh,
    borderColor: theme.colors.primaryColor
  },
  twoBtn: {
    maxWidth: 30 * vw,
    height: 5.5 * vh,
    marginVertical: 2 * vh,
    borderWidth: 0.3 * vh,
    borderColor: theme.colors.primaryColor
  }
})