import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TouchableNativeFeedback } from 'react-native-gesture-handler';
import { color } from 'react-native-reanimated';
import { responsiveFontSize, responsiveHeight } from 'react-native-responsive-dimensions';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { colors } from '../../../utils';
// import Styles from './style';

const BtnIconOnly = ({
  rippleColor,
  iconName,
  type
}) => {
  const [background, setBackground] = useState(colors.colorVariables.purple2);
  const typeBtn = () => {
    switch (type) {
      case 'primary':
        return setBackground(colors.colorVariables.bluePrimary);
      case 'warning':
        return setBackground(colors.colorVariables.warning);
      case 'danger':
        return setBackground(colors.colorVariables.danger);
    
      default:
        return colors.colorVariables.purple2;
    }
  }

  useEffect(() => {
    if (type === undefined || !type) {
      type = 'primary'
    }
    if (!type.current) {
      typeBtn();
    }
  }, [type]);

  return (
    <View style={Styles.containerBtnIcon}>
      <TouchableNativeFeedback
        background={TouchableNativeFeedback.Ripple(
          rippleColor ? rippleColor : colors.colorVariables.white, true
        )}>
        <View style={Styles.BtnIconItemWrapper(background)}>
          <Icon
            name={iconName}
            size={responsiveFontSize(2.8)}
            color={colors.colorVariables.white}
          />
        </View>
      </TouchableNativeFeedback>
    </View>
  )
}

export default BtnIconOnly;

const Styles = StyleSheet.create({
  containerBtnIcon: {
    borderRadius: 100,
    overflow: 'hidden',
    alignSelf: 'stretch',
    position: 'absolute',
    bottom: 10,
    right: 10
  },
  BtnIconItemWrapper: (background) => ({
    backgroundColor: background,
    padding: responsiveHeight(1.8),
  })
})
