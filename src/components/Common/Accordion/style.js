import { StyleSheet } from 'react-native';
import {
  responsiveHeight,
  responsiveFontSize,
  responsiveWidth
} from "react-native-responsive-dimensions";
import { colors, customFont } from '../../../utils';

const Styles = StyleSheet.create({
  container: (noBackground) => ({
    backgroundColor: !noBackground ? colors.colorVariables.whiteSmoke : 'transparent',
    overflow: 'hidden',
    borderRadius: 10,
  }),
  dropdownContentWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  iconWrapper: {
    // height: responsiveHeight(4),
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: (noBackground) => ({
    marginLeft: !noBackground ? responsiveWidth(3) : 0,
    fontFamily: customFont.secondary[600],
    fontSize: responsiveFontSize(2),
    color: colors.colorVariables.indigo1,
    textTransform: 'capitalize',
  }),
  childrenWrapper: (labelIcon, noBackground) => ({
    // paddingHorizontal: labelIcon ? responsiveWidth(14) : responsiveHeight(1),
    paddingHorizontal: responsiveWidth(3),
    paddingBottom: !noBackground ? responsiveHeight(3) : 0,
  }),
  wrapperArrowValue: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    // marginRight: -6,
  },
  textValue: {
    marginRight: 10,
    fontFamily: customFont.secondary[600],
  }
});

export default Styles;
