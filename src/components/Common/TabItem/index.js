import React, { useEffect, useRef } from 'react';
import { Text, View, Animated, Easing, TouchableWithoutFeedback } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { responsiveFontSize } from "react-native-responsive-dimensions";
import { styles } from './style';
import { colors } from '../../../utils';

const TabItem = ({ title, active, onPress, onLongPress }) => {
  const animatedColor = useRef(new Animated.Value(0)).current;
  const animatedScale = useRef(new Animated.Value(0)).current;

  const animatedIcon = () => {
    animatedScale.setValue(0);
    animatedColor.setValue(0);
    const scaleAnimation = Animated.timing(animatedScale, {
      toValue: 1,
      duration: 600,
      easing: Easing.easing,
      useNativeDriver: Platform.OS === 'android' ? false : true
    });

    const colorAnimation = Animated.timing(animatedColor, {
      toValue: 1,
      duration: 300,
      useNativeDriver: Platform.OS === 'android' ? false : true
    });
    Animated.stagger(500, [scaleAnimation, colorAnimation]).start();
  }

  let labelStyle = {
    transform: [{
      scale: animatedScale.interpolate({
        inputRange: [0, 0.7, 0.9, 1],
        outputRange: [1, 0.4, 2, 1]
      })
    }],
    color: animatedColor.interpolate({
      inputRange: [0, 1],
      outputRange: [
        colors.colorVariables.black1, active ? colors.colorVariables.greenLightDark1 : colors.colorVariables.black1
      ],
    }),
  }

  const onTabPressed = () => {
    if (onPress) onPress();
    if (!active) animatedIcon();
  }

  useEffect(() => {
    Animated.timing(animatedColor, {
      toValue: 1,
      duration: 100,
      useNativeDriver: Platform.OS === 'android' ? false : true
    }).start();
  }, [])

  const IconTabMenu = () => {
    switch (title) {
      case 'Home':
        return (
          <Animated.Text style={labelStyle}>
            <Icon
              name='home'
              size={responsiveFontSize(2.8)}
            />
          </Animated.Text>
        )
      case 'Kas':
        return (
          <Animated.Text style={labelStyle}>
            <Icon
              name='menu-book'
              size={responsiveFontSize(2.8)}
            />
          </Animated.Text>
        )
      case 'Profile':
        return (
          <Animated.Text style={labelStyle}>
            <Icon
              name='person'
              size={responsiveFontSize(2.8)}
            />
          </Animated.Text>
        )
      default:
        return null;
    }
  }

  return (
    <TouchableWithoutFeedback
      onPress={onTabPressed}
      onLongPress={onLongPress}
    >
      <View style={styles.container}>
        <IconTabMenu />
        <Text style={styles.text(active)}>{title}</Text>
      </View>
    </TouchableWithoutFeedback>
  )
}

export default TabItem;
