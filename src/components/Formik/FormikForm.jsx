import PropTypes from 'prop-types';
import React from 'react';
import { Formik } from 'formik';
import * as yup from 'yup';
import { BsFillPersonFill, BsFillTelephoneFill } from 'react-icons/bs';
import { Button, ContactForm, Input, FormError, InputWrapper } from './FormikForm.Styled';

const schema = yup.object().shape({
  name: yup.string().required(),
  number: yup.string().min(6).max(16).required(),
});

const initialValues = {
  name: '',
  number: '',
};

const FormFormik = ({onSubmit}) => {
  const handleSubmit = ({ name, number }, { resetForm }) => {
    onSubmit(name, number);
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      <ContactForm autoComplete="off">
        <InputWrapper>
          <Input
            type="text"
            name="name"
            placeholder="name"
            required
          />
          <BsFillPersonFill />
        </InputWrapper>
        <FormError name="name" />
        <InputWrapper>
          <Input
            type="tel"
            name="number"
            placeholder="number"
            required
          />
          <BsFillTelephoneFill />
        </InputWrapper>
        <FormError name="number" />
        <Button type="submit">add contact</Button>
      </ContactForm>
    </Formik>
    );
};

FormFormik.propTypes = {
  name: PropTypes.string,
  number: PropTypes.string,
};

export default FormFormik;