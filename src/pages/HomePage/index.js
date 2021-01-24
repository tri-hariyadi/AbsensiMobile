import React, { useEffect, useRef } from 'react'
import {
  Text,
  View,
  Image,
  Easing,
  Animated,
  StatusBar,
  ScrollView,
  Dimensions,
  SafeAreaView,
  Platform,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { responsiveFontSize } from 'react-native-responsive-dimensions';
import { ILNullPhoto } from '../../assets';
import { Button, Gap, Accordion } from '../../components';
import { colors } from '../../utils';
import Styles from './style';

const WIDTH = Dimensions.get('window').width;

const HomePage = props => {
  const scrollViewRef = useRef();
  const animatedOverlayMenu = useRef(new Animated.Value(0)).current;

  const onBtnOverlayMenuPressed = () => {
    animatedOverlayMenu.setValue(0)
    Animated.timing(animatedOverlayMenu, {
      toValue: 1,
      duration: 700,
      easing: Easing.quad,
      useNativeDriver: false
    }).start();
  }

  const overlayMenuStyle = {
    height: animatedOverlayMenu.interpolate({
      inputRange: [0, 1],
      outputRange: [0, WIDTH]
    }),
    width: animatedOverlayMenu.interpolate({
      inputRange: [0, 1],
      outputRange: [0, WIDTH]
    }),
    opacity: animatedOverlayMenu.interpolate({
      inputRange: [0, 0.6, 1],
      outputRange: [0, 0.3, 1]
    })
  }

  const showOverlayView = () => {
    Animated.timing(animatedOverlayMenu, {
      toValue: 0,
      duration: 300,
      easing: Easing.quad,
      useNativeDriver: false
    }).start();
  }

  useEffect(() => {
    return () => {
    }
  }, []);

  return (
    <>
      <StatusBar backgroundColor={colors.colorVariables.purple2} barStyle={Platform.OS === 'ios' ? "dark-content" : "light-content"} />
      <SafeAreaView style={Styles.container}>
        <View
          style={[Styles.content, { paddingVertical: 10 }]}
          onTouchStart={showOverlayView}>
          <View style={Styles.textGroup}>
            <Text style={[Styles.textGroup, { paddingVertical: 0, paddingHorizontal: 0 }]}>
              himatif univ. pelita bangsa
          </Text>
          </View>
        </View>
        <ScrollView
          ref={scrollViewRef}
          showsVerticalScrollIndicator={false}
          keyboardDismissMode="none"
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={{ flexGrow: 1 }}
          onTouchStart={showOverlayView}
        >
          <Gap height={1} />
          <View style={Styles.card}>
            <View style={Styles.cardBodyProfile}>
              <View>
                <Text style={Styles.nameProfile}>tri hariyadi</Text>
                <Gap height={0.8} />
                <Text style={Styles.departmentProfile}>litbang</Text>
              </View>
              <View>
                <Image source={ILNullPhoto} style={Styles.imageProfile} />
              </View>
            </View>
            <Gap height={3} />
            <View style={Styles.cardBodyProfile}>
              <View style={Styles.cardBodyTap}>
                <Text style={Styles.textTap}>tap in</Text>
                <Gap height={1.5} />
                <View>
                  <View style={Styles.timeAttendance}>
                    <View style={Styles.timeAttendanceItem}>
                      <Icon
                        name='radio-button-checked'
                        size={responsiveFontSize(2.5)}
                        color={colors.colorVariables.white}
                      />
                      <Gap width={1} />
                      <Text style={Styles.textDay}>--:--</Text>
                    </View>
                    <Text style={Styles.textDay}>Today</Text>
                  </View>
                </View>
              </View>
              <View style={Styles.cardBodyTap}>
                <Text style={Styles.textTap}>tap out</Text>
                <Gap height={1.5} />
                <View>
                  <View style={Styles.timeAttendance}>
                    <View style={Styles.timeAttendanceItem}>
                      <Icon
                        name='radio-button-unchecked'
                        size={responsiveFontSize(2.5)}
                        color={colors.colorVariables.white}
                      />
                      <Gap width={1} />
                      <Text style={Styles.textDay}>--:--</Text>
                    </View>
                    <Text style={Styles.textDay}>Today</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <Gap height={2} />
          <View style={Styles.content}>
            <Text style={Styles.textAttendance}>Attendance</Text>
            <Gap height={2} />
            <Accordion
              labelIcon='event-note'
              label='Januari 2021' expanded={true}>
              <View style={Styles.listAttendance}>
                <Gap height={1.5} />
                <View style={Styles.cardBodyProfile}>
                  <View style={Styles.timeAttendanceItem}>
                    <Image source={ILNullPhoto} style={Styles.imageProfile2} />
                    <Gap width={3} />
                    <Text style={Styles.listAttendanceDate}>Jumat, Januari 15</Text>
                  </View>
                  <View>
                    <Text style={[Styles.textAttendance, { fontSize: responsiveFontSize(1.8) }]}>08:34 AM</Text>
                    <Gap height={0.6} />
                    <Text style={Styles.listAttendanceWork}>working</Text>
                  </View>
                </View>
                <Gap height={1.5} />
              </View>
              <View style={Styles.listAttendance}>
                <Gap height={1.5} />
                <View style={Styles.cardBodyProfile}>
                  <View style={Styles.timeAttendanceItem}>
                    <Image source={ILNullPhoto} style={Styles.imageProfile2} />
                    <Gap width={3} />
                    <View>
                      <Text style={Styles.listAttendanceDate}>Kamis, Januari 14</Text>
                      <Gap height={0.6} />
                      <Text style={[Styles.textDay, { color: colors.colorVariables.redLight1 }]}>
                        On work for 11H 12m
                    </Text>
                    </View>
                  </View>
                  <View>
                    <Text style={[Styles.textAttendance, { fontSize: responsiveFontSize(1.8) }]}>08:34 AM</Text>
                    <Gap height={0.6} />
                    <Text style={Styles.textAttendance2}>04:00 PM</Text>
                  </View>
                </View>
                <Gap height={1.5} />
              </View>
            </Accordion>
            <Gap height={1.5} />
            <Accordion
              labelIcon='event-note'
              label='Januari 2021'>
              <View style={Styles.listAttendance}>
                <Gap height={1.5} />
                <View style={Styles.cardBodyProfile}>
                  <View style={Styles.timeAttendanceItem}>
                    <Image source={ILNullPhoto} style={Styles.imageProfile2} />
                    <Gap width={3} />
                    <Text style={Styles.listAttendanceDate}>Jumat, Januari 15</Text>
                  </View>
                  <View>
                    <Text style={[Styles.textAttendance, { fontSize: responsiveFontSize(1.8) }]}>08:34 AM</Text>
                    <Gap height={0.6} />
                    <Text style={Styles.listAttendanceWork}>working</Text>
                  </View>
                </View>
                <Gap height={1.5} />
              </View>
              <View style={Styles.listAttendance}>
                <Gap height={1.5} />
                <View style={Styles.cardBodyProfile}>
                  <View style={Styles.timeAttendanceItem}>
                    <Image source={ILNullPhoto} style={Styles.imageProfile2} />
                    <Gap width={3} />
                    <View>
                      <Text style={Styles.listAttendanceDate}>Kamis, Januari 14</Text>
                      <Gap height={0.6} />
                      <Text style={[Styles.textDay, { color: colors.colorVariables.redLight1 }]}>
                        On work for 11H 12m
                    </Text>
                    </View>
                  </View>
                  <View>
                    <Text style={[Styles.textAttendance, { fontSize: responsiveFontSize(1.8) }]}>08:34 AM</Text>
                    <Gap height={0.6} />
                    <Text style={Styles.textAttendance2}>04:00 PM</Text>
                  </View>
                </View>
                <Gap height={1.5} />
              </View>
            </Accordion>
            <Gap height={4} />
          </View>
        </ScrollView>
        <Button
          BtnIcon
          iconName="add"
          type='danger'
          containerBtnIconStyle={Styles.btnIconStyle}
          onPress={onBtnOverlayMenuPressed}
        />
        <Animated.View style={[Styles.overlayMenuWrapper, overlayMenuStyle]}>
          <View style={Styles.viewAddAttendance}>
            <Text style={Styles.textViewOverlay}>Add</Text>
            <Gap width={2} />
            <Button
              BtnIcon
              iconName="fingerprint"
              type='warning'
              containerBtnIconStyle={{
                position: "relative",
              }}
              onPress={() => props.navigation.navigate('AddAttendancePage')}
            />
          </View>
          <View style={Styles.viewOut}>
            <Text style={Styles.textViewOverlay}>Out</Text>
            <Gap width={2} />
            <Button
              BtnIcon
              iconName="power-settings-new"
              type='danger'
              containerBtnIconStyle={{
                position: "relative",
              }}
            />
          </View>
        </Animated.View>
      </SafeAreaView>
    </>
  )
}

export default HomePage;
