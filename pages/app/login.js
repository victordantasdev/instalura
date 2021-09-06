import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import Link from '../../src/components/commons/Link';
import Box from '../../src/components/foundation/layout/Box';
import Grid from '../../src/components/foundation/layout/Grid';
import Text from '../../src/components/foundation/Text';
import LoginForm from '../../src/components/patterns/FormLogin';
import { WebsitePageContext } from '../../src/components/wrappers/WebsitePage';
import websitePageHOC from '../../src/components/wrappers/WebsitePage/hoc';
import { LogoDark, LogoLight } from '../../src/theme/Logos';

function LoginScreen() {
  const websitePageContext = useContext(WebsitePageContext);
  const theme = useContext(ThemeContext);

  return (
    <Grid.Container
      display="flex"
      flex="1"
      alignItems="center"
    >
      <Grid.Row
        flex="1"
        alignItems="center"
        justifyContent="center"
      >
        <Grid.Col
          display="flex"
          flexDirection="column"
          justifyContent="center"
          offset={{ lg: 2 }}
          value={{ xs: 12, md: 6, lg: 4 }}
          flex={1}
        >
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            marginTop="37px"
            marginBottom="37px"
          >
            <Link href="/">
              {theme.title === 'light' ? <LogoLight size="large" /> : <LogoDark size="large" />}
            </Link>
          </Box>
          <LoginForm />
          <Text
            variant="paragraph1"
            tag="p"
            color="tertiary.light"
            textAlign="center"
          >
            {'Não tem uma conta? '}
            <Link
              href="/"
              color="secondary.color"
              onClick={(event) => {
                event.preventDefault();
                websitePageContext.toggleModalCadastro();
              }}
            >
              Cadastre-se
            </Link>
          </Text>
        </Grid.Col>

        <Grid.Col value={{ xs: 12, md: 6 }}>
          <Box
            display="flex"
            justifyContent="center"
          >
            <img
              align="center"
              src="/images/phones-light.png"
              alt="Telefones mostrando as páginas internas do app"
            />
          </Box>
        </Grid.Col>
      </Grid.Row>
    </Grid.Container>
  );
}

export default websitePageHOC(LoginScreen, {
  pageWrapperProps: {
    seoProps: {
      headTitle: 'Login',
    },
    menuProps: {
      display: false,
    },
  },
});
