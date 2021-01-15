import React from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { TouchableNativeFeedback } from 'react-native-gesture-handler';
import { responsiveFontSize } from 'react-native-responsive-dimensions';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { colors } from '../../../utils';
import BtnIconOnly from './BtnIconOnly';
import Styles from './style';

const Button = ({
  onPress,
  children,
  background,
  type,
  color,
  rippleColor,
  borderRadius,
  textBold,
  iconName,
  isLoading,
  BtnIcon
}) => {

  const onPressing = () => {
    if (onPress) {
      onPress();
    }
  }

  if (BtnIcon) {
    return <BtnIconOnly 
      rippleColor={rippleColor}
      iconName={iconName}
      type={type}
    />
  }

  return (
    <View style={Styles.wrapper(borderRadius)}>
      <TouchableNativeFeedback
        onPress={onPressing}
        background={TouchableNativeFeedback.Ripple(
          rippleColor ? rippleColor : colors.colorVariables.white, true
        )}
      >
        <View style={Styles.container(background, type)}>
          {isLoading ?
            <View style={Styles.wrapperLoading}>
              <ActivityIndicator size={20} color={colors.colorVariables.white} />
              <Text style={[Styles.text(color, textBold), { marginLeft: 5 }]}>Loading...</Text>
            </View>
            : 
            <>
              {iconName &&
                <Icon
                  name={iconName}
                  size={responsiveFontSize(2.8)}
                  color={colors.colorVariables.white}
                  style={Styles.icon}
                />
              }
              <Text style={Styles.text(color, textBold)}>{children}</Text>
            </>
          }
        </View>
      </TouchableNativeFeedback>
    </View>
  )
}

export default Button;
