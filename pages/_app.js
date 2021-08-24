import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import Head from 'next/head';
import theme, { colors } from '../src/theme';
import GlobalStyle from '../src/theme/GlobalStyle';

function SEO({
  headTitle, description, image, urlBase,
}) {
  const hasTitle = Boolean(headTitle);
  const baseTitle = 'Instalura';
  const title = hasTitle ? (`${headTitle} | ${baseTitle}`) : baseTitle;

  return (
    <Head>
      <title>{title}</title>
      {/* <!-- Primary Meta Tags --> */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />

      {/* <!-- Open Graph / Facebook --> */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={urlBase} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      {/* <!-- Twitter --> */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={urlBase} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />
    </Head>
  );
}

// eslint-disable-next-line react/prop-types
export default function App({ Component, pageProps }) {
  const [colorTheme, setColorTheme] = useState(colors.modes.dark);

  const toggleTheme = () => {
    setColorTheme(colorTheme.title === 'light' ? colors.modes.dark : colors.modes.light);
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
      <SEO
        headTitle="Home"
        description=""
        image=""
        urlBase=""
      />
      <ThemeProvider theme={{ theme, colorTheme }}>
        <GlobalStyle />
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        <Component toggleTheme={toggleTheme} {...pageProps} />
      </ThemeProvider>
    </>
  );
}

SEO.propTypes = {
  headTitle: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  urlBase: PropTypes.string,
};

SEO.defaultProps = {
  headTitle: '',
  description: '',
  image: '',
  urlBase: '',
};
