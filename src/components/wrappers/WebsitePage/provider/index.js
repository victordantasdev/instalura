import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../../../../theme/GlobalStyle';
import theme, { colors } from '../../../../theme';

export default function WebsiteGlobalProvider({ children }) {
  const [colorTheme, setColorTheme] = useState(colors.modes.dark);

  const toggleTheme = () => {
    setColorTheme(colorTheme.title === 'light' ? colors.modes.dark : colors.modes.light);
  };

  return (
    <ThemeProvider theme={{ theme, colorTheme }}>
      <GlobalStyle />
      {toggleTheme}
      {children}
    </ThemeProvider>
  );
}

WebsiteGlobalProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
