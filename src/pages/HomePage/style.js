import { StyleSheet, Dimensions } from 'react-native';
import { 
  responsiveFontSize, 
  responsiveHeight, 
  responsiveWidth 
} from 'react-native-responsive-dimensions';
import { colors, customFont } from '../../utils';
const WIDTH = Dimensions.get('window').width;

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
  nameProfile: {
    fontFamily: customFont.secondary[700],
    fontSize: responsiveFontSize(2.5),
    textTransform: 'capitalize',
    color: colors.colorVariables.indigo1
  },
  departmentProfile: {
    fontFamily: customFont.primary[500],
    textTransform: 'capitalize',
    color: colors.colorVariables.black2
  },
  imageProfile: {
    width: responsiveHeight(10),
    height: responsiveHeight(10),
    resizeMode: 'contain',
  },
  imageProfile2: {
    width: responsiveHeight(7.8),
    height: responsiveHeight(7.8),
    resizeMode: 'contain',
  },
  card: {
    position: 'relative',
    elevation: 6,
    padding: responsiveHeight(2),
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    backgroundColor: 'white',
    borderRadius: 7
  },
  cardBodyProfile: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  cardBodyTap: {
    width: '48%',
    backgroundColor: colors.colorVariables.purple1,
    padding: responsiveHeight(1.2),
    borderRadius: 5
  },
  textTap: {
    fontFamily: customFont.primary[500],
    textTransform: 'uppercase',
    color: colors.colorVariables.white,
  },
  textDay: {
    fontFamily: customFont.primary[500],
    textTransform: 'capitalize',
    color: colors.colorVariables.white,
    fontSize: responsiveFontSize(1.4),
  },
  timeAttendance: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  timeAttendanceItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textAttendance: {
    fontFamily: customFont.secondary[700],
    textTransform: 'uppercase',
    color: colors.colorVariables.indigo1,
    fontSize: responsiveFontSize(2),
    textAlign: 'center'
  },
  textAttendance2: {
    fontFamily: customFont.secondary[400],
    textTransform: 'uppercase',
    color: colors.colorVariables.indigo1,
    fontSize: responsiveFontSize(1.5),
    textAlign: 'right',
  },
  listAttendance: {
    borderBottomWidth: 1 / 2,
    borderColor: colors.colorVariables.black2,
  },
  listAttendanceWork: {
    fontFamily: customFont.secondary[800],
    fontSize: responsiveFontSize(1.4),
    textTransform: 'uppercase',
    color: colors.colorVariables.purple2,
    textAlign: 'center'
  },
  listAttendanceDate: {
    fontFamily: customFont.secondary[700],
    fontSize: responsiveFontSize(1.8),
    textTransform: 'capitalize',
    color: colors.colorVariables.indigo1,
    textAlign: 'center'
  },
  btnIconStyle: {
    position: 'absolute',
    bottom: 10,
    right: 10
  },
  //Overlay Menu
  overlayMenuWrapper: {
    backgroundColor: colors.colorVariables.black2,
    position: 'absolute',
    bottom: -WIDTH / 2,
    right: -WIDTH / 2,
    borderRadius: WIDTH,
  },
  viewAddAttendance: {
    position: "absolute",
    top: WIDTH / 7.5,
    left: WIDTH / 4.1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  viewOut: {
    position: "absolute",
    left: WIDTH / 17,
    bottom: WIDTH / 1.87,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textViewOverlay: {
    fontFamily: customFont.secondary[700],
    color: colors.colorVariables.white,
    fontSize: responsiveFontSize(1.8),
    textTransform: 'uppercase',
  }
});

export default Styles;
