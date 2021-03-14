import React, { useEffect, useState, useRef } from 'react';
import { View, Text, TextInput, Animated, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { change } from 'redux-form';
import { responsiveFontSize, responsiveWidth } from "react-native-responsive-dimensions";
import { colors } from '../../../utils';
import Gap from '../Gap';
import Styles from './style';
import BtnIconField from './BtnIconField';

const DEVICE_WIDTH = Dimensions.get('screen').width;

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
  onFocusTextField,
  showSoftInputOnFocus,
  input: { onChange, ...restInput },
  meta: { error, warning, touched, form, dispatch },
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [zIndexSize, setZIndexSize] = useState(-1);
  const [secureText, setSecureText] = useState(secureTextEntry);
  const [color, setColor] = useState(colors.colorVariables.indigo1);
  const animatedIsFocused = useRef(new Animated.Value(restInput.value !== '' ? 0 : 1)).current;

  const updateField = () => dispatch(change(form, restInput.name, ''));
  const handleFocus = () => {
    if (onFocusTextField) onFocusTextField();
    setIsFocused(true);
  }
  const handleBlur = () => setIsFocused(false);

  useEffect(() => {
    if (!isFocused.current || !restInput.value.current) {
      if (isFocused || restInput.value !== '') {
        setZIndexSize(1);
      } else {
        setTimeout(() => setZIndexSize(-1), 20);
      }

      Animated.timing(animatedIsFocused, {
        toValue: (isFocused || restInput.value !== '') ? 1 : 0,
        duration: 200,
        useNativeDriver: false
      }).start();
    }

    if (!touched.current || !error.current) {
      if (touched && error) {
        setColor(colors.colorVariables.danger);
      } else {
        setColor(colors.colorVariables.indigo1);
      }
    }
  }, [isFocused, restInput.value, touched, error]);

  const labelStyle = {
    position: 'absolute',
    left: iconName ? responsiveWidth(11) : responsiveWidth(4),
    top: animatedIsFocused.interpolate({
      inputRange: [0, 1],
      outputRange: DEVICE_WIDTH <= 320 ? [11, -7] : [14, -10],
    }),
    fontSize: animatedIsFocused.interpolate({
      inputRange: [0, 1],
      outputRange: [responsiveFontSize(1.8), responsiveFontSize(1.6)],
    }),
    color: animatedIsFocused.interpolate({
      inputRange: [0, 1],
      outputRange: [
        (error && touched) ? colors.colorVariables.danger : colors.colorVariables.black1,
        isFocused ? (error && touched) ? colors.colorVariables.danger : colors.colorVariables.blue1
          : colors.colorVariables.black1
      ],
    }),
    backgroundColor: theme ? theme : colors.colorVariables.white,
    paddingHorizontal: 4,
    zIndex: zIndexSize,
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
              color={color}
            />
            <Gap width={1.5} />
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
          secureTextEntry={secureText}
          returnKeyType={returnKeyType}
          autoCapitalize={autoCapitalize}
          onSubmitEditing={onSubmitEditing} 
          underlineColorAndroid='transparent'
          showSoftInputOnFocus={showSoftInputOnFocus}
        />
        {secureTextEntry && !(error && touched) &&
          <View style={Styles.btnField}>
            <BtnIconField
              iconName={secureText ? "visibility-off" : "visibility"}
              bgColor='transparent'
              onPress={() => setSecureText(!secureText)}
            />
          </View>
        }
        {!secureTextEntry && !(error && touched) && restInput.value !== '' &&
          <View style={Styles.btnField}>
            <BtnIconField
              iconName='cancel'
              onPress={updateField}
            />
          </View>
        }
        {touched && error &&
          <Icon
            name="error"
            style={[Styles.btnField, { right: -5 }]}
            size={responsiveFontSize(3)}
            color={colors.colorVariables.danger}
          />
        }
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
