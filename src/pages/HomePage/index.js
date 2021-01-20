import React, { useRef } from 'react'
import { StyleSheet, Text, View, Animated, Image, StatusBar, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import { ILNullPhoto } from '../../assets';
import { Button, Gap, Accordion } from '../../components';
import { colors, customFont } from '../../utils';

const HomePage = props => {
  const scrollViewRef = useRef();
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
    <>
      <StatusBar backgroundColor={colors.colorVariables.bluePrimary} barStyle="light-content" />
      <View style={Styles.container}>
        <Text style={Styles.textGroup}>himatif univ. pelita bangsa</Text>
        <Gap height={2} />
        <View style={Styles.card}>
          <View style={Styles.cardBodyProfile}>
            <View>
              <Text style={Styles.nameProfile}>tri hariyadi</Text>
              <Gap height={1.2} />
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
        <Gap height={3} />
        <ScrollView
          ref={scrollViewRef}
          showsVerticalScrollIndicator={false}
          keyboardDismissMode="none"
          keyboardShouldPersistTaps="handled"
        // contentContainerStyle={Styles.container}
        >
          <Text style={Styles.textAttendance}>Attendance</Text>
          <Gap height={3} />
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
        </ScrollView>
        <Button
          BtnIcon
          iconName="add"
          type='danger'
          containerBtnIconStyle={Styles.btnIconStyle}
        >
          Click Me
      </Button>
      </View>
    </>
  )
}

export default HomePage

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.colorVariables.white,
    paddingHorizontal: responsiveWidth(4),
    paddingVertical: responsiveHeight(2)
  },
  textGroup: {
    fontFamily: customFont.secondary[600],
    fontSize: responsiveFontSize(1.5),
    color: colors.colorVariables.purple2,
    textTransform: 'uppercase',
    backgroundColor: colors.colorVariables.whiteSmoke3,
    paddingVertical: 5,
    paddingHorizontal: 10,
    alignSelf: 'flex-start',
    borderRadius: 50
  },
  nameProfile: {
    fontFamily: customFont.secondary[700],
    fontSize: responsiveFontSize(2.5),
    textTransform: 'capitalize',
    color: colors.colorVariables.indigo1
  },
  departmentProfile: {
    fontFamily: customFont.primary[500],
    textTransform: 'capitalize',
    color: colors.colorVariables.black2
  },
  imageProfile: {
    width: responsiveHeight(10),
    height: responsiveHeight(10),
    resizeMode: 'contain',
  },
  imageProfile2: {
    width: responsiveHeight(7.8),
    height: responsiveHeight(7.8),
    resizeMode: 'contain',
  },
  card: {
    position: 'relative',
    elevation: 6,
    padding: responsiveHeight(2),
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    backgroundColor: 'white',
    borderRadius: 7
  },
  cardBodyProfile: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  cardBodyTap: {
    width: '48%',
    backgroundColor: colors.colorVariables.purple1,
    padding: responsiveHeight(1.2),
    borderRadius: 5
  },
  textTap: {
    fontFamily: customFont.primary[500],
    textTransform: 'uppercase',
    color: colors.colorVariables.white,
  },
  textDay: {
    fontFamily: customFont.primary[500],
    textTransform: 'capitalize',
    color: colors.colorVariables.white,
    fontSize: responsiveFontSize(1.4),
  },
  timeAttendance: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  timeAttendanceItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textAttendance: {
    fontFamily: customFont.secondary[700],
    textTransform: 'uppercase',
    color: colors.colorVariables.indigo1,
    fontSize: responsiveFontSize(2),
    textAlign: 'center'
  },
  textAttendance2: {
    fontFamily: customFont.secondary[400],
    textTransform: 'uppercase',
    color: colors.colorVariables.indigo1,
    fontSize: responsiveFontSize(1.5),
    textAlign: 'right',
  },
  listAttendance: {
    borderBottomWidth: 1,
    borderColor: colors.colorVariables.whiteSmoke2,
  },
  listAttendanceWork: {
    fontFamily: customFont.secondary[800],
    fontSize: responsiveFontSize(1.4),
    textTransform: 'uppercase',
    color: colors.colorVariables.purple2,
    textAlign: 'center'
  },
  listAttendanceDate: {
    fontFamily: customFont.secondary[700],
    fontSize: responsiveFontSize(1.8),
    textTransform: 'capitalize',
    color: colors.colorVariables.indigo1,
    textAlign: 'center'
  },
  btnIconStyle: {
    position: 'absolute',
    bottom: 10,
    right: 10
  }
})
