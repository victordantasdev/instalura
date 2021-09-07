import React from 'react';
import { render, screen } from '../../../infra/tests/testUtils';
import TextField from './index';

describe('<TextField />', () => {
  test('renders component', () => {
    render(
      <TextField
        placeholder="Nome"
        value="Victor"
        onChange={() => {}}
        name="nome"
      />,
    );

    const textField = screen.getByPlaceholderText(/nome/i);

    expect(textField).toMatchSnapshot();
  });
});
