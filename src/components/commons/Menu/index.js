import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import Brightness7Icon from '@material-ui/icons/Brightness7';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import Text from '../../foundation/Text';
import Button from '../Button';
import MenuWrapper from './styles/MenuWrapper';
import { LogoDark, LogoLight } from '../../../theme/Logos';

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
export default function Menu({ toggleTheme }) {
  const { colorTheme } = useContext(ThemeContext);

  return (
    <MenuWrapper>
      <MenuWrapper.LeftSide>
        {colorTheme.title === 'light' ? <LogoLight /> : <LogoDark />}
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
        {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events */}
        <Button
          ghost
          variant="primary"
          onClick={toggleTheme}
        >
          {colorTheme.title === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
        </Button>

        <Button ghost variant="secondary">Entrar</Button>

        <Button variant="primary">Cadastrar</Button>
      </MenuWrapper.RightSide>
    </MenuWrapper>
  );
}
