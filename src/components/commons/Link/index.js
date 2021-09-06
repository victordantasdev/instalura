import React from 'react';
import NextLink from 'next/link';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { get } from 'lodash';

const StyledLink = styled.a`
  color: ${({ theme, color }) => get(theme, `${color}`)};
  text-decoration: none;
  opacity: 1;
  transition: opacity ${({ theme }) => theme.transition};
  &:hover,
  &:focus {
    opacity: .5;
  }
  cursor: pointer;
`;

const Link = ({ children, href, ...props }) => (
  <NextLink href={href} passHref>
    <StyledLink {...props}>
      {children}
    </StyledLink>
  </NextLink>
);

export default Link;

Link.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
