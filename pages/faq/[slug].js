import React from 'react';
import FAQQuestionScreen from '../../src/components/screen/FAQQuestion';
import websitePageHOC from '../../src/components/wrappers/WebsitePage/hoc';

function FAQInternalScreen({ category, question }) {
  return (
    <FAQQuestionScreen
      category={category}
      question={question}
    />
  );
}

FAQInternalScreen.propTypes = FAQQuestionScreen.propTypes;

export default websitePageHOC(FAQInternalScreen);

export async function getStaticProps({ params }) {
  const dev = process.env.NODE_ENV !== 'production';
  const server = dev ? 'http://localhost:3000' : 'https://instalura-victordantasdev.vercel.app';

  const faqCategories = await fetch(`${server}/api/content/faq`)
    .then(async (respostaDoServer) => {
      const resposta = await respostaDoServer.json();
      return resposta.data;
    });

  const dadosDaPagina = faqCategories.reduce((valorAcumulado, faqCategory) => {
    const foundQuestion = faqCategory.questions.find((question) => {
      if (question.slug === params.slug) {
        return true;
      }

      return false;
    });

    if (foundQuestion) {
      return {
        ...valorAcumulado,
        category: faqCategory,
        question: foundQuestion,
      };
    }

    return valorAcumulado;
  }, {});

  return {
    props: {
      category: dadosDaPagina.category,
      question: dadosDaPagina.question,
      pageWrapperProps: {
        seoProps: {
          headTitle: dadosDaPagina.question.title,
        },
      },
    },
  };
}

export async function getStaticPaths() {
  const dev = process.env.NODE_ENV !== 'production';
  const server = dev ? 'http://localhost:3000' : 'https://instalura-victordantasdev.vercel.app';

  const faqCategories = await fetch(`${server}/api/content/faq`)
    .then(async (respostaDoServer) => {
      const resposta = await respostaDoServer.json();
      return resposta.data;
    });

  const paths = faqCategories.reduce((valorAcumulado, faqCategory) => {
    const questionsPaths = faqCategory.questions.map((question) => {
      const questionSlug = question.slug;
      return { params: { slug: questionSlug } };
    });

    return [
      ...valorAcumulado,
      ...questionsPaths,
    ];
  }, []);

  return {
    paths,
    fallback: false,
  };
}
