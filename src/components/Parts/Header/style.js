
import { StyleSheet } from 'react-native';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import { colors, customFont } from '../../../utils';

const Styles = StyleSheet.create({
  container: (backgroundColor) => ({
    flexDirection: 'row',
    backgroundColor: backgroundColor ? backgroundColor : colors.colorVariables.purple2,
    paddingVertical: responsiveHeight(1),
    alignItems: 'center',
    paddingHorizontal: responsiveWidth(2)
  }),
  containerBtnIconStyle: {
    position: 'relative',
  },
  title: {
    fontFamily: customFont.secondary[700],
    fontSize: responsiveFontSize(2.4),
    marginLeft: responsiveWidth(3),
    color: colors.colorVariables.white
  }
});

export default Styles;
