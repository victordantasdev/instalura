import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import PropTypes from 'prop-types';
import Switch from 'react-switch';
import Text from '../../foundation/Text';
import Button from '../Button';
import MenuWrapper from './styles/MenuWrapper';
import { LogoDark, LogoLight } from '../../../theme/Logos';
import { Moon, Sun } from '../../../../public/icons/SwichIcons';

const links = [
  {
    text: 'Home',
    url: '/',
  },

  {
    text: 'Perguntas frequentes',
    url: '/faq',
  },

  {
    text: 'Sobre',
    url: '/sobre',
  },
];

// eslint-disable-next-line react/prop-types
export default function Menu({ onCadastrarClick, toggleTheme }) {
  const theme = useContext(ThemeContext);

  return (
    <MenuWrapper>
      <MenuWrapper.LeftSide>
        {theme.title === 'light' ? <LogoLight /> : <LogoDark />}
      </MenuWrapper.LeftSide>
      <MenuWrapper.CentralSide>
        {links.map((link) => (
          <li key={link.text}>
            <Text tag="a" variant="smallestException" href={link.url}>
              {link.text}
            </Text>
          </li>
        ))}
      </MenuWrapper.CentralSide>
      <MenuWrapper.RightSide>
        <Switch
          onChange={toggleTheme}
          checked={theme.title === 'dark'}
          checkedIcon={<Sun />}
          uncheckedIcon={<Moon />}
          onColor={theme.primary.color}
          offColor={theme.primary.color}
        />

        <Button ghost variant="secondary" href="/app/login">Entrar</Button>

        <Button variant="primary" onClick={onCadastrarClick}>Cadastrar</Button>
      </MenuWrapper.RightSide>
    </MenuWrapper>
  );
}

Menu.propTypes = {
  onCadastrarClick: PropTypes.func.isRequired,
  toggleTheme: PropTypes.func.isRequired,
};
