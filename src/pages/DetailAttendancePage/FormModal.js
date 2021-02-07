import React from 'react';
import {
  View, 
  Text,
  Modal,
  TouchableOpacity,
} from 'react-native';
import { Field, reduxForm, change, untouch } from 'redux-form';
import { useDispatch } from 'react-redux';
import { colors } from '../../utils';
import Styles from './style';
import { AttendanceValidation } from '../../config/validation';
import { Gap, TextField } from '../../components';

const FormModal = props => {
  const dispatch = useDispatch();

  return (
    <View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={props.modalShow}
        style={{ backgroundColor: colors.colorVariables.black2 }}
      >
        <View style={Styles.modalContainer} >
          <View style={Styles.modalContent}>
            <Text style={Styles.modalTitle}>Enter Your Password</Text>
            <Gap height={3.5} />
            <Field
              name='password'
              floatingLabel
              iconName='vpn-key'
              autoCapitalize='none'
              component={TextField}
              label='Password'
              secureTextEntry
            />
            <Gap height={3.5} />
            <View style={{ flexDirection: 'row' }}>
              <TouchableOpacity
                style={Styles.modalButton}
                onPress={() => {
                  dispatch(change('formAttendance', 'password', ''));
                  dispatch(untouch('formAttendance', 'password'));
                  props.onCancelPress();
                }}
              >
                <Text style={Styles.modalTextButton}>Cancel</Text>
              </TouchableOpacity>
              <Gap width={4} />
              <TouchableOpacity
                style={[Styles.modalButton, { backgroundColor: colors.colorVariables.blue1 }]}
                onPress={props.handleSubmit(props.onConfirmPressed)}
              >
                <Text style={Styles.modalTextButton}>OK</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  )
}

export default reduxForm({
  form: 'formAttendance',
  validate: AttendanceValidation,
  enableReinitialize: true,
  destroyOnUnmount: false,
  initialValues: {
    password: ''
  }
})(FormModal);
