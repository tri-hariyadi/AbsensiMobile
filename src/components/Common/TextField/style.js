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
    backgroundColor: theme ? theme : colors.colorVariables.white,
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
    fontFamily: customFont.secondary[300],
    width: '100%',
    color: colors.colorVariables.indigo1
  }
});

export default Styles;
