import { StyleSheet } from 'react-native';
import { responsiveFontSize, responsiveHeight } from 'react-native-responsive-dimensions';
import { colors, customFont } from '../../utils';

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.colorVariables.white,
  },
  header: {
    flex: 0,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: responsiveHeight(2),
    backgroundColor: colors.colorVariables.purple2,
  },
  textHour: {
    fontFamily: customFont.secondary[600],
    fontSize: responsiveFontSize(5),
    color: colors.colorVariables.white
  },
  textZone: {
    fontFamily: customFont.secondary[400],
    fontSize: responsiveFontSize(2),
    color: colors.colorVariables.white
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  btnCaptureContainer: {
    flex: 0,
    justifyContent: 'center',
    alignItems: 'center',
    height: responsiveHeight(10),
    backgroundColor: colors.colorVariables.purple2
  },
  btnCaptureWrapper: {
    position: 'absolute',
    bottom: 17,
  },
  textCapture: {
    fontFamily: customFont.secondary[600],
    fontSize: responsiveFontSize(1.8),
    color: colors.colorVariables.white,
  },
  containerBtnIconStyle: {
    position: "relative",
    alignSelf: 'center'
  },
});

export default Styles;