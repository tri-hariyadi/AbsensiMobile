import { StyleSheet } from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from "react-native-responsive-dimensions";
import { colors, customFont } from '../../../utils';

const Styles = StyleSheet.create({
  wrapper: (radiusSize, error, focused, theme) => ({
    flexDirection: 'row',
    backgroundColor: 'yellow',
    alignItems: 'center',
    backgroundColor: 'transparent',
    borderRadius: responsiveHeight(radiusSize ? radiusSize : 5),
    width: responsiveWidth(80),
    paddingHorizontal: responsiveWidth(4),
    width: '100%',
    borderWidth: focused ? 2 : 1,
    borderColor: error ? 'red' : focused ? colors.colorVariables.blue1 : colors.borderColor
  }),
  errorHelper: {
    flexDirection: 'row-reverse',
    marginTop: responsiveHeight(0.5),
  },
  errorText: {
    color: 'red',
    textAlign: 'left',
    marginRight: responsiveWidth(4.5),
    fontSize: responsiveFontSize(1.5),
    fontFamily: customFont.secondary[400]
  },
  input: {
    fontFamily: customFont.secondary[400],
    width: '100%',
    color: colors.colorVariables.indigo1,
    width: "82%"
  },
  animatedView: (scaleValue, opacityValue, color) => ({
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: responsiveHeight(4.8),
    height: scaleValue ? responsiveHeight(4.8) : 0,
    borderRadius: responsiveHeight(4.8) / 2,
    transform: [{ scale: scaleValue }],
    opacity: opacityValue,
    backgroundColor: color ? color : colors.colorVariables.black2,
  }),
});

export default Styles;
