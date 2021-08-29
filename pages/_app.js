import React, { useState } from 'react';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';
import theme, { colors } from '../src/theme';
import GlobalStyle from '../src/theme/GlobalStyle';

// eslint-disable-next-line react/prop-types
export default function App({ Component, pageProps }) {
  const [colorTheme, setColorTheme] = useState(colors.modes.dark);

  const toggleTheme = () => {
    setColorTheme(
      colorTheme.title === 'light'
        ? colors.modes.dark
        : colors.modes.light,
    );
  };

  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link
          href="https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />

        <link rel="icon" href="/images/instalura_icon.ico" />
      </Head>

      <ThemeProvider theme={{ theme, colorTheme }}>
        <GlobalStyle />
        <Component toggleTheme={toggleTheme} {...pageProps} />
      </ThemeProvider>
    </>
  );
}
