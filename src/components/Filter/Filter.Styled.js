import styled from 'styled-components';
import { MdFindInPage } from 'react-icons/md';

const Input = styled.input`
  width: 94%;
  margin-bottom: ${p => p.theme.space[4]}px;
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

const FindIcon = styled(MdFindInPage)`
  position: absolute;
  top: 50%;
  left: ${p => p.theme.space[4]}px;
  transform: translateY(-100%);
  color: ${p => p.theme.colors.blues[0]};
`;

export { Input, FindIcon };
