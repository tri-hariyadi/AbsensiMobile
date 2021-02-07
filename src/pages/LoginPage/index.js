import React, { useRef, useEffect, useState } from 'react';
import {
  View,
  Text,
  StatusBar,
  Image,
  ImageBackground,
  Keyboard,
  ScrollView,
  Animated,
  Easing,
  KeyboardAvoidingView
} from 'react-native';
import { responsiveHeight } from 'react-native-responsive-dimensions';
import { Field, reduxForm } from 'redux-form';
import { ICLogoApp, ILBgLogin } from '../../assets';
import { Gap, TextField, Button, Link } from '../../components';
import { LoginValidation } from '../../config/validation';
import { colors } from '../../utils';
import Styles from './style';

const LoginPage = props => {
  const a = useRef();
  const b = useRef();
  const scrollViewRef = useRef();
  const [isOpen, setIsOpen] = useState(false);
  const keyboardShowListener = useRef(null);
  const keyboardHideListener = useRef(null);
  const animated = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    keyboardShowListener.current = Keyboard.addListener('keyboardDidShow', () =>
      setIsOpen(true),
    );
    keyboardHideListener.current = Keyboard.addListener('keyboardDidHide', () =>
      setIsOpen(false),
    );

    if (!isOpen.current) {
      Animated.timing(animated, {
        toValue: isOpen ? 1 : 0,
        duration: 300,
        easing: Easing.linear,
        useNativeDriver: false
      }).start();
    }
    return () => {
      keyboardShowListener.current.remove();
      keyboardHideListener.current.remove();
    }
  }, [isOpen]);

  const onSubmit = (data) => {
    props.navigation.navigate('MainApp');
    // alert(JSON.stringify(data));
  }

  return (
    <>
      <StatusBar backgroundColor={colors.colorVariables.bluePrimary} barStyle="light-content" />
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : null}
        style={{ flex: 1 }}>
        <ScrollView
          ref={scrollViewRef}
          showsVerticalScrollIndicator={false}
          keyboardDismissMode="none"
          keyboardShouldPersistTaps="always"
          contentContainerStyle={Styles.container}
        >
          <Animated.View style={{
            opacity: animated.interpolate({
              inputRange: [0, 1],
              outputRange: [1, 0],
            }),
            height: animated.interpolate({
              inputRange: [0, 1],
              outputRange: ["40%", "0%"],
            }),
            display: isOpen ? 'none' : 'flex'
          }}>
            <ImageBackground
              source={ILBgLogin}
              style={Styles.heroImage}
              imageStyle={Styles.backgroundImageStyle}>
              <Image source={ICLogoApp} style={Styles.imageLogo2} />
              <Gap height={2} />
              <Text style={Styles.textWelcome}>Welcome</Text>
              <Text style={Styles.textDesc}>Sign in to continue</Text>
            </ImageBackground>
          </Animated.View>
          <View style={Styles.content(isOpen)}>
            <View style={Styles.logoWrapper}>
              <Animated.View
                style={{
                  opacity: animated.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, 1],
                  }),
                  height: animated.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, responsiveHeight(20)],
                  }),
                  display: isOpen ? 'flex' : 'none'
                }}>
                <Image source={ICLogoApp} style={Styles.imageLogo} />
              </Animated.View>
            </View>
            <View>
              <Field
                externalRef={a}
                name='username'
                floatingLabel
                iconName='person'
                autoCapitalize='none'
                component={TextField}
                returnKeyType='next'
                blurOnSubmit={false}
                label='Username'
                onSubmitEditing={() => b.current.focus()}
              />
              <Gap height={3} />
              <Field
                externalRef={b}
                name='password'
                floatingLabel
                iconName='vpn-key'
                autoCapitalize='none'
                component={TextField}
                label='Password'
                secureTextEntry
              />
              <Gap height={4} />
              <Button
                type="primary"
                borderRadius={15}
                onPress={props.handleSubmit(onSubmit)}
              >
                Sign in
            </Button>
              <Link
                desc='Forgot Password?'
                link='Recover Here'
                // onPress={() => props.navigation.goBack()}
              />
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </>
  )
}

export default reduxForm({
  form: 'formLogin',
  validate: LoginValidation,
  enableReinitialize: true,
})(LoginPage);
