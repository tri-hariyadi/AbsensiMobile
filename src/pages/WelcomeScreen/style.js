import { StyleSheet } from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize
} from 'react-native-responsive-dimensions';
import { colors, customFont } from '../../utils';

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  contentWrapper: {
    flex: 1,
    paddingHorizontal: responsiveWidth(7),
    paddingVertical: responsiveHeight(5),
    justifyContent: 'space-evenly',
  },
  backgroundImageStyle: {
    resizeMode: 'stretch',
  },
  linearGradient: {
    width: '100%',
    height: '100%',
    opacity: 0.5,
    position: 'absolute',
  },
  imageLogo: {
    height: responsiveHeight(15),
    width: responsiveWidth(28),
    resizeMode: 'contain',
  },
  text: {
    fontFamily: customFont.secondary[700],
    fontSize: responsiveFontSize(3),
    marginTop: responsiveHeight(2.5),
    color: colors.colorVariables.indigo1
  }
});

export default Styles;
