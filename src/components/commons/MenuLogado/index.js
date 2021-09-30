import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import PropTypes from 'prop-types';
import Switch from 'react-switch';
// import Text from '../../foundation/Text';
import MenuWrapper from './styles/MenuWrapper';
import { LogoDark, LogoLight } from '../../../theme/Logos';
import { Moon, Sun } from '../../../../public/icons/SwichIcons';
import SearchBar from './styles/SearchBar';

export default function MenuLogado({ toggleTheme }) {
  const theme = useContext(ThemeContext);

  return (
    <MenuWrapper>
      <MenuWrapper.LeftSide>
        {theme.title === 'light' ? <LogoLight /> : <LogoDark />}
      </MenuWrapper.LeftSide>
      {/* <MenuWrapper.CentralSide>
        {links.map((link) => (
          <li key={link.text}>
            <Text tag="a" variant="smallestException" href={link.url}>
              {link.text}
            </Text>
          </li>
        ))}
      </MenuWrapper.CentralSide> */}
      <MenuWrapper.RightSide>
        <Switch
          onChange={toggleTheme}
          checked={theme.title === 'dark'}
          checkedIcon={<Sun />}
          uncheckedIcon={<Moon />}
          onColor={theme.primary.color}
          offColor={theme.primary.color}
        />
        <SearchBar type="text" placeholder="Pesquisar" />
      </MenuWrapper.RightSide>
    </MenuWrapper>
  );
}

MenuLogado.propTypes = {
  toggleTheme: PropTypes.func.isRequired,
};
