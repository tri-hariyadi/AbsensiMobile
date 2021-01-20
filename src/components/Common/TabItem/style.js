import { StyleSheet } from 'react-native';
import { responsiveFontSize, responsiveHeight } from "react-native-responsive-dimensions";
import { colors, customFont } from '../../../utils';

export const styles = StyleSheet.create({
  container: (width) => ({
    alignItems: 'center',
    paddingVertical: 8,
    overflow: 'hidden',
    paddingHorizontal: responsiveHeight(3),
    // backgroundColor: 'yellow',
  }),
  text: (colorValue) => ({
    fontSize: responsiveFontSize(1.4),
    color: colorValue ? colors.colorVariables.purple2 : colors.colorVariables.black,
    fontFamily: customFont.secondary[600],
    marginTop: 3,
    minWidth: '10%',
    textAlign: 'center',
  }),
  animatedView: (scaleValue, opacityValue, width, height) => ({
    position: 'absolute',
    width: width,
    height: scaleValue ? width : 0,
    borderRadius: width / 2,
    transform: [{ scale: scaleValue }],
    opacity: opacityValue,
    backgroundColor: colors.colorVariables.black2,
    top: -(width - height)/2,
  }),
})