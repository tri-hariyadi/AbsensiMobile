import { StyleSheet, Dimensions } from 'react-native';
import { colors, customFont } from '../../utils';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth
} from 'react-native-responsive-dimensions';
const DEVICE_WIDTH = Dimensions.get('window').width;

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.colorVariables.white,
    justifyContent: 'space-between',
  },
  content: {
    marginHorizontal: responsiveWidth(4),
  },
  textSection: {
    fontFamily: customFont.secondary[600],
    fontSize: responsiveFontSize(2),
    color: colors.colorVariables.blueLighten1,
    textTransform: 'uppercase',
  },
  detailLocation: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginRight: responsiveWidth(4),
  },
  textAddress: {
    fontFamily: customFont.secondary[400],
    fontSize: responsiveFontSize(2),
    color: colors.colorVariables.indigo1,
    marginLeft: responsiveWidth(2)
  },
  wrapperMap: {
    // ...StyleSheet.absoluteFillObject,
    height: responsiveHeight(28),
    width: DEVICE_WIDTH * 92.3 / 100,
    marginHorizontal: responsiveWidth(4),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 13,
    backgroundColor: 'yellow',
    overflow: 'hidden',
    borderWidth: 2,
    borderColor: colors.colorVariables.whiteSmoke2
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  btnCaptureContainer: {
    flex: 0,
    justifyContent: 'center',
    alignItems: 'center',
    height: responsiveHeight(10),
    backgroundColor: colors.colorVariables.indigo1,
  },
  btnCaptureWrapper: {
    position: 'relative',
    top: responsiveHeight(9.2),
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 2,
    alignSelf: 'center',
  },
  btnTakeWrapper: {
    padding: responsiveHeight(1.2),
    backgroundColor: 'white',
    borderRadius: 100,
  },
  containerBtnIconStyle: {
    position: "relative",
    alignSelf: 'center',
    elevation: 7,
    zIndex: 2
  },
  textCapture: {
    fontFamily: customFont.secondary[600],
    fontSize: responsiveFontSize(1.8),
    color: colors.colorVariables.white,
  },
  bottomMenuWrapper: {
    flex: 1,
    width: '42%',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'flex-start',
  },
  btnRetake: {
    justifyContent: 'center',
    alignItems: 'center',
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
    paddingVertical: responsiveHeight(4),
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
  textErrorFingerScann: (error) => ({
    fontFamily: customFont.secondary[400],
    color: error ? colors.colorVariables.danger : colors.colorVariables.indigo1,
    fontSize: responsiveFontSize(1.6),
    textAlign: "center"
  })
});

export default Styles;
