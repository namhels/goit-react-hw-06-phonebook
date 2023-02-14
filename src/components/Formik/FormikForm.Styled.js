import styled from 'styled-components';
import { Form, Field, ErrorMessage } from 'formik';

const ContactForm = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-bottom: ${p => p.theme.space[4]}px;
  padding-top: ${p => p.theme.space[5]}px;
  padding-bottom: ${p => p.theme.space[5]}px;
  background-color: ${p => p.theme.colors.halloween[7]};
  border: ${p => p.theme.borders.normal}${p => p.theme.colors.halloween[1]};
  border-radius: ${p => p.theme.radii.middle};
  box-shadow: ${p => p.theme.shadows.small};
  transition: all 300ms;
  :hover {
    border-color: ${p => p.theme.colors.blues[0]};
    box-shadow: ${p => p.theme.shadows.mediumBlue};
  }
`;

const InputWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  width: 80%;
  :not(:first-child) {
    margin-top: ${p => p.theme.space[4]}px;
  }

  > svg {
    position: absolute;
    top: 50%;
    left: ${p => p.theme.space[4]}px;
    transform: translateY(-50%);
    color: ${p => p.theme.colors.blues[0]};
  }
`;

const Input = styled(Field)`
  width: 100%;
  padding-left: ${p => p.theme.space[5]}px;
  padding-top: ${p => p.theme.space[3]}px;
  padding-bottom: ${p => p.theme.space[3]}px;
  font-family: ${p => p.theme.fonts.heading};
  font-size: ${p => p.theme.fontSizes.m};
  color: ${p => p.theme.colors.blues[0]};
  outline: none;
  border: ${p => p.theme.borders.normal}${p => p.theme.colors.halloween[1]};
  border-radius: ${p => p.theme.radii.middle};
  box-shadow: ${p => p.theme.shadows.small};
  transition: all 300ms;
  :hover {
    border-color: ${p => p.theme.colors.blues[0]};
    box-shadow: ${p => p.theme.shadows.mediumBlue};
  }
  &::placeholder {
    transition: opacity 800ms;
  }
  :focus::placeholder {
    opacity: 0;
  }
`;

const ErrorText = styled.p`
  width: 80%;
  text-align: center;
  padding-top: ${p => p.theme.space[2]}px;
  padding-bottom: ${p => p.theme.space[3]}px;
  color: ${p => p.theme.colors.white};
  background-color: ${p => p.theme.colors.halloween[3]};
  border: ${p => p.theme.borders.normal}${p => p.theme.colors.halloween[1]};
  border-radius: ${p => p.theme.radii.middle};
  transition: all 300ms;
  :hover {
    border-color: ${p => p.theme.colors.halloween[3]};
    box-shadow: ${p => p.theme.shadows.mediumOrange};
  }
`;

const FormError = ({ name }) => {
  return (
    <ErrorMessage
      name={name}
      render={message => <ErrorText>{message}</ErrorText>}
    />
  );
};

const Button = styled.button`
  width: 35%;
  margin-top: ${p => p.theme.space[4]}px;
  margin-left: auto;
  margin-right: auto;
  padding: ${p => p.theme.space[3]}px;
  color: ${p => p.theme.colors.halloween[3]};
  font-family: ${p => p.theme.fonts.heading};
  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.bold};
  border: ${p => p.theme.borders.normal}${p => p.theme.colors.halloween[3]};
  border-radius: ${p => p.theme.radii.medium};
  box-shadow: ${p => p.theme.shadows.small};
  cursor: pointer;
  transition: all 300ms;
  :hover {
    color: ${p => p.theme.colors.halloween[1]};
    background-color: ${p => p.theme.colors.halloween[3]};
    border-color: ${p => p.theme.colors.halloween[1]};
    letter-spacing: ${p => p.theme.space[1]}px;
  }
`;

export { ContactForm, Input, Button, FormError, InputWrapper };
