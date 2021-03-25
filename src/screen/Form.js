import React from 'react';
import {View, Text, Button, TextInput} from 'react-native';
import {Formik, Field} from 'formik';
import * as Yup from 'yup';

const FormikForm = () => {
  const initialValues = {
    fullName: '',
    lastName: '',
    email: '',
    password: '',
  };
  const nameSchema = Yup.object().shape({
    fullName: Yup.string().required(),
    lastName: Yup.string().required(),
    email: Yup.number().required(),
    password: Yup.string().required(),
  });
  const onSubmit = values => {
    alert('Form Submitted Successfully!!!');
    console.log(values);
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={nameSchema}>
      {({values, handleChange, handleSubmit, isValid}) => (
        <>
          <TextInput
            value={values.fullName}
            onChangeText={handleChange('fullName')}
            placeholder="Full Name"
          />
          <TextInput
            value={values.lastName}
            onChangeText={handleChange('lastName')}
            placeholder="Last Name"
          />
          <TextInput
            value={values.email}
            onChangeText={handleChange('email')}
            placeholder="Email"
          />
          <TextInput
            value={values.password}
            onChangeText={handleChange('password')}
            placeholder="Password"
            secureTextEntry
          />
          <Button title="SIGN UP" disabled={!isValid} onPress={handleSubmit} />
        </>
      )}
    </Formik>
  );
};

export default FormikForm;
