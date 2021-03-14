import React, { useRef } from 'react'
import {
  Text,
  View,
  ScrollView,
  SafeAreaView
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { responsiveFontSize } from 'react-native-responsive-dimensions';
import { Gap, Accordion, Button } from '../../components';
import { colors, customFont } from '../../utils';
import Styles from './style';

const KasPage = () => {
  const scrollViewRef = useRef();
  return (
    <SafeAreaView style={Styles.container}>
      <View
        style={[Styles.content, { paddingVertical: 10 }]}>
        <View style={Styles.textGroup}>
          <Text style={[Styles.textGroup, { paddingVertical: 0, paddingHorizontal: 0 }]}>
            kas himatif univ. pelita bangsa
          </Text>
        </View>
      </View>
      <ScrollView
        ref={scrollViewRef}
        showsVerticalScrollIndicator={false}
        keyboardDismissMode="none"
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{ flexGrow: 1 }}
      >
        <Gap height={2} />
        <View style={Styles.card}>
          <View style={Styles.cardBody}>
            <View style={Styles.groupCardItem}>
              <Text style={Styles.textMoney}>Rp 50.000</Text>
              <Gap height={0.8} />
              <Text style={Styles.textDesc}>Saldo Kas</Text>
            </View>
            <View style={Styles.verticleLine}></View>
            <View style={Styles.groupCardItem}>
              <Text style={[Styles.textMoney, { color: colors.colorVariables.redLighten1 }]}>Rp 30.000</Text>
              <Gap height={0.8} />
              <Text style={Styles.textDesc}>Pengeluaran</Text>
            </View>
          </View>
          <Gap height={2} />
          <View style={Styles.wrapperIncomePerMounth}>
            <Gap height={2} />
            <View style={Styles.cardBody}>
              <Text style={Styles.textDetailCard}>Pemasukan Bulan ini</Text>
              <Text style={Styles.textDetailCard}>Rp 12.000</Text>
            </View>
          </View>
        </View>
        <Gap height={4} />
        <View>
          <View style={Styles.countTransactionWrapper}>
            <MaterialCommunityIcons
              name='swap-horizontal'
              size={responsiveFontSize(2.8)}
              style={Styles.countTransactionIcon}
            />
            <Text style={Styles.countTransactionNumber}>2</Text>
            <Text style={[Styles.countTransactionNumber, { fontFamily: customFont.primary[400] }]}> Transaksi</Text>
          </View>
          <Accordion
            noPadding
            expanded={true}
            background={colors.colorVariables.whiteSmoke2}
            labelIcon='event-note'
            label='07 Januari 2021'>
            <View style={{ backgroundColor: 'white' }}>
              <View style={[Styles.detailWrapperPerDay(false, false), { paddingVertical: 9 }]}>
                <View>
                  <Text style={Styles.noteTransaction}>Catatan</Text>
                </View>
                <View>
                  <Text style={Styles.noteTransaction}>Pengeluaran</Text>
                </View>
              </View>
              <View style={Styles.detailWrapperPerDay(true, false)}>
                <View>
                  <Text style={Styles.itemValue}>Beli Buku</Text>
                </View>
                <View>
                  <Text style={[Styles.itemValue, { color: colors.colorVariables.danger }]}>Rp 20.000</Text>
                </View>
              </View>
              <View style={Styles.detailWrapperPerDay(true, false)}>
                <View>
                  <Text style={Styles.itemValue}>Beli Bolpen</Text>
                </View>
                <View>
                  <Text style={[Styles.itemValue, { color: colors.colorVariables.danger }]}>Rp 5.000</Text>
                </View>
              </View>
            </View>
          </Accordion>
          <Accordion
            noPadding
            background={colors.colorVariables.whiteSmoke2}
            labelIcon='event-note'
            label='06 Januari 2021'>
            <View style={{ backgroundColor: 'white' }}>
              <View style={Styles.detailWrapperPerDay(false, false)}>
                <View>
                  <Text style={Styles.noteTransaction}>Catatan</Text>
                </View>
                <View>
                  <Text style={Styles.noteTransaction}>Pengeluaran</Text>
                </View>
              </View>
              <View style={Styles.detailWrapperPerDay(true, false)}>
                <View>
                  <Text style={Styles.itemValue}>Beli Sajadah</Text>
                </View>
                <View>
                  <Text style={[Styles.itemValue, { color: colors.colorVariables.danger }]}>Rp 100.000</Text>
                </View>
              </View>
            </View>
          </Accordion>
        </View>
        <Gap height={25} />
      </ScrollView>
      <Button
        background={colors.colorVariables.purple1}
        type="primary"
        borderRadius={15}
        iconName='payments'
        // onPress={props.handleSubmit(onSubmit)}
        btnWrapperStyle={Styles.btnWrapperStyle}>
        {' '}Bayar Kas
        </Button>
    </SafeAreaView>
  )
}

export default KasPage;
