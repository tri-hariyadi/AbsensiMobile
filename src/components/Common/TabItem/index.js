import React, { useEffect, useRef, useState } from 'react';
import { Text, View, Animated, Easing, TouchableWithoutFeedback } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { responsiveFontSize } from "react-native-responsive-dimensions";
import { styles } from './style';
import { colors, RippleAnimation } from '../../../utils';

const TabItem = ({ title, active, onPress, onLongPress }) => {
  const maxOpacity = 0.7;
  const scaleValue = useRef(new Animated.Value(0)).current;
  const opacityValue = useRef(new Animated.Value(maxOpacity)).current;
  const animatedColor = useRef(new Animated.Value(0)).current;
  const animatedScale = useRef(new Animated.Value(0)).current;
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  const animatedIcon = () => {
    animatedScale.setValue(0);
    animatedColor.setValue(0);
    const scaleAnimation = Animated.timing(animatedScale, {
      toValue: 1,
      duration: 500,
      easing: Easing.easing,
      useNativeDriver: Platform.OS === 'android' ? false : true
    });

    const colorAnimation = Animated.timing(animatedColor, {
      toValue: 1,
      duration: 225,
      useNativeDriver: Platform.OS === 'android' ? false : true
    });
    Animated.stagger(400, [scaleAnimation, colorAnimation]).start();
  }

  let labelStyle = {
    transform: [{
      scale: animatedScale.interpolate({
        inputRange: [0, 0.7, 0.9, 1],
        outputRange: [1, 0.4, 1.8, 1]
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
      RippleAnimation(scaleValue, opacityValue, maxOpacity);
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
      <View 
        onLayout={event => {
          setWidth(event.nativeEvent.layout.width);
          setHeight(event.nativeEvent.layout.height);
        }} 
        style={styles.container(width)}>
        <Animated.View
          style={styles.animatedView(scaleValue, opacityValue, width, height)}
        />
        <IconTabMenu />
        <Text style={styles.text(active)}>{title}</Text>
      </View>
    </TouchableWithoutFeedback>
  )
}

export default TabItem;
