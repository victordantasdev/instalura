import AboutScreen, { getContent } from '../src/components/screen/AboutScreen';
import websitePageHOC from '../src/components/wrappers/WebsitePage/hoc';

export async function getStaticProps() {
  const messages = await getContent();

  return {
    props: {
      messages,
    },
  };
}

export default websitePageHOC(AboutScreen);
