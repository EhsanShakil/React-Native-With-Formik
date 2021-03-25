import React from 'react';
import {View, Text, Button, TextInput} from 'react-native';
import {Formik} from 'formik';
import * as Yup from 'yup';
import styles from '../theme/theme';

const FormikForm = () => {
  return (
    <Formik
      initialValues={{firstName: '', lastName: '', email: '', password: ''}}
      onSubmit={values => alert(JSON.stringify(values))}
      validationSchema={Yup.object().shape({
        firstName: Yup.string().required('first name is required'),
        lastName: Yup.string().required('last name is required'),
        email: Yup.string()
          .email()
          .required('email is required and must be in email format'),
        password: Yup.string().required('password is required'),
      })}>
      {({
        values,
        handleChange,
        errors,
        setFieldTouched,
        touched,
        isValid,
        handleSubmit,
      }) => (
        <View>
          <TextInput
            value={values.firstName}
            onChangeText={handleChange('firstName')}
            onBlur={() => setFieldTouched('firstName')}
            placeholder="First Name"
            style={styles.textinput}
          />
          {touched.firstName && errors.firstName && (
            <Text style={{fontSize: 10, color: 'red'}}>{errors.firstName}</Text>
          )}
          <TextInput
            value={values.lastName}
            onChangeText={handleChange('lastName')}
            onBlur={() => setFieldTouched('lastName')}
            placeholder="Last Name"
            style={styles.textinput}
          />
          {touched.lastName && errors.lastName && (
            <Text style={{fontSize: 10, color: 'red'}}>{errors.lastName}</Text>
          )}
          <TextInput
            value={values.email}
            onChangeText={handleChange('email')}
            onBlur={() => setFieldTouched('email')}
            placeholder="E-mail"
            style={styles.textinput}
          />
          {touched.email && errors.email && (
            <Text style={{fontSize: 10, color: 'red'}}>{errors.email}</Text>
          )}
          <TextInput
            value={values.password}
            onChangeText={handleChange('password')}
            placeholder="Password"
            onBlur={() => setFieldTouched('password')}
            secureTextEntry={true}
            style={styles.textinput}
          />
          {touched.password && errors.password && (
            <Text style={{fontSize: 10, color: 'red'}}>{errors.password}</Text>
          )}
          <Button title="Sign In" disabled={!isValid} onPress={handleSubmit} />
        </View>
      )}
    </Formik>
  );
};

export default FormikForm;
