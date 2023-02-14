import styled from 'styled-components';

const ContactForm = styled.form`
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

const Input = styled.input`
  width: 80%;
  margin-bottom: ${p => p.theme.space[4]}px;
  padding-left: ${p => p.theme.space[4]}px;
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

const Button = styled.button`
  width: 35%;
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

export { ContactForm, Input, Button };
