import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { colors } from '../../utils';

const DetailAttendancePage = () => {
  return (
    <SafeAreaView style={Styles.container}>
      <Text></Text>
    </SafeAreaView>
  )
}

export default DetailAttendancePage;

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.colorVariables.white,
  },
});
