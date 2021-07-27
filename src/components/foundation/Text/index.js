import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

export const TextStyleVariantsMap = {
  smallestException: css`
    font-size: ${({ theme }) =>
      theme.typographyVariants.smallestException.fontSize};
    font-weight: ${({ theme }) =>
      theme.typographyVariants.smallestException.fontWeight};
    line-height: ${({ theme }) =>
      theme.typographyVariants.smallestException.fontHeight};
  `,

  paragraph1: css`
    font-size: ${({ theme }) => theme.typographyVariants.paragraph1.fontSize};
    font-weight: ${({ theme }) =>
      theme.typographyVariants.paragraph1.fontWeight};
    line-height: ${({ theme }) =>
      theme.typographyVariants.paragraph1.fontHeight};
  `,
};

const TextBase = styled.span`
  ${({ variant }) => TextStyleVariantsMap[variant]}
`;

export default function Text({ tag, variant, children }) {
  return (
    <TextBase variant={variant} as={tag}>
      {children}
    </TextBase>
  );
}

Text.propTypes = {
  tag: PropTypes.string.isRequired,
  variant: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

Text.defaultProps = { tag: 'span', variant: 'paragraph1' };
