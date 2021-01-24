import React from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView, Dimensions, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import { ILNullPhoto } from '../../assets';
import { Gap } from '../../components';
import { colors, customFont } from '../../utils';
import { color } from 'd3-color';

const WIDTH = Dimensions.get('window').width;

const ProfilePage = () => {
  return (
    <SafeAreaView style={Styles.container}>
      <View style={Styles.content}>
        <View style={Styles.profileSection}>
          <Image source={ILNullPhoto} style={Styles.imageProfile} />
          <Gap height={2} />
          <Text style={Styles.textName}>tri hariyadi</Text>
          <Gap height={1} />
          <Text style={Styles.textGroup}>Himativ</Text>
          <Gap height={1} />
          <Text style={Styles.textGroup2}>Universitas Pelita Bangsa</Text>
          <Gap height={4} />
        </View>
        <Gap height={3} />
        <View style={Styles.menuProfile}>
          <TouchableOpacity style={[Styles.menuButton, { borderWidth: 0, padding: 0 }]}>
            <View style={Styles.menuButton}>
              <Icon
                name='support-agent'
                size={responsiveFontSize(6)}
                color={colors.colorVariables.black3}
              />
            </View>
            <Gap height={1} />
            <Text style={Styles.textGroup2}>Contact US</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[Styles.menuButton, { borderWidth: 0, padding: 0 }]}>
            <View style={Styles.menuButton}>
              <Icon
                name='person-outline'
                size={responsiveFontSize(6)}
                color={colors.colorVariables.black3}
              />
            </View>
            <Gap height={1} />
            <Text style={Styles.textGroup2}>Change Profile</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[Styles.menuButton, { borderWidth: 0, padding: 0 }]}>
            <View style={Styles.menuButton}>
              <Icon
                name='exit-to-app'
                size={responsiveFontSize(6)}
                color={colors.colorVariables.black3}
              />
            </View>
            <Gap height={1} />
            <Text style={Styles.textGroup2}>Logout</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default ProfilePage;

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.colorVariables.white,
  },
  content: {
    paddingVertical: responsiveHeight(4)
  },
  profileSection: {
    alignItems: 'center',
    borderBottomWidth: 4,
    borderColor: colors.colorVariables.purple2
  },
  imageProfile: {
    width: responsiveHeight(15),
    height: responsiveHeight(15),
    resizeMode: 'contain',
  },
  textName: {
    fontFamily: customFont.secondary[800],
    textTransform: 'capitalize',
    fontSize: responsiveFontSize(3),
    color: colors.colorVariables.purple2
  },
  textGroup: {
    fontFamily: customFont.secondary[700],
    textTransform: 'uppercase',
    fontSize: responsiveFontSize(2.3),
    color: colors.colorVariables.indigo1
  },
  textGroup2: {
    fontFamily: customFont.secondary[600],
    textTransform: 'capitalize',
    fontSize: responsiveFontSize(1.8),
    color: colors.colorVariables.indigo1
  },
  menuProfile: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    alignContent: 'center',
    paddingHorizontal: WIDTH / 17
  },
  menuButton: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: colors.colorVariables.greenLighten,
    borderRadius: (WIDTH / 3)/2,
    padding: responsiveHeight(1),
    margin: responsiveWidth(2),
  },
})
