import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import propToStyle from '../../../theme/utils/propToStyle';
import breakpointsMedia from '../../../theme/utils/breakpointsMedia';

export const TextStyleVariantsMap = {
  smallestException: css`
    font-size: ${({ theme: { theme } }) => theme.typographyVariants.smallestException.fontSize};
    font-weight: ${({ theme: { theme } }) => theme.typographyVariants.smallestException.fontWeight};
    line-height: ${({ theme: { theme } }) => theme.typographyVariants.smallestException.fontHeight};
  `,

  paragraph1: css`
    font-size: ${({ theme: { theme } }) => theme.typographyVariants.paragraph1.fontSize};
    font-weight: ${({ theme: { theme } }) => theme.typographyVariants.paragraph1.fontWeight};
    line-height: ${({ theme: { theme } }) => theme.typographyVariants.paragraph1.fontHeight};
  `,

  title: css`
    ${({ theme: { theme } }) => css`
      font-size: ${theme.typographyVariants.titleXS.fontSize};
      font-weight: ${theme.typographyVariants.titleXS.fontWeight};
      line-height: ${theme.typographyVariants.titleXS.lineHeight};
    `}

    ${breakpointsMedia({
    md: css`
      ${({ theme: { theme } }) => css`
        font-size: ${theme.typographyVariants.title.fontSize};
        font-weight: ${theme.typographyVariants.title.fontWeight};
        line-height: ${theme.typographyVariants.title.lineHeight};
      `}
    `,
  })}
  `,
};

const TextBase = styled.span`
  ${({ variant }) => TextStyleVariantsMap[variant]}
  ${propToStyle('textAlign')}
`;

export default function Text({
  tag, variant, children, ...props
}) {
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <TextBase variant={variant} as={tag} {...props}>
      {children}
    </TextBase>
  );
}

Text.propTypes = {
  tag: PropTypes.string,
  variant: PropTypes.string,
  children: PropTypes.node,
};

Text.defaultProps = {
  tag: 'span',
  variant: 'paragraph1',
  children: null,
};
