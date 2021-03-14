import React, { useRef, useState } from 'react'
import { StyleSheet, Text, View, SafeAreaView, ScrollView, Modal, TouchableOpacity, Keyboard, KeyboardAvoidingView, Platform } from 'react-native';
import DatePicker from 'react-native-date-picker';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import { Field, reduxForm, change, formValueSelector } from 'redux-form';
import { useDispatch, useSelector, connect } from 'react-redux';
import { Header, Gap, TextField, DatePickerField } from '../../components';
import { colors, customFont } from '../../utils';

const ChangeProfilePage = props => {
  const a = useRef();
  const b = useRef();
  const scrollViewRef = useRef();
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);

  const onFocusDateBirth = () => {
    Keyboard.dismiss();
    setShowModal(true);
  }

  return (
    <SafeAreaView style={Styles.container}>
      <Header
        title="Change Profile"
        background={colors.colorVariables.purple1}
        onPress={() => props.navigation.goBack()}
      />
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : null}
        style={{ flex: 1 }}>

        <View style={Styles.content}>
          <ScrollView
            ref={scrollViewRef}
            showsVerticalScrollIndicator={false}
            keyboardDismissMode="none"
            keyboardShouldPersistTaps="handled"
            contentContainerStyle={{ flexGrow: 1 }}
          >
            <Gap height={3} />
            <Field
              externalRef={a}
              name='fullName'
              floatingLabel
              iconName='person'
              autoCapitalize='none'
              component={TextField}
              returnKeyType='next'
              blurOnSubmit={false}
              label='Full Name'
              onSubmitEditing={() => b.current.focus()}
            />
            <Gap height={3} />
            <Field
              externalRef={b}
              name='email'
              floatingLabel
              iconName='email'
              autoCapitalize='none'
              component={TextField}
              returnKeyType='next'
              label='Email'
            />
            <Gap height={3} />
            <Field
              externalRef={b}
              name='placeOfBirth'
              floatingLabel
              iconName='location-on'
              autoCapitalize='none'
              component={TextField}
              returnKeyType='next'
              label='Tempat Lahir'
            />
            <Gap height={3} />
            <Field
              externalRef={b}
              name='dateOfBirth'
              floatingLabel
              iconName='event'
              autoCapitalize='none'
              component={TextField}
              returnKeyType='next'
              label='Date Of Birth'
              onFocusTextField={onFocusDateBirth}
              showSoftInputOnFocus
            />
            <Gap height={3} />
            <Field
              externalRef={b}
              name='phoneNumber'
              floatingLabel
              iconName='phone-android'
              autoCapitalize='none'
              component={TextField}
              label='Phone Number'
            />
            <Gap height={14} />
          </ScrollView>
        </View>
      </KeyboardAvoidingView>
      <Modal
        animationType="slide"
        transparent={true}
        visible={showModal}>
        <View style={Styles.modalContainer} >
          <View style={Styles.modalContent}>
            <Text style={Styles.modalTitle}>Enter Your Birth Date</Text>
            <Gap height={1} />
            <DatePickerField form='formChangeProfile' name="dateOfBirth" />
            <Gap height={2} />
            <View>
              <Gap width={1} />
              <TouchableOpacity
                style={[Styles.modalButton, { backgroundColor: colors.colorVariables.blue1 }]}
                onPress={() => setShowModal(false)}>
                <Text style={Styles.modalTextButton}>OK</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  )
}

export default reduxForm({
  form: 'formChangeProfile',
})(ChangeProfilePage);

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.colorVariables.white,
  },
  content: {
    marginHorizontal: responsiveWidth(4),
  },
  //ModalStyle
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.colorVariables.black4
  },
  modalContent: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 12,
    paddingVertical: responsiveHeight(2.5),
    paddingHorizontal: responsiveWidth(8),
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.26,
    shadowRadius: 10,
    elevation: 6,
    width: '85%'
  },
  modalTitle: {
    fontFamily: customFont.secondary[700],
    color: '#626262',
    fontSize: responsiveFontSize(2.3),
    textAlign: "center"
  },
  modalButton: {
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: responsiveWidth(4),
    elevation: 2,
    backgroundColor: colors.colorVariables.redLighten1
  },
  modalTextButton: {
    textAlign: "center",
    fontFamily: customFont.secondary[400],
    color: colors.colorVariables.white,
    fontSize: responsiveFontSize(2)
  },
});
