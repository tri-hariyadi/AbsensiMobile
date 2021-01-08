import { StyleSheet } from 'react-native';
import {
  responsiveHeight,
  responsiveFontSize,
} from "react-native-responsive-dimensions";
import { colors, customFont } from '../../../utils';

const Styles = StyleSheet.create({
  wrapper: (borderRadius) => ({
    borderRadius: borderRadius ? borderRadius : responsiveHeight(16),
    overflow: 'hidden',
    alignSelf: 'stretch',
  }),
  container: (background, type) => ({
    backgroundColor: background ? background : type === 'primary' ? colors.colorVariables.bluePrimary : colors.colorVariables.redLight1,
    paddingVertical: responsiveHeight(2),
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  }),
  text: (color, textBold) => ({
    textAlign: 'center',
    fontSize: responsiveFontSize(2),
    color: color ? color : 'white',
    fontFamily: textBold ? customFont.secondary[700] : customFont.secondary[400],
  }),
  icon: {
    marginRight: 4
  },
  wrapperLoading: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default Styles;
