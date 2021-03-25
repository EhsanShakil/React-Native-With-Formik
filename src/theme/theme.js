import {StyleSheet, Dimensions} from 'react-native';

const WidthDimension = Dimensions.get('window').width;
const HeightDimension = Dimensions.get('window').height;

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textinput: {
    height: HeightDimension * 0.08,
    width: WidthDimension * 0.8,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 5,
    marginVertical: 10,
    padding: 10,
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
