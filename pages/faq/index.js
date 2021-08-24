import React from 'react';
import PropTypes from 'prop-types';
import FAQScreen from '../../src/components/screen/FAQScreen';

export default function Faq({ toggleTheme, faqCategories }) {
  return <FAQScreen faqCategories={faqCategories} toggleTheme={toggleTheme} />;
}

export async function getStaticProps() {
  const faqCategories = await fetch('https://instalura-api.vercel.app/api/content/faq')
    .then((res) => res.json())
    .then(({ data }) => data);

  return {
    props: {
      faqCategories,
    },
  };
}

Faq.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  faqCategories: PropTypes.array.isRequired,
  toggleTheme: PropTypes.func.isRequired,
};
