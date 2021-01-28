import React, { useEffect, useRef, useState } from 'react';
import { Text, View, Animated, Easing, TouchableWithoutFeedback } from 'react-native';
// import Icon from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { responsiveFontSize } from "react-native-responsive-dimensions";
import { styles } from './style';
import { colors, RippleAnimation } from '../../../utils';

const TabItem = ({ title, active, onPress, onLongPress }) => {
  const maxOpacity = 0.5;
  const scaleValue = useRef(new Animated.Value(0)).current;
  const opacityValue = useRef(new Animated.Value(maxOpacity)).current;
  const animatedColor = useRef(new Animated.Value(0)).current;
  const animatedScale = useRef(new Animated.Value(0)).current;
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const [icon, setIcon] = useState(false)

  const animatedIcon = () => {
    animatedScale.setValue(0);
    animatedColor.setValue(0);
    const scaleAnimation = Animated.timing(animatedScale, {
      toValue: 1,
      duration: 450,
      easing: Easing.ease,
      useNativeDriver: false
    });

    const colorAnimation = Animated.timing(animatedColor, {
      toValue: 1,
      duration: 225,
      easing: Easing.bezier(0.0, 0.0, 0.2, 1),
      useNativeDriver: false
    });
    Animated.stagger(350, [scaleAnimation, colorAnimation]).start();
  }

  let labelStyle = {
    transform: [{
      scale: animatedScale.interpolate({
        inputRange: [0, 0.6, 0.8, 1],
        outputRange: [active ? 0.83 : 1, 0.6, 1.9, active ? 0.83 : 1]
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
      useNativeDriver: false
    }).start();
    if (!active.current) {
      setTimeout(() => setIcon(active), active ? 350 : 0);
    }
  }, [active])

  const IconTabMenu = () => {
    switch (title) {
      case 'Home':
        return (
          <Animated.Text style={labelStyle}>
            <MaterialCommunityIcons
              name={icon ? 'home' : 'home-outline'}
              size={responsiveFontSize(2.8)}
            />
          </Animated.Text>
        )
      case 'Kas':
        return (
          <Animated.Text style={labelStyle}>
            <MaterialCommunityIcons
              name={icon ? 'notebook' : 'notebook-outline'}
              size={responsiveFontSize(2.8)}
            />
          </Animated.Text>
        )
      case 'Profile':
        return (
          <Animated.Text style={labelStyle}>
            <MaterialCommunityIcons
              name={icon ? 'account' :'account-outline' }
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
      <View 
        onLayout={event => {
          setWidth(event.nativeEvent.layout.width);
          setHeight(event.nativeEvent.layout.height);
        }} 
        style={styles.container(width)}>
        <Animated.View
          style={styles.animatedView(scaleValue, opacityValue, width-5, height)}
        />
        <IconTabMenu />
        <Text style={styles.text(active)}>{title}</Text>
      </View>
    </TouchableWithoutFeedback>
  )
}

export default TabItem;
