import {StyleSheet, Dimensions} from 'react-native';

const WidthDimension = Dimensions.get('window').width;
const HeightDimension = Dimensions.get('window').height;

export default styles = StyleSheet.create({
  textinput: {
    height: HeightDimension * 0.08,
    width: WidthDimension * 0.8,
    // backgroundColor: 'red',
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 5,
  },
});
