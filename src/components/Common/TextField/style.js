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
    width: '100%',
    paddingHorizontal: responsiveWidth(4),
    width: '100%',
    borderWidth: focused ? 2 : 1,
    borderColor: error ? colors.colorVariables.danger : focused ? colors.colorVariables.blue1 : colors.borderColor
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
    width: "82%",
    fontSize:responsiveFontSize(1.9)
  },
  animatedView: (scaleValue, opacityValue, color) => ({
    position: 'absolute',
    width: responsiveHeight(5),
    height: scaleValue ? responsiveHeight(5) : 0,
    borderRadius: responsiveHeight(5) / 2,
    transform: [{ scale: scaleValue }],
    opacity: opacityValue,
    backgroundColor: color ? color : colors.colorVariables.black2,
  }),
  btnFieldWrapper: {
    flex: 1,
    borderRadius: responsiveHeight(5) / 2,
    backgroundColor: 'transparent',
    width: responsiveHeight(5),
    height: responsiveHeight(5),
    justifyContent: 'center',
    alignItems: 'center'
  },
  btnField: {
    position: 'absolute', 
    right: 15
  }
});

export default Styles;
