import Logo from '../../../theme/Logo';
import { Button } from '../Button';
import { MenuWrapper } from './styles/MenuWrapper';

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

export default function Menu() {
  return (
    <MenuWrapper>
      <MenuWrapper.LeftSide>
        <Logo />
      </MenuWrapper.LeftSide>
      <MenuWrapper.CentralSide>
        {links.map(link => (
          <li key={link.text}>
            <a href={link.url}>{link.text}</a>
          </li>
        ))}
      </MenuWrapper.CentralSide>
      <MenuWrapper.RightSide>
        <Button ghost variant='secondary.main'>
          Entrar
        </Button>
        <Button variant='primary.main'>Cadastrar</Button>
      </MenuWrapper.RightSide>
    </MenuWrapper>
  );
}
