import { get } from 'lodash';
import styled from 'styled-components';
import propToStyle from '../../../../theme/utils/propToStyle';

const Box = styled.div`
  ${propToStyle('flex')};
  ${propToStyle('display')};
  ${propToStyle('flexDirection')};
  ${propToStyle('justifyContent')};
  ${propToStyle('flexWrap')};
  ${propToStyle('backgroundImage')};
  ${propToStyle('backgroundRepeat')};
  ${propToStyle('backgroundPosition')};
  ${propToStyle('boxShadow')}
  ${propToStyle('padding')}

  color: ${({ theme, variant }) => get(theme, `colorTheme.${variant}.contrastText`)};
  background-color: ${({ theme, variant }) => get(theme, `colorTheme.${variant}.color`)};
`;

export default Box;
