import React, { Component } from 'react';
import { Button, ContactForm, Input } from './Form.Styled';

class Form extends Component {
  //   static propTypes = {
  //     name: PropTypes.string,
  //     number: PropTypes.string,
  //   };

  //   state = {
  //     name: '',
  //     number: '',
  // }

  // handleChange = e => {
  //   const { name, value } = e.currentTarget;
  //   this.setState({ [name]: value });
  // };

  handleSubmit = e => {
    e.preventDefault();
    // const { name, number } = this.state;
    // this.props.onSubmit(name, number);
    // this.setState({ name: '', number: '' });

    const { name, number } = e.target.elements;
    this.props.onSubmit(name.value, number.value);
    this.resetForm(name, number);
  };

  resetForm = (name, number) => {
    name.value = '';
    number.value = '';
  };

  render() {
    // const { name, number } = this.state;
    return (
      <ContactForm autoComplete="off" onSubmit={this.handleSubmit}>
        <Input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          placeholder="Name"
          // value={name}
          // onChange={this.handleChange}
        />
        <Input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          placeholder="Number"
          // value={number}
          // onChange={this.handleChange}
        />
        <Button type="submit">add contact</Button>
      </ContactForm>
    );
  }
}

export default Form;
