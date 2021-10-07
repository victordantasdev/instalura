import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { light, dark } from '../src/theme/colorTheme';
import GlobalStyle from '../src/theme/GlobalStyle';
import theme from '../src/theme';

// eslint-disable-next-line react/prop-types
export default function App({ Component, pageProps }) {
  const [colorTheme, setColorTheme] = useState(dark);

  const toggleTheme = () => {
    setColorTheme(
      colorTheme.title === 'light'
        ? dark
        : light,
    );
  };

  const allThemes = {
    ...colorTheme,
    ...theme,
  };

  return (
    <>
      <ThemeProvider theme={allThemes}>
        <GlobalStyle />
        <Component toggleTheme={toggleTheme} {...pageProps} />
      </ThemeProvider>
    </>
  );
}
