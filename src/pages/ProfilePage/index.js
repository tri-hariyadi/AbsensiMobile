import React from 'react';
import { Text, View, FlatList, Image, SafeAreaView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { responsiveFontSize } from 'react-native-responsive-dimensions';
import { ILNullPhoto } from '../../assets';
import { Gap } from '../../components';
import { colors } from '../../utils';
import Styles from './style';

const gridMenu = [
  { id: 1, icon: 'support-agent', title: 'Contact US' },
  { id: 2, icon: 'person-outline', title: 'Change Profile' },
  { id: 3, icon: 'assignment', title: 'Report' },
  { id: 4, icon: 'exit-to-app', title: 'Logout' },
];

const ProfilePage = () => {
  return (
    <SafeAreaView style={Styles.container}>
      <FlatList
        data={gridMenu}
        numColumns={3}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        columnWrapperStyle={Styles.columnWrapperStyle}
        ListHeaderComponent={() =>
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
          </View>
        }
        ListFooterComponent={() => <Gap height={4} />}
        renderItem={({ item }) =>
          <TouchableOpacity style={[Styles.menuButton, { borderWidth: 0, padding: 0 }]}>
            <View style={Styles.menuButton}>
              <Icon
                name={item.icon}
                size={responsiveFontSize(6)}
                color={colors.colorVariables.black3}
              />
            </View>
            <Gap height={1} />
            <Text style={Styles.textGroup2}>{item.title}</Text>
          </TouchableOpacity>
        }
      />
    </SafeAreaView>
  )
}

export default ProfilePage;
