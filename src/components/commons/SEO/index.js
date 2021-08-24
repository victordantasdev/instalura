import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';

export default function SEO({
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
