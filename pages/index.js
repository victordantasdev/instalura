import React, { useContext, useState } from 'react';
import { ThemeContext } from 'styled-components';
import Menu from '../src/components/commons/Menu';
import Footer from '../src/components/commons/Footer';
import Text from '../src/components/foundation/Text';
import Button from '../src/components/commons/Button';
import Grid from '../src/components/foundation/layout/Grid';
import Box from '../src/components/foundation/layout/Box';
import Modal from '../src/components/commons/Modal';

// eslint-disable-next-line react/prop-types
export default function Home({ toggleTheme }) {
  const { colorTheme } = useContext(ThemeContext);
  const [isModalOpen, setModalState] = useState(false);

  return (
    <Box
      flex={1}
      display="flex"
      flexWrap="wrap"
      flexDirection="column"
      justifyContent="space-between"
      backgroundImage={
        colorTheme.title === 'light'
          ? 'url(/images/bubbles.svg)'
          : 'url(/images/bubbles_dark.svg)'
      }
      backgroundRepeat="no-repeat"
      backgroundPosition="bottom right"
    >
      {/*
        [SOLID]
        S = Single Responsability
        O = Open Closed
        L = Liskov Substitution
        I = Interface Segregation
        D = Dependency Inversion
      */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => { setModalState(false); }}
      >
        {(propsDoModal) => (
          <Box
            variant="borders"
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...propsDoModal}
          >
            <div>Nosso conteúdo pro modal</div>
          </Box>
        )}
      </Modal>

      <Menu toggleTheme={toggleTheme} />

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
              onClick={() => { setModalState(!isModalOpen); }}
            >
              Cadastrar
            </Button>
          </Grid.Col>

          <Grid.Col value={{ xs: 12, md: 6 }}>
            <img
              alt="Imagem de celular com páginas internas do projeto com o perfil do Cage"
              style={{ display: 'block', margin: 'auto' }}
              src="https://bootcamp-alura-01-git-modulo01.omariosouto.vercel.app/images/phones.png"
            />
          </Grid.Col>
        </Grid.Row>
      </Grid.Container>

      <Footer />
    </Box>
  );
}
