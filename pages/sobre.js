import React from 'react';
import PropTypes from 'prop-types';
import AboutScreen, { getContent } from '../src/components/screen/AboutScreen';
import websitePageHOC from '../src/components/wrappers/WebsitePage/hoc';

const Sobre = ({ messages }) => <AboutScreen messages={messages} />;

Sobre.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  messages: PropTypes.object,
};

Sobre.defaultProps = {
  messages: {},
};

export async function getStaticProps({ preview }) {
  const datoCMSToken = process.env.DATO_CMS_TOKEN;
  const messages = await getContent({ preview, datoCMSToken });

  return {
    props: {
      messages,
    },
  };
}

export default websitePageHOC(Sobre, {
  pageWrapperProps: {
    seoProps: {
      headTitle: 'Sobre',
    },
  },
});
