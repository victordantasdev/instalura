import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import PropTypes from 'prop-types';
import Switch from 'react-switch';
// import Text from '../../foundation/Text';
import MenuWrapper from './styles/MenuWrapper';
import { LogoDark, LogoLight } from '../../../theme/Logos';
import { Moon, Sun } from '../../../../public/icons/SwichIcons';
import { SearchIcon } from '../../../../public/icons/SearchIcon';
import { SearchBar, Input } from './styles/SearchBar';
import { HeartIcon, HomeIcon, PostIcon } from '../../../../public/icons/MenuLogadoIcons';
import { MenuItems, ProfilePicture } from './styles/MenuItems';

export default function MenuLogado({ toggleTheme }) {
  const theme = useContext(ThemeContext);

  return (
    <MenuWrapper>
      <MenuWrapper.LeftSide>
        {theme.title === 'light' ? <LogoLight /> : <LogoDark />}
      </MenuWrapper.LeftSide>
      <MenuWrapper.RightSide>
        <SearchBar>
          <SearchIcon color={theme.tertiary.color} />
          <Input type="text" placeholder="Pesquisar" />
        </SearchBar>

        <MenuItems>
          <Switch
            onChange={toggleTheme}
            checked={theme.title === 'dark'}
            checkedIcon={<Sun />}
            uncheckedIcon={<Moon />}
            onColor={theme.primary.color}
            offColor={theme.primary.color}
          />
          <PostIcon color={theme.secondary.color} />
          <HomeIcon color={theme.primary.color} />
          <HeartIcon color={theme.background.contrastText} />
          <ProfilePicture
            alt="Imagem de perfil"
            src="https://github.com/omariosouto.png"
            width={32}
            height={32}
          />
        </MenuItems>
      </MenuWrapper.RightSide>
    </MenuWrapper>
  );
}

MenuLogado.propTypes = {
  toggleTheme: PropTypes.func.isRequired,
};
