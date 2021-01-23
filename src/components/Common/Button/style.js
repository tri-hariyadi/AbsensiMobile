import { StyleSheet } from 'react-native';
import {
  responsiveHeight,
  responsiveFontSize,
} from "react-native-responsive-dimensions";
import { colors, customFont } from '../../../utils';

const Styles = StyleSheet.create({
  wrapper: (borderRadius) => ({
    borderRadius: borderRadius ? borderRadius : responsiveHeight(16),
    overflow: 'hidden',
    alignSelf: 'stretch',
  }),
  container: (background, type) => ({
    backgroundColor: background ? background : type === 'primary' ? colors.colorVariables.bluePrimary : colors.colorVariables.redLight1,
    paddingVertical: responsiveHeight(2),
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  }),
  text: (color, textBold) => ({
    textAlign: 'center',
    fontSize: responsiveFontSize(2),
    color: color ? color : 'white',
    fontFamily: textBold ? customFont.secondary[700] : customFont.secondary[400],
  }),
  icon: {
    marginRight: 4
  },
  wrapperLoading: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  //style btnIconOnly
  containerBtnIcon: {
    alignSelf: 'stretch',
  },
  BtnIconItemWrapper: (background, height) => ({
    borderRadius: height / 2,
    backgroundColor: background,
    padding: responsiveHeight(1.3),
    alignItems: 'center',
    justifyContent: 'center'
  }),
  animatedView: (scaleValue, opacityValue, height, rippleColor, width, borderRadius) => ({
    position: 'absolute',
    width: width ? width : height,
    height: scaleValue ? height : 0,
    borderRadius: (typeof borderRadius === "number") 
      ? borderRadius > 0 
        ? 
          borderRadius : height / 2 
      : borderRadius ? height / 2 : 0,
    transform: [{ scale: scaleValue }],
    opacity: opacityValue,
    backgroundColor: rippleColor ? rippleColor : colors.colorVariables.white,
    top: 0,
    zIndex: 2
  }),
});

export default Styles;
