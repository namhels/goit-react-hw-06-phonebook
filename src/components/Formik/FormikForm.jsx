import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { Formik } from 'formik';
import * as yup from 'yup';
import { BsFillPersonFill, BsFillTelephoneFill } from 'react-icons/bs';
import { getContacts } from 'redux/selectors';
import { addContact } from 'redux/contactsSlice';
import {
  Button,
  ContactForm,
  Input,
  FormError,
  InputWrapper,
} from './FormikForm.Styled';

const schema = yup.object().shape({
  name: yup.string().required(),
  number: yup.string().min(6).max(16).required(),
});

const initialValues = {
  name: '',
  number: '',
};

const FormFormik = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const handleSubmit = ({ name, number }, { resetForm }) => {
    if (contacts.find(el => el.name === name)) {
      toast.error(`${name} is already in contacts`);
      return;
    }
    dispatch(addContact(name, number));
    toast.success(`${name} was added to contacts`);
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
          <Input type="text" name="name" placeholder="name" required />
          <BsFillPersonFill />
        </InputWrapper>
        <FormError name="name" />
        <InputWrapper>
          <Input type="tel" name="number" placeholder="number" required />
          <BsFillTelephoneFill />
        </InputWrapper>
        <FormError name="number" />
        <Button type="submit">add contact</Button>
      </ContactForm>
    </Formik>
  );
};

export default FormFormik;
