import { StyleSheet } from 'react-native';
import { responsiveFontSize, responsiveHeight } from "react-native-responsive-dimensions";
import { colors, customFont } from '../../../utils';

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingVertical: 8,
    overflow: 'hidden',
    // width: '18%',
    paddingHorizontal: responsiveHeight(3),
    // backgroundColor: 'yellow',
    // paddingVertical: 0
  },
  text: (colorValue) => ({
    fontSize: responsiveFontSize(1.4),
    color: colorValue ? colors.colorVariables.purple2 : colors.colorVariables.black,
    fontFamily: customFont.secondary[600],
    marginTop: 3,
    minWidth: 50,
    textAlign: 'center'
  }),
  animatedView: (scaleValue, opacityValue) => ({
    position: 'absolute',
    width: responsiveHeight(10),
    height: scaleValue ? responsiveHeight(10) : 0,
    borderRadius: responsiveHeight(10) / 2,
    transform: [{ scale: scaleValue }],
    opacity: opacityValue,
    backgroundColor: colors.colorVariables.black2,
    top: -11
  }),
})