import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import Box from 'components/Box';
import { Headline } from 'components/Title';
import ContactList from 'components/ContactList';
import Filter from 'components/Filter';
// import Form from 'components/Form';
import FormFormik from 'components/Formik';

const App = () => {
  return (
    <Box
      p={5}
      backgroundImage="linear-gradient(45deg, rgb(0, 219, 222), rgb(252, 0, 255))"
    >
      <Box
        bg="backgroundPrimary"
        boxShadow="small"
        borderRadius={8}
        p={5}
        maxWidth="435px"
        mx="auto"
      >
        <Headline HeadlineLogo>Phonebook</Headline>
        <FormFormik></FormFormik>
        <Headline>Contacts</Headline>
        <ContactList>
          <Filter />
        </ContactList>
      </Box>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </Box>
  );
};

export default App;

// {id: 'id-1', name: 'Howard Roark', number: '459-12-56'},
// {id: 'id-2', name: 'Dominique Francon', number: '443-89-12'},
// {id: 'id-3', name: 'John Galt', number: '645-17-79'},
// {id: 'id-4', name: 'Dagny Taggart', number: '888-88-88'},
