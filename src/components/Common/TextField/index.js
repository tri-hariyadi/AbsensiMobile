import React, { useEffect, useState, useRef } from 'react';
import { View, Text, TextInput, Animated, Platform } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { responsiveFontSize } from "react-native-responsive-dimensions";
import { colors } from '../../../utils';
import Gap from '../Gap';
import Styles from './style';

const TextField = ({
  label,
  theme,
  iconName,
  multiline,
  radiusSize,
  externalRef,
  placeholder,
  keyboardType,
  blurOnSubmit,
  returnKeyType,
  floatingLabel,
  autoCapitalize,
  secureTextEntry,
  onSubmitEditing,
  input: { onChange, ...restInput },
  meta: { error, warning, touched },
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const animatedIsFocused = useRef(new Animated.Value(restInput.value !== '' ? 0 : 1)).current;

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);

  useEffect(() => {
    if (!isFocused.current) {
      Animated.timing(animatedIsFocused, {
        toValue: (isFocused || restInput.value !== '') ? 1 : 0,
        duration: 300,
        useNativeDriver: Platform.OS === 'android' ? false : true
      }).start();
    }
  }, [isFocused]);

  const labelStyle = {
    position: 'absolute',
    left: floatingLabel ? iconName ? 45 : 14 : 14,
    top: animatedIsFocused.interpolate({
      inputRange: [0, 1],
      outputRange: [14, -9],
    }),
    fontSize: animatedIsFocused.interpolate({
      inputRange: [0, 1],
      outputRange: [responsiveFontSize(1.8), responsiveFontSize(1.6)],
    }),
    color: animatedIsFocused.interpolate({
      inputRange: [0, 1],
      outputRange: [colors.colorVariables.black1, isFocused ? colors.colorVariables.blue1 : colors.colorVariables.black1],
    }),
    backgroundColor: theme ? theme : colors.colorVariables.white,
    paddingHorizontal: 4,
    zIndex: 1,
  }

  return (
    <View>
      {floatingLabel &&
        <Animated.Text style={labelStyle}>
          {label}
        </Animated.Text>
      }
      <View style={Styles.wrapper(radiusSize, touched && error, isFocused, theme)}>
        {iconName &&
          <>
            <Icon
              name={iconName}
              size={responsiveFontSize(2.5)}
              color={touched && error ? 'red' : colors.colorVariables.indigo1}
            />
            <Gap width={1.2} />
          </>
        }
        <TextInput
          {...restInput}
          ref={externalRef}
          onBlur={handleBlur}
          style={Styles.input}
          multiline={multiline}
          onFocus={handleFocus}
          onChangeText={onChange}
          value={restInput.value}
          placeholder={placeholder}
          keyboardType={keyboardType}
          blurOnSubmit={blurOnSubmit}
          returnKeyType={returnKeyType}
          autoCapitalize={autoCapitalize}
          secureTextEntry={secureTextEntry}
          onSubmitEditing={onSubmitEditing}
        />
      </View>
      {touched && error &&
        <View style={Styles.errorHelper}>
          <Text style={Styles.errorText}>{error}</Text>
        </View>
      }
    </View>
  )
}

export default TextField;