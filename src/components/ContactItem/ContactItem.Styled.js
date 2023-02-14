import styled from 'styled-components';

const Item = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  :not(:last-child) {
    margin-bottom: ${p => p.theme.space[3]}px;
  }
  padding-top: ${p => p.theme.space[2]}px;
  padding-bottom: ${p => p.theme.space[2]}px;
  padding-left: ${p => p.theme.space[4]}px;
  padding-right: ${p => p.theme.space[4]}px;
  font-family: ${p => p.theme.fonts.heading};
  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.bold};
  color: ${p => p.theme.colors.halloween[5]};
  background-color: ${p => p.theme.colors.halloween[7]};
  border: ${p => p.theme.borders.normal}${p => p.theme.colors.halloween[1]};
  border-radius: ${p => p.theme.radii.medium};
  box-shadow: ${p => p.theme.shadows.small};
  transition: all 300ms;
  :hover {
    color: ${p => p.theme.colors.halloween[7]};
    background-color: ${p => p.theme.colors.halloween[5]};
    border-color: ${p => p.theme.colors.halloween[5]};
  }
`;

const Button = styled.button`
  width: 20%;
  padding: ${p => p.theme.space[2]}px;
  font-family: ${p => p.theme.fonts.heading};
  font-size: ${p => p.theme.fontSizes.s};
  font-weight: ${p => p.theme.fontWeights.bold};
  color: ${p => p.theme.colors.halloween[1]};
  border: ${p => p.theme.borders.normal}${p => p.theme.colors.halloween[1]};
  border-radius: ${p => p.theme.radii.medium};
  box-shadow: ${p => p.theme.shadows.small};
  cursor: pointer;
  transition: all 300ms;
  :hover {
    color: ${p => p.theme.colors.halloween[3]};
    background-color: ${p => p.theme.colors.halloween[1]};
    border-color: ${p => p.theme.colors.halloween[3]};
    letter-spacing: ${p => p.theme.space[1]}px;
  }
`;

export { Item, Button };
