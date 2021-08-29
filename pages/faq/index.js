import React from 'react';
import FAQScreen from '../../src/components/screen/FAQScreen';
import websitePageHOC from '../../src/components/wrappers/WebsitePage/hoc';

function FAQPage({ toggleTheme, faqCategories }) {
  return <FAQScreen faqCategories={faqCategories} toggleTheme={toggleTheme} />;
}

export default websitePageHOC(FAQPage, {
  pageWrapperProps: {
    seoProps: {
      headTitle: 'FAQ',
    },
  },
});

export async function getStaticProps() {
  const dev = process.env.NODE_ENV !== 'production';
  const server = dev ? 'http://localhost:3000' : 'https://instalura-victordantasdev.vercel.app';

  const faqCategories = await fetch(`${server}/api/content/faq`)
    .then((res) => res.json())
    .then(({ data }) => data);

  return {
    props: {
      faqCategories,
    },
  };
}

FAQPage.propTypes = FAQScreen.propTypes;
