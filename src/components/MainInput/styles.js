import { StyleSheet } from 'react-native';
import vh from '../../utils/units/vh';
import vw from '../../utils/units/vw';
import { Fonts } from '../../assets/fonts';
import theme from '../../utils/units/theme';
const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 6 * vh,
    backgroundColor: theme.colors.white,
    borderRadius: 0.5 * vh,

    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#EFEFEF',
    borderWidth: vw * 0.3,
    marginBottom: vh * 2,
  },
  field: {
    flex: 1,
    // width: 60 * vw,
    fontFamily: Fonts.PL,
    marginLeft: vw * 2,
    fontSize: 1.7 * vh,
    // top:0.3*vh,
    textAlignVertical: 'center',
    padding: 0,
    margin: 0,
    paddingLeft: 2 * vw,
    color: theme.colors.darkGray,
    paddingRight: vw * 3,
  },
  leftIcon: {
    marginLeft: 4 * vw,
    height: 1.5 * vh,
  },
  rightIcon: {
    marginRight: 4 * vw,
    height: 2.1 * vh,
  },
  label: {
    fontSize: 1.8 * vh,
    color: '#787878',
    marginLeft: 2 * vw,
  },
  labelContainer: {
    width: '100%',

    marginBottom: vh * 0.4,
  },
});
export default styles;
