
import { StyleSheet } from 'react-native';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import { colors, customFont } from '../../../utils';

const Styles = StyleSheet.create({
  container: (backgroundColor) => ({
    flexDirection: 'row',
    backgroundColor: backgroundColor ? backgroundColor : colors.colorVariables.purple2,
    paddingVertical: responsiveHeight(1.5),
    alignItems: 'center',
    paddingHorizontal: responsiveWidth(2)
  }),
  containerBtnIconStyle: {
    position: 'relative',
  },
  titleWrapper: (width) => ({
    flex: 1,
    // marginRight: width,
    marginRight: responsiveFontSize(3.7) + responsiveHeight(3),
    justifyContent: 'center',
    alignItems: 'center',
  }),
  title: {
    fontFamily: customFont.secondary[700],
    fontSize: responsiveFontSize(2.4),
    color: colors.colorVariables.white
  }
});

export default Styles;
