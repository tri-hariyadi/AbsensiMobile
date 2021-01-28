import { StyleSheet, Dimensions } from 'react-native';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth 
} from 'react-native-responsive-dimensions';
import { colors, customFont } from '../../utils';

const WIDTH = Dimensions.get('window').width;

const Styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: colors.colorVariables.white,
  },
  content: {
    paddingTop: responsiveHeight(4),
    paddingBottom: responsiveHeight(2)
  },
  profileSection: {
    alignItems: 'center',
    borderBottomWidth: 2,
    borderColor: colors.colorVariables.purple2
  },
  imageProfile: {
    width: responsiveHeight(15),
    height: responsiveHeight(15),
    resizeMode: 'contain',
  },
  textName: {
    fontFamily: customFont.secondary[800],
    textTransform: 'capitalize',
    fontSize: responsiveFontSize(3),
    color: colors.colorVariables.purple2
  },
  textGroup: {
    fontFamily: customFont.secondary[700],
    textTransform: 'uppercase',
    fontSize: responsiveFontSize(2.3),
    color: colors.colorVariables.indigo1
  },
  textGroup2: {
    fontFamily: customFont.secondary[600],
    textTransform: 'capitalize',
    fontSize: responsiveFontSize(1.8),
    color: colors.colorVariables.indigo1,
    textAlign: 'center',
  },
  columnWrapperStyle: {
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: responsiveWidth(6)
  },
  menuButton: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: colors.colorVariables.greenLighten,
    borderRadius: (WIDTH / 3) / 2,
    padding: responsiveHeight(1.5),
    margin: responsiveWidth(2),
  },
});

export default Styles;
