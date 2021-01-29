import { StyleSheet, Dimensions } from 'react-native';
import { responsiveHeight } from 'react-native-responsive-dimensions';
import { customFont } from '../../../utils';

const { height, width } = Dimensions.get('window');

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute'
  },
  overlay: {
    width: width,
    height: height,
    position: 'absolute',
    backgroundColor: 'rgba(52,52,52,0.5)'
  },
  contentContainer: {
    width: '65%',
    borderRadius: 12,
    backgroundColor: 'white',
    padding: 10
  },
  content: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
  },
  action: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
    marginTop: 5
  },
  title: {
    fontFamily: customFont.secondary[700],
    paddingVertical: 5,
    paddingHorizontal: 15,
    color: '#626262',
    fontSize: 18
  },
  message: {
    fontFamily: customFont.secondary[400],
    paddingTop: 5,
    color: '#7b7b7b',
    fontSize: 14,
    textAlign: 'center'
  },
  button: {
    paddingHorizontal: 10,
    paddingVertical: 7,
    margin: 5,
    borderRadius: 5
  },
  buttonText: {
    fontFamily: customFont.secondary[400],
    color: '#fff',
    fontSize: 13
  },
  imageProfile: (type) => ({
    width: responsiveHeight(type === 'success' ? 9 : 8),
    height: responsiveHeight(type === 'success' ? 9 : 8),
    resizeMode: 'contain',
  }),
});

export default Styles;
