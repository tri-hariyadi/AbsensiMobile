import { StyleSheet } from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize
} from 'react-native-responsive-dimensions';
import { colors, customFont } from '../../utils';

const Styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: colors.colorVariables.white,
  },
  content: (isOpen) => ({
    flex: 1,
    paddingHorizontal: responsiveWidth(5),
    justifyContent: isOpen ? 'space-evenly' : 'center',
  }),
  imageLogo: {
    width: responsiveHeight(13),
    height: '100%',
    resizeMode: 'contain',
  },
  imageLogo2: {
    width: responsiveHeight(13),
    height: responsiveHeight(13),
    resizeMode: 'contain',
  },
  backgroundImageStyle: {
    resizeMode: 'stretch',
    height: "100%",
  },
  heroImage: {
    width: "100%",
    height: "100%",
    justifyContent: 'center',
    alignItems: 'center',
  },
  textWelcome: {
    fontFamily: customFont.secondary[700],
    color: colors.colorVariables.white,
    fontSize: responsiveFontSize(4)
  },
  textDesc: {
    fontFamily: customFont.primary[400],
    color: colors.colorVariables.white,
    fontSize: responsiveFontSize(1.6)
  },
  logoWrapper: {
    alignItems: 'center',
  }
});

export default Styles;
