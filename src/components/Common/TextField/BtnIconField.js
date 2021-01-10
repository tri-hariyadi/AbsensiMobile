import React, { useRef } from 'react';
import { View, TouchableWithoutFeedback, Animated, Easing, Platform } from 'react-native';
import { responsiveFontSize } from "react-native-responsive-dimensions";
import Icon from 'react-native-vector-icons/MaterialIcons';
import { colors } from '../../../utils';
import Styles from './style';

const BtnIconField = ({ iconName, onPress, color }) => {
  const maxOpacity = 0.8;
  const scaleValue = useRef(new Animated.Value(0)).current;
  const opacityValue = useRef(new Animated.Value(maxOpacity)).current;

  const onPressIn = () => {
    Animated.timing(scaleValue, {
      toValue: 1,
      duration: 225,
      easing: Easing.bezier(0.0, 0.0, 0.2, 1),
      useNativeDriver: Platform.OS === 'android',
    }).start();
  }

  const onPressOut = () => {
    Animated.timing(opacityValue, {
      toValue: 0,
      useNativeDriver: Platform.OS === 'android',
    }).start(() => {
      scaleValue.setValue(0);
      opacityValue.setValue(maxOpacity);
    });
  }

  const onButtonPressed = () => {
    onPressIn();
    onPressOut();
    setTimeout(() => {
      if (onPress) onPress();
    }, 200)
  }

  return (
    <TouchableWithoutFeedback onPress={onButtonPressed}>
      <View style={Styles.btnFieldWrapper}>
        <Animated.View
          style={Styles.animatedView(scaleValue, opacityValue, color)}
        />
        {iconName &&
          <Icon
            name={iconName}
            size={responsiveFontSize(3)}
            color={colors.colorVariables.indigo1}
          />
        }
      </View>
    </TouchableWithoutFeedback>
  )
}

export default BtnIconField;
