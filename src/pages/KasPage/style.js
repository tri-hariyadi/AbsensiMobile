import { StyleSheet } from 'react-native';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import { colors, customFont } from '../../utils';

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.colorVariables.white,
  },
  content: {
    paddingHorizontal: responsiveWidth(4),
    paddingVertical: responsiveHeight(1.5),
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
  card: {
    elevation: 6,
    padding: responsiveHeight(2),
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    backgroundColor: 'white',
    borderRadius: 7,
    marginHorizontal: responsiveWidth(4)
  },
  cardBody: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  groupCardItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  verticleLine: {
    width: 0.8,
    height: '100%',
    backgroundColor: colors.colorVariables.black4,
  },
  textMoney: {
    fontFamily: customFont.primary[700],
    fontSize: responsiveFontSize(2.3),
    color: colors.colorVariables.greenLightDark1,
  },
  textDesc: {
    fontFamily: customFont.secondary[600],
    fontSize: responsiveFontSize(1.7),
    color: colors.colorVariables.grey1,
  },
  textDetailCard: {
    fontFamily: customFont.secondary[600],
    fontSize: responsiveFontSize(1.8),
    color: colors.colorVariables.greenLightDark1,
  },
  countTransactionWrapper: {
    flexDirection: 'row',
    paddingHorizontal: responsiveWidth(4),
    paddingVertical: responsiveHeight(1.5),
    borderTopWidth: 0.8,
    borderColor: colors.colorVariables.black4,
    alignItems: 'center'
  },
  countTransactionIcon: {
    marginRight: 8
  },
  countTransactionNumber: {
    fontFamily: customFont.primary[600],
    fontSize: responsiveFontSize(1.8),
    color: colors.colorVariables.indigo1,
  },
  wrapperIncomePerMounth: {
    borderTopWidth: 0.8,
    borderColor: colors.colorVariables.black4
  },
  noteTransaction: {
    fontFamily: customFont.primary[600],
    fontSize: responsiveFontSize(1.6),
    color: colors.colorVariables.grey1,
  },
  itemValue: {
    fontFamily: customFont.primary[600],
    fontSize: responsiveFontSize(1.7),
    color: colors.colorVariables.indigo1,
  },
  btnWrapperStyle: {
    right: responsiveWidth(4),
    bottom: responsiveWidth(4),
    width: '35%',
    textAlign: 'center',
    position: 'absolute',
    elevation: 7,
    shadowColor: '#000',
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
  },
  detailWrapperPerDay: (borderTop, borderBottom) => ({
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderTopWidth: borderTop ? 1 : 0,
    borderBottomWidth: borderBottom ? 3 : 0,
    borderColor: colors.colorVariables.black4,
    paddingVertical: 14
  })
});

export default Styles;
