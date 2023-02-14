import styled from 'styled-components';

const List = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 435px;
  padding-top: ${p => p.theme.space[5]}px;
  padding-bottom: ${p => p.theme.space[5]}px;
  background-color: ${p => p.theme.colors.halloween[4]};
  border: ${p => p.theme.borders.normal}${p => p.theme.colors.halloween[1]};
  border-radius: ${p => p.theme.radii.middle};
  box-shadow: ${p => p.theme.shadows.small};
  transition: all 300ms;
  :hover {
    border-color: ${p => p.theme.colors.blues[0]};
    box-shadow: ${p => p.theme.shadows.mediumBlue};
  }
`;

export { List };
