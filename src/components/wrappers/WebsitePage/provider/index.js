import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';

export default function WebsiteGlobalProvider({ children, theme }) {
  // const theme = useContext(ThemeContext);

  return (
    <>
      <ThemeProvider theme={theme}>
        {children}
      </ThemeProvider>
    </>
  );
}

WebsiteGlobalProvider.propTypes = {
  children: PropTypes.node.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  theme: PropTypes.object.isRequired,
};
