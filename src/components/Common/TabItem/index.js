import React, { useEffect, useRef } from 'react';
import { Text, View, Animated, Easing, TouchableWithoutFeedback } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { responsiveFontSize } from "react-native-responsive-dimensions";
import { styles } from './style';
import { colors } from '../../../utils';

const TabItem = ({ title, active, onPress, onLongPress }) => {
  const maxOpacity = 0.8;
  const scaleValue = useRef(new Animated.Value(0)).current;
  const opacityValue = useRef(new Animated.Value(maxOpacity)).current;
  const animatedColor = useRef(new Animated.Value(0)).current;
  const animatedScale = useRef(new Animated.Value(0)).current;

  const onPressIn = () => {
    Animated.timing(scaleValue, {
      toValue: 1,
      duration: 225,
      easing: Easing.bezier(0.0, 0.0, 0.2, 0.1),
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
      duration: 225,
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
        colors.colorVariables.black3, active ? colors.colorVariables.purple2 : colors.colorVariables.black3
      ],
    }),
  }

  const onTabPressed = () => {
    if (onPress) onPress();
    if (!active) {
      onPressIn();
      onPressOut();
      animatedIcon();
    }
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
              size={responsiveFontSize(2.5)}
            />
          </Animated.Text>
        )
      case 'Kas':
        return (
          <Animated.Text style={labelStyle}>
            <Icon
              name='menu-book'
              size={responsiveFontSize(2.5)}
            />
          </Animated.Text>
        )
      case 'Profile':
        return (
          <Animated.Text style={labelStyle}>
            <Icon
              name='person'
              size={responsiveFontSize(2.5)}
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
        <Animated.View
          style={styles.animatedView(scaleValue, opacityValue)}
        />
        <IconTabMenu />
        <Text style={styles.text(active)}>{title}</Text>
      </View>
    </TouchableWithoutFeedback>
  )
}

export default TabItem;
