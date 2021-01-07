import React, { useEffect } from 'react';
import { Text, View, ImageBackground, Image, StatusBar } from 'react-native';
import * as Animatable from 'react-native-animatable';
import changeNavigationBarColor, { showNavigationBar } from 'react-native-navigation-bar-color';
import LinearGradient from 'react-native-linear-gradient';
import { ICLogoApp, ILBgWelcome } from '../../assets';
import { Button } from '../../components';
import { colors } from '../../utils';
import Styles from './style';

const WelcomeScreen = ({ navigation }) => {
  useEffect(() => {
    return () => {
      showNavigationBar();
      changeNavigationBarColor(colors.colorVariables.whiteSmoke3, true);
    }
  }, []);

  return (
    <ImageBackground
      source={ILBgWelcome}
      style={Styles.container}
      imageStyle={Styles.backgroundImageStyle}>
      <StatusBar backgroundColor="transparent" translucent barStyle="dark-content" />
      <LinearGradient
        colors={[colors.colorVariables.whiteSmoke2, 'transparent', colors.colorVariables.whiteSmoke2]}
        style={Styles.linearGradient}
        start={{ x: 0.0, y: 0.3 }}
        end={{ x: 0.5, y: 1.0 }}
        locations={[0.8, 0.5, 0.8]}
      />
      <View style={Styles.contentWrapper}>
        <View>
          <Animatable.View
            animation="fadeInDownBig"
            easing='ease'
            duration={1500}
          >
            <Image source={ICLogoApp} style={Styles.imageLogo} />
            <Text style={Styles.text}>Absen Tepat Waktu Disiplin Untuk Masa Depan Yang Lebih Baik</Text>
          </Animatable.View>
        </View>
        <View>
          <Animatable.View
            animation="fadeInUpBig"
            easing='ease'
            duration={1500}
          >
            <Button
              type="primary"
              textBold
              borderRadius={10}
              onPress={() => navigation.replace('LoginPage')}
            >
              Sign in
            </Button>
          </Animatable.View>
        </View>
      </View>
    </ImageBackground>
  );
}

export default WelcomeScreen;
