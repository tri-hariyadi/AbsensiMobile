import React, { useEffect, useState } from 'react';
import {
  Text,
  View,
  SafeAreaView,
  Platform,
  PermissionsAndroid,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import FingerprintScanner from 'react-native-fingerprint-scanner';
// import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import { responsiveFontSize } from 'react-native-responsive-dimensions';
import { showMessage } from 'react-native-flash-message';
import Geocoder from 'react-native-geocoder-reborn';
import Geolocation from 'react-native-geolocation-service';
import { Gap, Header, Alert, Button } from '../../components';
import { colors } from '../../utils';
import Styles from './style';
import FormModal from './FormModal';
import FingerScann from './FingerScann';

const DetailAttendancePage = props => {
  let timer;
  const ref = React.useRef(null);
  const [error, setError] = useState(false);
  const [address, setAddress] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [position, setPosition] = useState({});
  const [biometryType, setBiometryType] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [errorMessageLegacy, setErrorMessageLegacy] = useState(false);
  const [alertFingerScann, setAlertFingerScann] = useState(false);

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
            setError(false);
          }).catch(err => {
            setAddress(err.message);
            setError(true);
            showMessage({
              message: err.message,
              type: 'danger'
            })
            setTimeout(() => setError(false), 2100)
            timer = setTimeout(() => getLocation(), 3000)
          });
        },

        error => {
          setAddress(error.message);
          setError(true);
          showMessage({
            message: error.message,
            type: 'danger',
          });
          setTimeout(() => setError(false), 2100)
          timer = setTimeout(() => getLocation(), 3000)
        },
        { enableHighAccuracy: true, timeout: 2000, maximumAge: 3600000 }
      );
    }
  }

  React.useMemo(() => {
    if (error) {
      StatusBar.setBackgroundColor(colors.colorVariables.danger, true)
    }
    if (!error) {
      StatusBar.setBackgroundColor(colors.colorVariables.indigo1, true)
    }
  }, [error])

  const checkBiometryType = () => {
    FingerprintScanner
      .isSensorAvailable()
      .then(biometryType => setBiometryType(biometryType))
      .catch(() => setBiometryType(false));
  }

  const requiresLegacyAuthentication = () => {
    return Platform.Version < 23;
  }

  const authLegacy = () => {
    setAlertFingerScann(true);
    FingerprintScanner
      .authenticate({ onAttempt: handleAuthenticationAttemptedLegacy() })
      .then(() => {
        setAlertFingerScann(false);
        setShowModal(true)
      })
      .catch((error) => {
        setErrorMessageLegacy(error.message);
      });
  }

  const handleAuthenticationAttemptedLegacy = (error) => {
    setErrorMessageLegacy('error.message');
  };

  const authCurrent = () => {
    FingerprintScanner
      .authenticate({ title: 'Fingerprint Authentication' })
      .then(() => {
        setShowModal(true)
      });
  }

  const onTakePressed = () => {
    if (biometryType) {
      if (requiresLegacyAuthentication()) {
        authLegacy();
      } else {
        authCurrent();
      }
    } else {
      setModalVisible(true);
    }
  }

  const onSubmit = data => {
    setShowModal(true);
    setModalVisible(!modalVisible);
  }

  useEffect(() => {
    getLocation();
    checkBiometryType();

    return () => {
      FingerprintScanner.release();
      clearTimeout(timer);
    }
  }, []);

  return (
    <>
      <SafeAreaView style={Styles.container}>
        <StatusBar backgroundColor={colors.colorVariables.indigo1} barStyle={Platform.OS === 'ios' ? "dark-content" : "light-content"} />
        <View>
          <Header
            title="Attendance Detail"
            background={colors.colorVariables.indigo1}
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
          {/* <View style={Styles.wrapperMap}>
            <MapView
              provider={PROVIDER_GOOGLE}
              style={Styles.map}
              region={{
                latitude: position.lat ? position.lat : 0,
                longitude: position.lng ? position.lng : 0,
                latitudeDelta: 0.015,
                longitudeDelta: 0.0121,
              }}
              borderRadius={10}
            >
              <Marker
                coordinate={{
                  latitude: position.lat ? position.lat : 0,
                  longitude: position.lng ? position.lng : 0
                }} />
            </MapView>
          </View> */}
        </View>
        <View>
          <View style={Styles.btnCaptureWrapper}>
            <View style={Styles.btnTakeWrapper}>
              <Button
                BtnIcon
                large={2.2}
                iconName="fingerprint"
                type='danger'
                containerBtnIconStyle={Styles.containerBtnIconStyle}
                onPress={onTakePressed}
              />
            </View>
            <Gap height={1} />
            <Text style={Styles.textCapture}>Checked In</Text>
          </View>
          <View style={Styles.btnCaptureContainer}>
            <View style={Styles.bottomMenuWrapper}>
              <TouchableOpacity
                style={Styles.btnRetake}
                onPress={() => props.navigation.goBack()}>
                <Icon
                  name="autorenew"
                  size={responsiveFontSize(4.5)}
                  color={colors.colorVariables.white}
                />
                <Text style={Styles.textCapture}>Retake</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </SafeAreaView>
      <Alert
        show={showModal}
        type="success"
        title="You've Checked In"
        message="Thank you and have a nice day"
        showConfirmButton={true}
        confirmText="OK"
        onConfirmPressed={() => {
          props.navigation.replace('MainApp');
          setShowModal(false);
        }}
        onDismiss={() => setShowModal(false)}
      />
      <FormModal
        ref={ref}
        modalShow={modalVisible}
        onCancelPress={() => setModalVisible(false)}
        onConfirmPressed={onSubmit}
      />
      {requiresLegacyAuthentication() &&
        <FingerScann
          showAlert={alertFingerScann}
          errorMessageLegacy={errorMessageLegacy}
          onCancelPress={() => setAlertFingerScann(false)}
        />
      }
    </>
  )
}

export default DetailAttendancePage;
