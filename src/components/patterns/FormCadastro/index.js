import React, { useState } from 'react';
import { Lottie } from '@crello/react-lottie';
import loadingAnimation from './animations/loading.json';
import successAnimation from './animations/success.json';
import errorAnimation from './animations/error.json';
import Button from '../../commons/Button';
import TextField from '../../forms/TextField';
import Box from '../../foundation/layout/Box';
import Grid from '../../foundation/layout/Grid';
import Text from '../../foundation/Text';

const formStates = {
  DEFAULT: 'DEFAULT',
  LOADING: 'LOADING',
  DONE: 'DONE',
  ERROR: 'ERROR',
};

// eslint-disable-next-line react/prop-types
function FormContent({ setModalState }) {
  const [isFormSubmited, setIsFormSubmited] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState(formStates.DEFAULT);

  const [userInfo, setUserInfo] = useState({
    usuario: '',
    nome: '',
  });

  const handleChange = (e) => {
    const fieldName = e.target.getAttribute('name');
    setUserInfo({
      ...userInfo,
      [fieldName]: e.target.value,
    });
  };

  const isFormValid = userInfo.usuario.length === 0 || userInfo.nome.length === 0;

  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      setIsFormSubmited(true);
      setSubmissionStatus(formStates.LOADING);

      const userDTO = {
        username: userInfo.usuario,
        name: userInfo.nome,
      };

      fetch('https://instalura-api.vercel.app/api/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userDTO),
      })
        .then((res) => {
          if (res.ok) {
            return res.json();
          }

          throw new Error('Não foi possível castrar o usuário agora :(');
        })
        .then(() => setSubmissionStatus(formStates.DONE))
        .catch(() => setSubmissionStatus(formStates.ERROR));
    }}
    >

      <Button
        type="button"
        margin={{
          xs: 'auto',
          md: 'initial',
        }}
        variant="primary"
        display="block"
        onClick={() => { setModalState(false); }}
        style={{
          position: 'absolute', top: '30px', right: '30px',
        }}
      >
        X
      </Button>
      <Text
        variant="title"
        tag="h1"
        color="tertiary.mainColor"
      >
        Pronto para saber da vida dos outros?
      </Text>

      <Text
        variant="paragraph1"
        tag="p"
        color="tertiary.color"
        marginBottom="32px"
      >
        Você está a um passo de saber tudo que está rolando no bairro, complete seu cadastro agora!
      </Text>

      <div>
        <TextField
          placeholder="Nome"
          name="nome"
          value={userInfo.nome}
          onChange={handleChange}
        />
      </div>

      <div>
        <TextField
          placeholder="Usuário"
          name="usuario"
          value={userInfo.usuario}
          onChange={handleChange}
        />
      </div>

      <Button
        type="submit"
        disabled={isFormValid}
        variant="primary"
        fullWidth
      >
        Cadastrar
      </Button>

      {isFormSubmited && submissionStatus === formStates.LOADING && (
        <Box
          display="flex"
          justifyContent="center"
        >
          <Lottie
            className="lottie-container basic"
            config={{
              animationData: loadingAnimation,
              loop: true,
              autoplay: true,
            }}
          />
        </Box>
      )}

      {isFormSubmited && submissionStatus === formStates.DONE && (
        <Box
          display="flex"
          justifyContent="center"
        >
          <Lottie
            className="lottie-container basic"
            config={{
              animationData: successAnimation,
              loop: true,
              autoplay: true,
            }}
          />
        </Box>
      )}

      {isFormSubmited && submissionStatus === formStates.ERROR && (
        <Box
          display="flex"
          justifyContent="center"
        >
          <Lottie
            className="lottie-container basic"
            config={{
              animationData: errorAnimation,
              loop: true,
              autoplay: true,
            }}
          />
        </Box>
      )}
    </form>
  );
}

// eslint-disable-next-line react/prop-types
export default function FormCadastro({ propsDoModal, setModalState }) {
  return (
    <Grid.Row
      marginLeft={0}
      marginRight={0}
      flex={1}
      justifyContent="flex-end"
    >
      <Grid.Col
        display="flex"
        paddingRight={{ md: '0' }}
        flex={1}
        value={{ xs: 12, md: 5, lg: 4 }}
      >
        <Box
          boxShadow="-10px 0px 24px rgba(7, 12, 14, 0.1)"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          flex={1}
          padding={{
            xs: '16px',
            md: '85px',
          }}
          variant="borders"
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...propsDoModal}
        >
          <FormContent setModalState={setModalState} />
        </Box>
      </Grid.Col>
    </Grid.Row>
  );
}
