import { StyleSheet } from 'react-native';
import { responsiveFontSize } from "react-native-responsive-dimensions";
import { colors, customFont } from '../../../utils';

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingVertical: 4,
    paddingVertical: 10
  },
  text: (colorValue) => ({
    fontSize: responsiveFontSize(1.4),
    color: colorValue ? colors.colorVariables.greenLightDark1 : colors.colorVariables.black,
    fontFamily: customFont.secondary[600],
    marginTop: 3
  })
})