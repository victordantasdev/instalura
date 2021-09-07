import React from 'react';
import user from '@testing-library/user-event';
import FormLogin from './index';
import {
  render, act, screen, waitFor,
} from '../../../infra/tests/testUtils';

describe('<FormLogin />', () => {
  const onSubmit = jest.fn((e) => e.preventDefault());

  describe('when form fields are valid', () => {
    test('complete the submission', async () => {
      await act(async () => render(
        <FormLogin
          onSubmit={onSubmit}
        />,
      ));

      expect(screen.getByRole('button')).toBeDisabled();

      const inputUsuario = screen.getByPlaceholderText('Usuário');
      user.type(inputUsuario, 'someuser');
      await waitFor(() => expect(inputUsuario).toHaveValue('someuser'));

      const inputSenha = screen.getByPlaceholderText('Senha');
      user.type(inputSenha, 'somepass');
      await waitFor(() => expect(inputSenha).toHaveValue('somepass'));

      expect(screen.getByRole('button')).not.toBeDisabled();

      user.click(screen.getByRole('button'));

      expect(onSubmit).toHaveBeenCalledTimes(1);
    });
  });

  describe('when form fields are invalid', () => {
    test('display the respective errors', async () => {
      render(<FormLogin onSubmit={onSubmit} />);

      const inputUsuario = screen.getByPlaceholderText('Usuário');
      inputUsuario.focus();
      inputUsuario.blur();

      await waitFor(() => screen.getByRole('alert'));

      expect(screen.getByRole('alert')).toHaveTextContent('Preencha ao menos 3 caracteres');
    });
  });
});
