import React, { useRef } from 'react'
import { StyleSheet, Text, View, Animated } from 'react-native'
import { Button } from '../../components';

const HomePage = props => {
  const animatedColor = useRef(new Animated.Value(0)).current;

  const onSubmit = () => {
    animatedColor.setValue(0)
    Animated.timing(animatedColor, {
      toValue: 1,
      duration: 3000,
      useNativeDriver: Platform.OS === 'android' ? false : true
    }).start();
  }

  const colorValue = animatedColor.interpolate({
    inputRange: [0, 1],
    outputRange: ['#aaa', 'red']
  });

  return (
    <View>
      <Animated.Text style={{ color: colorValue }}>Home Page</Animated.Text>
      <Button
        type="primary"
        onPress={() => props.navigation.navigate('LoginPage')}
      >
        Click Me
      </Button>
    </View>
  )
}

export default HomePage

const styles = StyleSheet.create({})
