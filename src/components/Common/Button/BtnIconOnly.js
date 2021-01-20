import React, { useState, useRef } from 'react';
import { View, TouchableWithoutFeedback, Animated } from 'react-native';
import { responsiveFontSize } from 'react-native-responsive-dimensions';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { colors, RippleAnimation } from '../../../utils';
import Styles from './style';

const BtnIconOnly = ({
  type,
  onPress,
  iconName,
  rippleColor,
  containerBtnIconStyle
}) => {
  const maxOpacity = 0.6;
  const [height, setHeight] = useState(0);
  const scaleValue = useRef(new Animated.Value(0)).current;
  const opacityValue = useRef(new Animated.Value(maxOpacity)).current;

  const onBtnIconPress = () => {
    RippleAnimation(scaleValue, opacityValue, maxOpacity);
    if (onPress) {
      onPress();
    }
  }

  const ButtonItem = ({ background }) => (
    <View 
      onLayout={event => setHeight(event.nativeEvent.layout.height)} 
      style={[
        Styles.BtnIconItemWrapper(background, height), 
        !containerBtnIconStyle && { maxHeight: height, maxWidth: height,}]}>
      <Icon
        name={iconName}
        size={responsiveFontSize(2.8)}
        color={colors.colorVariables.white}
      />
    </View>
  )

  const TypeBtn = () => {
    switch (type) {
      case 'primary':
        return <ButtonItem background={colors.colorVariables.bluePrimary} />
      case 'warning':
        return <ButtonItem background={colors.colorVariables.warning} />
      case 'danger':
        return <ButtonItem background={colors.colorVariables.danger} />

      default:
        return <ButtonItem background={colors.colorVariables.purple2} />
    }
  }

  return (
    <TouchableWithoutFeedback onPress={onBtnIconPress}>
      <View style={[Styles.containerBtnIcon, containerBtnIconStyle]}>
        <Animated.View
          style={Styles.animatedView(scaleValue, opacityValue, height, rippleColor, false, true)}
        />
        <TypeBtn />
      </View>
    </TouchableWithoutFeedback>
  )
}

export default BtnIconOnly;
