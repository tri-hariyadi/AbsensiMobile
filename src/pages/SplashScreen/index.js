import React, { useEffect } from 'react';
import { View, Text, Image, StatusBar } from 'react-native';
import { hideNavigationBar } from 'react-native-navigation-bar-color';
import * as Animatable from 'react-native-animatable';
import { ICLogoApp } from '../../assets';
import { AnimateLogo } from '../../utils';
import Styles from './style';

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    hideNavigationBar();
    setTimeout(() => {
      navigation.replace('WelcomeScreen');
    }, 3000);
  }, []);

  return (
    <>
      <StatusBar backgroundColor="transparent" translucent barStyle="dark-content" />
      <View style={Styles.container}>
        <Animatable.View
          animation={AnimateLogo}
          easing='ease'
          duration={1100}
        >
          <Image source={ICLogoApp} style={Styles.imageLogo} />
        </Animatable.View>
        <Animatable.View
          animation="fadeInUpBig"
          easing='ease'
          duration={1500}
        >
          <Text style={Styles.textLogo}>Absensi Mobile</Text>
        </Animatable.View>
      </View>
    </>
  )
}

export default SplashScreen;
