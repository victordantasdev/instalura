import React, { useContext } from 'react';
import Image from 'next/image';
import Text from '../src/components/foundation/Text';
import Button from '../src/components/commons/Button';
import Grid from '../src/components/foundation/layout/Grid';
import { WebsitePageContext } from '../src/components/wrappers/WebsitePage';
import websitePageHOC from '../src/components/wrappers/WebsitePage/hoc';

function HomeScreen() {
  const websitePageContext = useContext(WebsitePageContext);
  return (
    <Grid.Container marginTop={{ xs: '32px', md: '75px' }}>
      <Grid.Row>
        <Grid.Col
          offset={{ xs: 0, md: 1 }}
          value={{ xs: 12, md: 5 }}
          display="flex"
          alignItems="flex-start"
          justifyContent="center"
          flexDirection="column"
        >
          <Text
            variant="title"
            tag="h1"
            color="tertiary.main"
            textAlign={{
              xs: 'center',
              md: 'left',
            }}
          >
            Compartilhe momentos e conecte-se com amigos
          </Text>
          <Text
            variant="paragraph1"
            tag="p"
            color="tertiary.light"
            textAlign={{
              xs: 'center',
              md: 'left',
            }}
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard dummy text
            ever since the 1500s.
          </Text>

          <Button
            margin={{
              xs: 'auto',
              md: 'initial',
            }}
            variant="primary"
            display="block"
            onClick={() => websitePageContext.toggleModalCadastro()}
          >
            Cadastrar
          </Button>
        </Grid.Col>

        <Grid.Col value={{ xs: 12, md: 6 }}>
          <Image
            alt="Imagem de celular com páginas internas do projeto com o perfil do Cage"
            // style={{ display: 'block', margin: 'auto' }}
            src="/images/phones-light.png"
            width={386}
            height={575}
          />
        </Grid.Col>
      </Grid.Row>
    </Grid.Container>
  );
}

export default websitePageHOC(HomeScreen, {
  pageWrapperProps: {
    seoProps: {
      headTitle: 'Home',
    },
  },
});
