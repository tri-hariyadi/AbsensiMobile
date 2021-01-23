import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { RNCamera } from 'react-native-camera';
import { colors } from '../../utils';

const AddAttendancePage = () => {
  const camera = React.useRef();
  return (
    <SafeAreaView style={Styles.container}>
      <View>
        <Text>AddAttendancePage</Text>
      </View>
      <View>
        <RNCamera
          ref={camera}
          style={Styles.preview}
          type={RNCamera.Constants.Type.back}
          flashMode={RNCamera.Constants.FlashMode.on}
          androidCameraPermissionOptions={{
            title: 'Permission to use camera',
            message: 'We need your permission to use your camera',
            buttonPositive: 'Ok',
            buttonNegative: 'Cancel',
          }}
          // androidRecordAudioPermissionOptions={{
          //   title: 'Permission to use audio recording',
          //   message: 'We need your permission to use your audio',
          //   buttonPositive: 'Ok',
          //   buttonNegative: 'Cancel',
          // }}
          // onGoogleVisionBarcodesDetected={({ barcodes }) => {
          //   console.log(barcodes);
          // }}
        />
      </View>
    </SafeAreaView>
  )
}

export default AddAttendancePage;

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.colorVariables.white,
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
})
