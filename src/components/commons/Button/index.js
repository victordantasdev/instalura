import styled, { css } from 'styled-components';
import get from 'lodash/get';
import { TextStyleVariantsMap } from '../../foundation/Text';
import breakpointsMedia from '../../../theme/utils/breakpointsMedia';
import propToStyle from '../../../theme/utils/propToStyle';

const ButtonGhost = css`
  color: ${({ theme, variant }) => get(theme, `colorTheme.${variant}.color`)};
  background: transparent;
`;

const ButtonDefault = css`
  background-color: ${({ theme, variant }) => get(theme, `colorTheme.${variant}.color`)};
  color: ${({ theme, variant }) => get(theme, `colorTheme.${variant}.contrastText`)};
`;

const Button = styled.button`
  border: 0;
  cursor: pointer;
  padding: 12px 26px;
  font-weight: bold;
  opacity: 1;
  border-radius: 8px;
  transition: opacity ${({ theme }) => theme.transition};
  border-radius: ${({ theme }) => theme.borderRadius};
  ${({ ghost }) => (ghost ? ButtonGhost : ButtonDefault)};
  ${TextStyleVariantsMap.smallestException}
  ${propToStyle('margin')}
  ${propToStyle('display')}
  ${breakpointsMedia({
    xs: css`
      ${TextStyleVariantsMap.smallestException}
    `,
    md: css`
      ${TextStyleVariantsMap.paragraph1}
    `,
  })}

  ${({ fullWidth }) => fullWidth && css`
    width: 100%;
  `};
  
  &:disabled {
    cursor: not-allowed;
    opacity: 0.2;
  }
  
  &:hover {
    opacity: 0.5;
  }
`;

export default Button;
