import { StyleSheet } from 'react-native';
import vh from '../../utils/units/vh';
import vw from '../../utils/units/vw';
import { Fonts } from '../../assets/fonts';
import theme from '../../utils/units/theme';
export default style = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: theme.colors.lightPurple2,
    height: vh * 6,
    borderRadius: vw * 1.5,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.17,
    shadowRadius: 4.65,
    // borderColor: '#CE1127',
    // borderWidth: vw * 0.3,
    elevation: 2,
  },
  label: { fontSize: vh * 1.74, color: 'white', fontFamily: Fonts.GB },
});
