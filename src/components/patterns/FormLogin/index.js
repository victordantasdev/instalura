import React from 'react';
import { useRouter } from 'next/router';
import TextField from '../../forms/TextField';
import Button from '../../commons/Button';
import { useForm } from '../../../infra/hooks/form/useForm';
import { loginService } from '../../../services/login/loginService';

export default function LoginForm() {
  const router = useRouter();
  const initialValues = {
    usuario: '',
    senha: '',
  };

  const form = useForm({
    initialValues,
    onSubmit: (values) => {
      loginService.login({
        username: values.usuario,
        password: values.senha,
      }).then(() => { router.push('/app/profile'); });
    },
  });

  return (
    <form id="formCadastro" onSubmit={form.handleSubmit}>
      <TextField
        placeholder="Usuário"
        name="usuario"
        type="text"
        value={form.values.usuario}
        onChange={form.handleChange}
        required
      />
      <TextField
        placeholder="Senha"
        name="senha"
        type="password"
        value={form.values.senha}
        onChange={form.handleChange}
        required
      />

      <Button
        type="submit"
        variant="primary"
        margin={{
          xs: '0 auto',
          md: 'initial',
        }}
        fullWidth
      >
        Entrar
      </Button>
    </form>
  );
}
