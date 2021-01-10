import { StyleSheet } from 'react-native';
import { colors } from '../../../utils';
import { responsiveWidth } from 'react-native-responsive-dimensions';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingHorizontal: responsiveWidth(5),
    backgroundColor: colors.colorVariables.white,
    borderTopWidth: 1,
    borderColor: colors.colorVariables.whiteSmoke2
  }
})