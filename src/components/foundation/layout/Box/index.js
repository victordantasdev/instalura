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
  ${propToStyle('boxShadow')};
  ${propToStyle('padding')};
  ${propToStyle('width')}
  ${propToStyle('listStyle')}
  ${propToStyle('margin')}
  ${propToStyle('marginLeft')}
  ${propToStyle('marginTop')}
  ${propToStyle('marginBottom')}
  ${propToStyle('marginRight')}
  ${({ theme, borderRadiusTheme }) => borderRadiusTheme && `border-radius: ${theme.borderRadius}`};

  color: ${({ theme, variant }) => get(theme, `${variant}.contrastText`)};
  background-color: ${({ theme, variant }) => get(theme, `${variant}.color`)};
`;

export default Box;
