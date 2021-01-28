import React from 'react';
import { Text, View } from 'react-native';
import { Button } from '../../Common';
import Styles from './style';

const Header = ({ 
  title,
  onPress,
  background,
  rippleColor
}) => {
  const onBtnBackPressed = () => {
    if (onPress) {
      onPress();
    }
  }
  return (
    <View style={Styles.container(background)}>
      <Button
        BtnIcon
        large={1.2}
        rippleColor={rippleColor}
        iconName="keyboard-arrow-left"
        type="transparent"
        containerBtnIconStyle={Styles.containerBtnIconStyle}
        onPress={onBtnBackPressed}
      />
      <Text style={Styles.title}>{title}</Text>
    </View>
  )
}

export default Header;
