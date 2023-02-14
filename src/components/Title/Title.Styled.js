import styled, { css } from 'styled-components';

const Headline = styled.h1`
  padding-bottom: ${p => p.theme.space[4]}px;
  max-width: 200px;
  font-family: ${p => p.theme.fonts.heading};
  font-size: ${p => p.theme.fontSizes.l};
  font-weight: ${p => p.theme.fontWeights.bold};
  color: ${p => p.theme.colors.halloween[0]};
  transition: all 300ms;
  :hover {
    letter-spacing: ${p => p.theme.space[2]}px;
    filter: drop-shadow(4px 8px 3px ${p => p.theme.colors.halloween[1]});
  }

  ${p =>
    p.HeadlineLogo &&
    css`
      max-width: 100%;
      font-size: ${p => p.theme.fontSizes.xl};
      -webkit-text-stroke: 6px ${p => p.theme.colors.halloween[0]};
      -webkit-text-fill-color: transparent;
    `}
`;

export { Headline };
