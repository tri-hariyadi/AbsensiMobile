import React, { useRef, useEffect, useState } from 'react';
import {
  View,
  Text,
  StatusBar,
  Image,
  ImageBackground,
  Keyboard,
  ScrollView,
  Animated
} from 'react-native';
import { Field, reduxForm } from 'redux-form';
import { ICLogoApp, ILBgLogin } from '../../assets';
import { Gap, TextField, Button, Link } from '../../components';
import { colors } from '../../utils';
import Styles from './style';

const LoginPage = () => {
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
        duration: 200,
        useNativeDriver: Platform.OS === 'android' ? false : true
      }).start();
    }
    return () => {
      keyboardShowListener.current.remove();
      keyboardHideListener.current.remove();
    }
  }, [isOpen]);

  return (
    <>
      <StatusBar backgroundColor={colors.colorVariables.bluePrimary} barStyle="light-content" />
      <ScrollView
        ref={scrollViewRef}
        showsVerticalScrollIndicator={false}
        keyboardDismissMode="none"
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={Styles.container}
      >
        <Animated.View style={{
          transform: [{
            scale: animated.interpolate({
              inputRange: [0, 1],
              outputRange: [1, 0],
            })
          }],
          opacity: animated.interpolate({
            inputRange: [0, 1],
            outputRange: [1, 0],
          }),
          height: animated.interpolate({
            inputRange: [0, 1],
            outputRange: ["40%", "0%"],
          }),
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
                transform: [{
                  translateY: animated.interpolate({
                    inputRange: [0, 1],
                    outputRange: [-200, 0],
                  })
                }],
                opacity: animated.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, 1],
                }),
                height: animated.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, 100],
                }),
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
            />
            <Gap height={4} />
            <Button
              type="primary"
              borderRadius={15}
              onPress={() => navigation.replace('LoginPage')}
            >
              Sign in
            </Button>
            <Link
              desc='Forgot Password?'
              link='Recover Here'
            />
          </View>
        </View>
      </ScrollView>
    </>
  )
}

export default reduxForm({
  form: 'formLogin',
  // validate: LoginValidation
})(LoginPage);
