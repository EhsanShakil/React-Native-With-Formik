import React from 'react';
import {View, Text, SafeAreaView, ScrollView} from 'react-native';
import FormikForm from './src/screen/Form';
import styles from './src/theme/theme';

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>React Native With Formik & Yup</Text>
      <FormikForm />
    </View>
  );
};

export default App;
