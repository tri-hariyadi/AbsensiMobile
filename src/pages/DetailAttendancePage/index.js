import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Platform, PermissionsAndroid, Dimensions, StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { showMessage } from 'react-native-flash-message';
import Geocoder from 'react-native-geocoder-reborn';
import Geolocation from 'react-native-geolocation-service';
import { Gap, Header, Alert } from '../../components';
import { colors, customFont } from '../../utils';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
const DEVICE_WIDTH = Dimensions.get('window').width;

const DetailAttendancePage = props => {
  const [address, setAddress] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [position, setPosition] = useState({});

  const getLocation = async () => {
    if (Platform.OS === 'ios') {
      Geolocation.requestAuthorization();
      Geolocation.setRNConfiguration({
        skipPermissionRequests: false,
        authorizationLevel: 'whenInUse',
      });
    }

    if (Platform.OS === 'android') {
      setAddress('Loading...');
      await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      );
      Geolocation.getCurrentPosition(
        position => {
          setPosition({
            lat: position.coords.latitude,
            lng: position.coords.longitude
          });
          const POSITION = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          }
          Geocoder.geocodePosition(POSITION).then(res => {
            setAddress(res[0].formattedAddress);
          }).catch(err => {
            setAddress(err.message);
            showMessage({
              message: err.message,
              type: 'danger'
            })
          });
        },

        error => {
          setAddress(error.message);
          showMessage({
            message: error.message,
            type: 'danger'
          });
        },
        { enableHighAccuracy: true, timeout: 2000, maximumAge: 3600000 }
      );
    }
  }

  useEffect(() => {
    getLocation();
  }, []);

  return (
    <>
      <SafeAreaView style={Styles.container}
        onStartShouldSetResponder={() => setShowModal(!showModal)}>
        <StatusBar backgroundColor={colors.colorVariables.bluePrimary} barStyle={Platform.OS === 'ios' ? "dark-content" : "light-content"} />
        <Header
          title="Attendance Detail"
          background={colors.colorVariables.bluePrimary}
          onPress={() => props.navigation.goBack()}
        />
        <Gap height={3} />
        <View style={Styles.content}>
          <Text style={Styles.textSection}>Location</Text>
          <Gap height={1} />
          <View style={Styles.detailLocation}>
            <Icon
              name="location-on"
              size={responsiveFontSize(2.6)}
              color={colors.colorVariables.danger}
            />
            <Text style={Styles.textAddress}>{address}</Text>
          </View>
        </View>
        <Gap height={2} />
        <View style={Styles.wrapperMap}>
          {/* <MapView
            provider={PROVIDER_GOOGLE}
            style={Styles.map}
            region={{
              latitude: position.lat ? position.lat : 0,
              longitude: position.lng ? position.lng : 0,
              latitudeDelta: 0.015,
              longitudeDelta: 0.0121,
            }}
            borderRadius={10}
          /> */}
        </View>
      </SafeAreaView>
      <Alert
        show={showModal}
        type="success"
        title="Finger Print"
        message="Tempelkan jari anda di sensor fingerprint untuk verivikasi"
        showConfirmButton={true}
        showCancelButton={true}
        confirmText="OK"
        onConfirmPressed={() => setShowModal(!showModal)}
        onCancelPressed={() => setShowModal(false)}
      />
    </>
  )
}

export default DetailAttendancePage;

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.colorVariables.white,
  },
  content: {
    marginHorizontal: responsiveWidth(4),
  },
  textSection: {
    fontFamily: customFont.secondary[600],
    fontSize: responsiveFontSize(2),
    color: colors.colorVariables.blueLighten1,
    textTransform: 'uppercase',
  },
  detailLocation: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginRight: responsiveWidth(4),
  },
  textAddress: {
    fontFamily: customFont.secondary[400],
    fontSize: responsiveFontSize(2),
    color: colors.colorVariables.indigo1,
    marginLeft: responsiveWidth(2)
  },
  wrapperMap: {
    // ...StyleSheet.absoluteFillObject,
    height: responsiveHeight(25),
    width: DEVICE_WIDTH * 92.3 / 100,
    marginHorizontal: responsiveWidth(4),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 13,
    backgroundColor: 'yellow',
    overflow: 'hidden',
    borderWidth: 2,
    borderColor: colors.colorVariables.whiteSmoke2
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
